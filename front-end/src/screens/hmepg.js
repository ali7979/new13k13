// import hmep from"../css/hmep.css"
// import Fulltransparent from "../images/Full_transparent.png"
// import Ellipse_4 from "../images/Ellipse_4.png"
// import Ellipse_3 from "../images/Ellipse_3.png"
// import Ellipse_6 from "../images/Ellipse_6.png"
// import Ellipse_6_ch from "../images/Ellipse_6.png"
// import Ellipse_7 from "../images/Ellipse_7.png"
// import Ellipse_8 from "../images/Ellipse_8.png"
// import Ellipse_9 from "../images/Ellipse_9.png"
// import Ellipse_10 from "../images/Ellipse_10.png"
// import hmimg1 from '../images/Ellipse_6_ch.png'
// import hmimg2 from '../images/Ellipse_7@2x.png'
// import hmimg3 from '../images/Ellipse_9_cp@2x.png'
// import hmimg4 from '../images/Ellipse_6_cm@2x.png'
// import Rectangle_5 from "../images/Rectangle_5.png"
// import Rectangle_45 from "../images/Rectangle_45.png"
// import Rectangle_45_dk from "../images/Rectangle_45_dk.png"
// import Rectangle_45_ds from "../images/Rectangle_45_ds.png"
// import Rectangle_45_d from "../images/Rectangle_45_d.png"
// import Rectangle_45_ea from "../images/Rectangle_45_ea.png"
// import Ellipse_2 from "../images/Ellipse_2.png"

// import { Link } from "react-router-dom"
// export default function hmepg() {


//     return (
        
		
// 		<>
//         <div className="login-now">Login to show the world  your talents! </div>
//         <div className="vids">

// <div className="before-footer">
//                  <div className="hhead"><h1>Trending Videos <i class="fas fa-fire"></i></h1>
//                  <div className="hlst">
//                             <div className="hpeople">
//                                 <img  className="hpeopleimg" src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" /><span className="names">Short Movies   <p>Tracy</p>   <i class="far fa-eye">  25000</i></span>
//                             </div>
//                             <div className="hpeople">  <img className="hpeopleimg"  src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" /><span className="names"> Dance Moves  <p>Jasper Class</p> <i class="far fa-eye"> 24000</i></span>
//                             </div>
//                             <div className="hpeople">   <img className="hpeopleimg"  src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" /><span className="names">Sad Song <p>William Ford</p> <i class="far fa-eye"> 20000</i></span>
//                             </div>
//                             <div className="hpeople">    <img className="hpeopleimg"  src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" /><span className="names">Ballet <p>Dance Group</p> <i class="far fa-eye">19000</i></span>
//                             </div>
//                         </div>
//             </div>
//             <div className="seall">
//             <a href="#">See All <i class="fas fa-angle-double-right"></i></a>
//             </div>
                
//             <div className="hhead"><h1>Discover Channels <i class="far fa-compass"></i></h1></div>
          
//   <AvatarList/>
//   <AvatarList/>
//   <AvatarList/>
//   <div className="seall">
//             <a href="#">See All <i class="fas fa-angle-double-right"></i></a>
//             </div>


  




//             </div>


//             <div className="display">
//                 <div className="frs">
//             <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" />
                    
//                     <span className="posttt">Tracy<br/><p style={{fontSize:"9px" , color:"white",marginTop:"-0rem"}}>Short Movie</p></span></div>
//             <Swiper
//                 spaceBetween={20}
//                 slidesPerView="auto"
//                 navigation={true}
//                 className="swiper"
//             >
//             {
//                 videos.length>0&&videos.map(item=>(
//                    <SwiperSlide>
//                     {({ isActive }) => {
//                         setTimeout(() => {
//                             if(isActive){
//                                 setI(item.id);
//                             }
//                         }, 100);
//                         return <Video vid={item} playVid={isActive}/>
//                     }}
                     
//                     </SwiperSlide> 
//                 ))
//             }
//              </Swiper>
                
//                 <div class="dropdown" style={{display:"flex", flexDirection:"row"}}>
//                 <p>Choose your category: </p>
//                     <button class="dropbtn">Dropdown</button>
//                 <div class="dropdown-content">
//                     <a href="#">Sports</a>
//                     <a href="#">Drama</a>
//                     <a href="#">Fantasy</a>
//                     <a href="#">Comedy</a>
//                     <a href="#">Science</a>
//                 </div>
//                 </div>

//             </div>*/
//              <div className="comments">
//                 <h1><i className="fa fa-comment fa-2x"></i></h1>
//                 <div className="all-comments">
//                     {handleVideoComments(i)}
//                 </div>

//                 <div className="add-comment">
//                     <div className="toggle-add-comment" onClick={()=>setShowAddComment(!showAddComment)}>
//                         <i className={`fa fa-${showAddComment?'close':'plus'}`}></i>
//                     </div>
//                     {showAddComment&&(
//                         <>
//                         <input type="text" placeholder="add a comment here!" autoFocus value={commentText} onKeyPress={e=>handleKeyPress(e)} onChange={e=>setCommentText(e.target.value)}/>
//                         <i className="fa fa-send" onClick={comment}></i>
//                         </>
//                     )}
//                 </div>

//         </div>
            

//         </div></>
		
// 		)};