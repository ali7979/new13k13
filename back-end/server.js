const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const expressSession = require("express-session")
const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const _ = require('lodash');
const app = express();
const path = require("path")
const PORT = 8000;
const db = require('./dbConnection')
const url = require("url")
const https = require("https");
const fs = require("fs");
const formidable  = require('formidable');
let page,videoPath="";
var verificationCode;
const SENDGRID_APIKEY = "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"
app.use(fileUpload({
    createParentPath: true
}));
app.use(expressSession({
    secret:'13k13',
    resave:true,
    saveUninitialized:true
}))
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true,keepExtensions: true,defer: true }));
app.use(morgan('dev'));
app.use(express.static(path.join("../",__dirname,"front-end","build")))
// google and facebook connection keys
const GOOGLE_CLIENT_ID = "885400054734-3nuviod30tisvgg59p0o45t7s3tddmik.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "vNB7O8YhhQJ4funvg84VjUII";
const FACEBOOK_CLIENT_ID = "500886637685853";
const FACEBOOK_CLIENT_SECRET = "a8211495cbc21f604529b42269821279";

//passport strategies
passport.use(new GoogleStrategy({
    clientID : GOOGLE_CLIENT_ID,
    clientSecret:GOOGLE_CLIENT_SECRET,
    callbackURL:"/api/google"
},(accessToken,refreshToken,profile,callback)=>{
	callback(null,profile)
}));

passport.use(new FacebookStrategy({
    clientID:FACEBOOK_CLIENT_ID,
    clientSecret:FACEBOOK_CLIENT_SECRET,
    callbackURL:"https://13K13.com/api/facebook/callback",
    profileFields: ['id', 'displayName', 'photos', 'email']
},(accessToken,refreshToken,profile,done)=>{
    return done(null,profile);
}));
passport.serializeUser((user,callback)=>{
    callback(null,user);
})

passport.deserializeUser((user,callback)=>{
    callback(null,user)
})


app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
})
app.use(passport.initialize())
app.use(passport.session())

//routes
app.get("/api/login/google/:page",(req,res)=>{
    page=req.params.page;
    res.redirect("/api/login/google");
});
app.get("/api/login/google",passport.authenticate("google",{scope:["profile","email"]}))
app.get("/api/google",passport.authenticate("google"),async (req,res)=>{
    let {sub,name,picture,email} = req.user._json;
  await process_user({id:sub,username:name,picture,useremail:email},res);
})
app.get("/api/login/facebook/:page",(req,res)=>{
    page=req.params.page;
    res.redirect("/api/login/facebook");
});

app.get("/api/login/facebook",passport.authenticate("facebook"))


app.get("/api/facebook/callback",passport.authenticate('facebook'),
async function(req, res) {
   let {id,name,picture} = req.user._json;
   await process_user({id,username:name,picture:picture.data.url},res);
})
app.post("/api/login/username",async (req,res)=>{
    page = req.body.page;
    let useremail = req.body.email;
    let password = req.body.password;

    if((useremail.length>0 && useremail.includes("@") && password.length>0)||(username.length>0 && useremail.length>0 && useremail.includes("@") && password.length>0)){
        let user = await findUserByEmail(useremail);
        let userFound = user!==null;
        let passwordCorrect;
        if(user){
            passwordCorrect  = (password && bcrypt.compareSync(password,user.password));
        }
        if(userFound && passwordCorrect){
            res.send({
                username:user.name,
                user_id:user.id,
                userPicture:user.picture
            })
        }
        if((!userFound && password)){
            verificationCode = codeGenerator();
            const transporter = nodemailer.createTransport(
                sendgridTransport({
                    auth:{
                        api_key:SENDGRID_APIKEY,
                    }
                })
            )
            var mailOptions = { from: 'info@13rms.com', to: useremail, subject: 'Account Verification Code', text: 'Hello '+ username +',\n\n' + 'Please verify your account by entering the code in 13k13 :\n\n'+verificationCode+'\n\nThank You!\n' };
            transporter.sendMail(mailOptions, function (err) {
                if (err) { 
                    return res.send({error:'Technical Issue!'});
                }
                return res.status(200).send({msg:'A verification code has been sent to ' + useremail + '.',Signup:true});
            });
        }
        if((userFound && password && !passwordCorrect)){ 
            res.send({error:'password incorrect !'})
        }
    }
    else{
        res.send({error:"please enter valid data."})
    }

})
app.post("/api/confirmation/:useremail",async (req,res)=>{
    try {
        let username = req.body.username,
        useremail = req.params.useremail,
        password = req.body.password,
        userVerificationCode = req.body.code,
        userPicture = "";
        if(userVerificationCode===verificationCode){
            userPicture = "/user-default-img.png",
            token = crypto.randomBytes(16).toString('hex');
            // Generate a salt
            const salt = await bcrypt.genSalt(10);
            // Hash password
            password =  await bcrypt.hash(password, salt);
            const sql = `insert into user values(?,null,?,null,?,?,null,?)`
            await db.query(sql, [username,token,password,userPicture,useremail], function (err, rows) {
                if (err) {
                    console.log(err)
                    res.send({msg:"account allready verified"})
                }
            }
            );
            res.send({user:{
                username,
                useremail,
                user_id:token,
                userPicture
            }})
        }else{
            res.send({error:"invalid verification code !"})
        }

    } catch (err) {
    console.log(err)
    res.status(401).send({err})
    }          
})
app.get("/api/logout",(req,res)=>{
    req.logout()
    res.redirect("http://13k13.com/")
})
app.post('/api/follow',async (req, res) => {
    const {user,follower} = req.body;
    try {
        let check = await getData("select * from follow where user_id = ? and follower_id = ?",[user,follower]);
        console.log(check);
        if(check[0]!==undefined){
            res.send({msg:"followed with success"});
        }else{
            await db.query("insert into follow values (?,?)",[user,follower]);
            res.send({msg:"followed with success"});
        }
    } catch (error) {
        res.status(402).send(error)
    } 	
});
app.post('/api/unfollow',async (req, res) => {
    const {user,follower} = req.body;
    try {
        await db.query("delete from follow where user_id = ? and follower_id = ?",[user,follower]);
        res.send({msg:"unfollowed with success"});
    } catch (error) {
        res.status(402).send(error)
    } 	
});

app.post('/api/profile',async(req,res)=>{
    const {my_id,id} = req.body;
    try {
        const userData = await getData("select * from user where id = ?",[id]);
        const userVideos = await getData("select video_link,id from video where user_id = ? ",[id]);
        const followers = await getData("select count(*) as followers from follow where user_id = ?",[id]);
        const following = await getData("select count(*) as following from follow where follower_id = ?",[id])
        const userLikes = await getData("select count(*) as total_likes from likes where video_id in (select id from video where user_id = ?);",[id])
        let userLikedVideos,amIhisFollower;
        if(my_id===id){
            userLikedVideos = await getData("select video_link,id from video where id in (select video_id from likes where user_id = ?);",[id])
        }else{
            amIhisFollower = await getData("select * from follow where user_id = ? and follower_id = ?",[id,my_id])
            amIhisFollower = amIhisFollower[0]!==undefined;
        }
        if(videoPath.length>0){
            fs.unlink(videoPath,(err)=>{
                if(err){
                    console.log(err);
                }
            })
        }
        res.send({userData,userVideos,userLikedVideos,followers,following,userLikes,amIhisFollower})
    } catch (error) {
        console.log(error);
        res.status(404).send({msg:"an error has occured"})
    }
})
app.post('/api/updateProfile', async (req, res) => {
    try {
        const {oldPic,newBio,id} = req.body;
        if(req.files){
            let newPic = req.files.newPic;
            let newPicPath;
            fs.unlink("../front-end/public"+oldPic,(err)=>{
                if(err){
                    console.log(err);
                    throw err;
                }
            })
            newPic.name = Date.now()+"."+newPic.mimetype.split("/")[1];
            newPicPath = `/user_images/${newPic.name}`
            if(newPic.mimetype.match(/\.(png|jpg|jpeg)$/)){
                res.status(401).send({error:"Please Upload an image"})
            }
            newPic.mv(`../front-end/public${newPicPath}`,(err)=>{
                if(err){
                console.log(err);
                 res.status(404).send({err})
                }
            });
            await db.query("update user set picture = ? where id = ?",[newPicPath,id],(err)=>{
                if(err){
                    console.log(err);
                    throw err;
                }
    
            })
            res.send({picture:newPicPath,bio:newBio})
        }else{
            await db.query("update user set bio = ? where id = ?",[newBio,id]);
            res.send({picture:oldPic,bio:newBio})

        }
    } catch (error) {
        console.log(error);
        res.send("something went wrong!")
    }
});
//>>>>>>>>>>>>>>>>video API<<<<<<<<<<<<<<<<<<
app.post('/api/video/placeVideo',async (req,res)=>{
    try {
        
        let avatar = req.files.video;
        avatar.name = 'video_' + Date.now()+"."+avatar.mimetype.split("/")[1];
        videoPath = `../front-end/public/video/${avatar.name}`
        if(avatar.mimetype.match(/\.(mp4|MPEG-4|mkv)$/)){
            res.status(401).send({error:"Please Upload a video"})
        }
        avatar.mv(videoPath,(err)=>{
            if(err){
            console.log(err);
             res.status(404).send({err})
            }
        });
        res.send({videoPath})
    } catch (error) {
        res.status(502).send(error)
    }
    });
    
app.post('/api/video/uploadVideo',async(req, res) => {

    try {
        const {title,description,visibility,id} = req.body;
        if(visibility ==="Public"){
            db.query("insert into video values (null,?,?,?,?,?);",[title,description,id,videoPath,visibility])
        }else if(visibility === "Friends"){
            await db.query("insert into video values (null,?,?,?,?,?);",[title,description,id,videoPath,visibility])
            video = await getData("select id from video where video_link = ?",videoPath);
            video&&(video=video[0])
            res.redirect(307,url.format({
                pathname:"/api/video/share",
                query:{
                    user_id:id,
                    video_id:video.id
                },
              }));
        }else if(visibility === "Private"){
            db.query("insert into video values (null,?,?,?,?,?);",[title,description,id,videoPath,visibility])

        }
        videoPath = "";
        res.send(true)
    } catch (error) {
        console.log(error);
        res.status(402).send(error)
    }
 })
 app.post("/api/video/like",async (req,res)=>{
     const {id,video_id} = req.body;
     try {
         await db.query("insert into likes values (?,?);",[id,video_id])
         res.send(true)
     } catch (error) {
         res.status(401).send({error})
     }
 })
 app.post("/api/video/cancel-like",async(req,res)=>{
     const {video_id} = req.body;
     try {
         await db.query("delete from likes where video_id = ?",video_id);
         res.send(true) 
     } catch (error) {
         res.status(401).send({error})
     }
 })
 app.post("/api/video/view",async (req,res)=>{
    const {user_id,video_id} = req.body;
    try {
        const viewerExist = await getData("select * from views where user_id = ? and video_id = ?",[user_id,video_id])
        if(!viewerExist[0]){
            await db.query("insert into views values (?,?);",[user_id,video_id])
            res.send({viewed:true,video_id}) 
        }else{
            res.send(false)
        }
 
    } catch (error) {
        res.status(401).send({error})
    }
})
app.post("/api/video/share",async (req,res)=>{
    req.body.user_id===undefined &&(req.body=req.query)

    const {user_id,video_id} = req.body;
    try {
        const followers = await getData("select follower_id from follow where user_id = ?",user_id)
        followers.map(item=>{
            db.query("insert into shares values (?,?,?);",[user_id,video_id,item.follower_id])
        })
        res.send(true)
    } catch (error) {
        res.status(401).send({error})
    }
})
 app.post("/api/video/comment",async (req,res)=>{
     const {user_id,video_id,text} = req.body;
     try {
          await db.query("insert into comment values (?,?,?);",[user_id,video_id,text])
          res.send(true)
     } catch (error) {
         res.status(401).send({error})
     }
 })

 app.post("/api/video/seed",  async(req,res)=>{
    try {
        const {id} = req.body
        let sql = `SELECT * FROM video where id in (select video_id from shares where target_user_id = ?) limit 5;`
        let videos = []
        videos.unshift(...await getData(sql,id)) 
        sql = "select * from video where visibility = 'Public' or (visibility = 'Friends' and user_id = ?);"
        videos.push(...await getData(sql,id)) 
        videos = videos.filter(item=>item!==undefined)
        sql = "select name from user where id = ?"
        await videos.map(async (item,key)=>{
            item.name=await getData(sql,item.user_id)
            item.views = await getData("select count(*) from views where video_id = ?",item.id);
            item.comments = await getData("select count(*) from comment where video_id = ?",item.id);
            item.likes = await getData("select count(*) from likes where video_id = ?",item.id);
            item.shares = await getData("select count(*) from shares where video_id = ?",item.id);
            item.isLiked = await getData("select * from likes where user_id = ? and video_id = ?",[id,item.id]);
            item.followed = await getData("select * from follow where follower_id = ? and user_id = ?",[id,item.id]);
            item.followed = item.followed[0]!==undefined;
            item.AllComments = await getData("select * from comment where video_id = ?",item.id);
            item.AllComments[0]&&(
                item.AllComments.map(async item=>{
                    item.name = await getData("select name from user where id = ?",item.user_id)
                    if(item.name){
                        item.name = item.name[0].name;
                    }

                })
            )
            if(item.name && item.views && item.comments && item.likes && item.shares && item.isLiked && item.AllComments){
                item.name = item.name[0].name
                item.views = item.views[0]["count(*)"]
                item.comments = item.comments[0]["count(*)"]
                item.likes = item.likes[0]["count(*)"]
                item.shares = item.shares[0]["count(*)"]
                item.isLiked = item.isLiked[0]!==undefined
                item.AllComments = item.AllComments[0]?item.AllComments:[]
            }
            videos[key]=item
        })
        setTimeout(() => {
            res.send(videos)
        }, 1000);
        if(videoPath!==undefined){
            if(videoPath.length>0){
                fs.unlink(videoPath,(err)=>{
                    if(err){
                        console.log(err);
                    }
                })
                videoPath = "";
            }
        }
            
     } catch (error) {
         console.log(error);
     }
 })
 
 const getData = (sql,params)=>{
     try {
         return new Promise((resolve,reject)=>{
            db.query(sql,params||"",(err,rows)=>{
                if(err){
                    console.log(err)
                    reject(err)
                }
                rows&&resolve(rows)
            })
         })
     } catch (error) {
         console.log(error);
         reject(error)
     }
 }
async function process_user(userData,res){
    let {id,username,picture} = userData
    let user = await findUserById(id);
    let userFound = user!==null;
    if(userFound){
            res.redirect(`https://13k13.com/?user=${user.name}&id=${user.id}&picture=${user.picture}&msg=logged in successfuly`)
    }    
    if(userFound){
        res.redirect(`https://13k13.com/?user=${user.name}&id=${user.id}&picture=${user.picture}`)
    }
    if(!userFound){  
        try {
            //moving the user's picture to the server
            var fullUrl = picture;
            var imagePath = "../front-end/public/user_images/"+id+".jpg";
            var file = fs.createWriteStream(imagePath);
            var request =  https.get(picture, function(response) {
                console.log(response);
            response.pipe(file);
            })
            imagePath = imagePath.replace("../front-end/public","")
            //inserting data 
            const sql = `insert into user values(?,null,?,null,null,?,null,null)`
            db.query(sql, [username,id,imagePath], function (err, rows) {
                if (err) {
                    console.log('err')
                }
                    res.redirect(`http://13k13.com/?user=${username}&id=${id}&picture=${imagePath}`)
                }
            );
        } catch (err) {
            console.log(err)
        }          
      
    }

}
let findUserById = async (id) => {
    try {
            return new Promise((resolve,reject)=>{
            const sql = `SELECT * FROM user WHERE id = ?`
             db.query(sql, id, function (err, rows) {
                    if (err) {
                        console.log('error')
                        reject(false)
                    }
                    if(rows&&rows[0])
                    resolve(rows[0])
                    else resolve(null)
                }
            );
        })
    } catch (err) {
        console.log(err)
        reject(false)
    }

    
}
let findUserByEmail = async (email) => {
    try {
            return new Promise((resolve,reject)=>{
            const sql = `SELECT * FROM user WHERE gmail = ?`
             db.query(sql, email, function (err, rows) {
                    if (err) {
                        console.log('error')
                        reject(false)
                    }
                    if(rows&&rows[0])
                    resolve(rows[0])
                    else resolve(null)
                }
            );
        })
    } catch (err) {
        console.log(err)
        reject(false)
    }

    
}
const codeGenerator = () => {
    const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
    for (let i = 0; i < 6; i++) {
      password += alpha.charAt(
        Math.floor(Math.random() * alpha.length)
      );
    }
    return password;
  };