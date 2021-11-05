import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginAction, signupAction } from '../Actions/UserActions';
import MessageBox from '../Components/MessageBox';
import { Link } from 'react-router-dom'

import "../css/sigup.css"
import Full_transparent_fz from "../images/Full_transparent_fz.png"

export default function LoginSignupWays({page}) {
    const userLogin = useSelector(state => state.userLogin)
    const [error, setError] = useState()
    const [showPassword, setShowPassword] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ver_code, setVer_code] = useState("")
    const [msg, setMsg] = useState();
    const dispatch = useDispatch()
    page !== "signup"&&(page="login");
    !userLogin.payload&&(userLogin.payload = {})
    useEffect(()=>{
        setError(userLogin.payload.error);
        setMsg(userLogin.payload.msg);
    },[userLogin.payload])
    const handleLoginForm = (e)=>{
        e.preventDefault();
        if((page==="signup"&&name.length>0 && email.length>0 && password.length>0)||(page!=="signup"&& email.length>0 && password.length>0)){
            dispatch(loginAction({name,email,password,page}))
        }
    }
    const handleSignup = (e)=>{
        e.preventDefault()
        if(ver_code.length>0&&name.length>0){
            dispatch(signupAction({username:name,useremail:email,password,code:ver_code}))
            setName("");
            setPassword("");
            setEmail("");
            setVer_code("");
        }
    }
    const handleShowLogin = ()=>{
        setShowLoginForm(!showLoginForm); 
        userLogin.payload.error=userLogin.payload.msg=null;
        setMsg(null);setError(null)
    }
    if(userLogin.payload.user_id){
        window.location.replace(`https://13k13.com/?user=${userLogin.payload.username}&id=${userLogin.payload.user_id}&picture=${userLogin.payload.userPicture}`)
    }
    return (
    // <div className="login-ways">
    //     {
    //         showLoginForm?(
    //         <form className="login-form">
    //             {error&&(
    //                 <MessageBox id="message" variant="danger">{error}</MessageBox>
    //             )}
    //             {
    //             msg&&(
    //                 <MessageBox id="message" variant="success">{msg}</MessageBox>
    //             )
    //             }

    //             <div onClick={handleShowLogin} className="go-back-button">
    //                 <i className="fa fa-arrow-left fa-2x"></i>
    //             </div>
    //             <div className="login-fields">
    //                 {
    //                     userLogin.payload.Signup?(
    //                         <form>
    //                             <input type="text" className={error&&"input-error"} onChange={e=>setName(e.target.value)} value={name} placeholder="name"/>    
    //                             <input type="text" className={error&&"input-error"} onChange={e=>setVer_code(e.target.value)} placeholder="6 digit code"/>
    //                             <button onClick={e=>handleSignup(e)}>
    //                                 Signup
    //                             </button>
    //                         </form>
    //                     ):(
    //                         <form>
    //                             <input type="email"  className={error&&"input-error"} onChange={e=>setEmail(e.target.value)} value={email} placeholder="email" />
    //                             <div className="login-form-password">
    //                                 <input placeholder="password" className={error&&"input-error"} type={`${showPassword?"text":"password"}`} value={password} onChange={e=>setPassword(e.target.value)}/>
    //                                 {password&&password.length>0 && (showPassword?(<span onClick={()=>setShowPassword(!showPassword)}>Hide password</span>):(<span  onClick={()=>setShowPassword(!showPassword)}>Show password</span>))}
    //                             </div>
    //                             <div id="login-form-submit">
    //                                 <button onClick={e=>handleLoginForm(e)}>
    //                                     Submit
    //                                 </button>
    //                             </div>
    //                         </form>
    //                     )
    //                 }
    //             </div>
    //         </form>
    //         ):(
    //         <div className="login-social">
    //         <div className="login-way">
    //             <a href={`http://13k13.com/api/login/facebook/${page}`}className="facebook-btn">
    //                 <div>
    //                         <i className="fa fa-facebook"/>
    //                         <p>Continue with Facebook</p>
    //                 </div>
    //             </a>    
    //         </div>
    //         <div className="login-way">
    //         <a href={`http://13k13.com/api/login/google/${page}`}className="google-connect">
    //             <div class="google-btn">
    //                     <div class="google-icon-wrapper">
    //                             <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt=""/>
    //                     </div>
    //                     <p class="btn-text">Continue with google</p>
    //             </div>    
    //         </a>
    //         </div>
    //         <div className="login-way" onClick={()=>setShowLoginForm(true)}>
    //             <div className="login-email">
    //                 <i className="fa fa-user"></i><p>Use email/password</p>
    //             </div>  
    //         </div>
    
    //          </div>
    //         )
    //     }
    //      </div>

    <>





	
    <svg class="Rectangle_23">
        <rect id="Rectangle_23" rx="20" ry="20" x="0" y="0" width="656" height="952">
        </rect>
    </svg>
    
    <div id="Log_in_to_13k13_to_show_your__">
        <span>Log in to 13k13 to show your <br/>talents to the world</span>
    </div>
    <div id="By_continuing_you_agree_to_13k">
        <span>By continuing, you agree to 13k13's </span><span style={{textDecoration:"underline"}}><Link>Terms of service</Link></span><span> and confirm that<br/>you have read 13k13's </span><span style={{textDecoration:"underline"}}><Link>Privacy Policy</Link></span><span>.</span>
    </div>
    
    <div id="Dont_have_an_account_Sign_up">
        <span>Don't have an account? </span><Link><span style={{textDecoration:"underline"}}>Sign up</span></Link>
    </div>
    <Link><svg class="ic_cancel_24px" viewBox="2 2 51.678 51.678">
        <path id="ic_cancel_24px" d="M 27.83896446228027 2 C 13.55001544952393 2 2 13.55001544952393 2 27.83896446228027 C 2 42.12791442871094 13.55001544952393 53.67792892456055 27.83896446228027 53.67792892456055 C 42.12791442871094 53.67792892456055 53.67792892456055 42.12791442871094 53.67792892456055 27.83896446228027 C 53.67792892456055 13.55001449584961 42.12791442871094 2 27.83896446228027 2 Z M 40.75844573974609 37.11515426635742 L 37.11515426635742 40.75844573974609 L 27.83896446228027 31.48225784301758 L 18.56277656555176 40.75844573974609 L 14.91948127746582 37.11515426635742 L 24.19567108154297 27.83896446228027 L 14.91948127746582 18.56277656555176 L 18.56277656555176 14.91948127746582 L 27.83896446228027 24.19567108154297 L 37.11515426635742 14.91948127746582 L 40.75844573974609 18.56277656555176 L 31.48225784301758 27.83896446228027 L 40.75844573974609 37.11515426635742 Z">
        </path>
    </svg></Link>
    <svg class="Line_9" viewBox="0 0 654.941 1">
        <path id="Line_9" d="M 0 0 L 654.9407348632812 0">
        </path>
    </svg>
    <svg class="Line_10" viewBox="0 0 654.941 1">
        <path id="Line_10" d="M 0 0 L 654.9407348632812 0">
        </path>
    </svg>
    <img id="Full_transparent_fz" src={Full_transparent_fz} />
        
    
    
    
    <div id="Group_65">
        <div id="Continue_with_Facebook">
            <span>Continue with Facebook</span>
        </div>
        <div id="Continue_with_Google">
            <span>Continue with Google</span>
        </div>
        <div id="Continue_with_Twitter">
            <span>Continue with Twitter</span>
        </div>
        <div id="Group_61">
            <div id="Use_phone__email__username">
                <span>Use phone / email / username</span>
            </div>
            <div id="ic_record_voice_over_24px">
                <svg class="Ellipse_3_gj">
                    <ellipse id="Ellipse_3_gj" rx="9.02450942993164" ry="9.02450942993164" cx="9.02450942993164" cy="9.02450942993164">
                    </ellipse>
                </svg>
                <svg class="Path_3" viewBox="1 81.186 35.899 13.462">
                    <path id="Path_3" d="M 18.94958305358887 81.18632507324219 C 12.95890808105469 81.18632507324219 1 84.19287872314453 1 90.16111755371094 L 1 94.64851379394531 L 36.89916229248047 94.64851379394531 L 36.89916229248047 90.16111755371094 C 36.89916229248047 84.19287872314453 24.94025421142578 81.18632507324219 18.94958305358887 81.18632507324219 Z">
                    </path>
                </svg>
            </div>
            <Link><svg class="Rectangle_37">
                <rect id="Rectangle_37" rx="0" ry="0" x="0" y="0" width="65" height="64">
                </rect>
            </svg></Link>
            <Link to="/loginup"><svg class="Rectangle_36">
                <rect id="Rectangle_36" rx="0" ry="0" x="0" y="0" width="387" height="64">
                </rect>
            </svg></Link>
        </div>
        <div id="Group_62">
            <svg class="iconmonstr-facebook-6" viewBox="3038.338 5468.437 18.697 36">
                <path id="iconmonstr-facebook-6" d="M 3043.864501953125 5504.4365234375 L 3043.864501953125 5488.015625 L 3038.337890625 5488.015625 L 3038.337890625 5481.6162109375 L 3043.864501953125 5481.6162109375 L 3043.864501953125 5476.89697265625 C 3043.864501953125 5471.419921875 3047.2099609375 5468.43701171875 3052.09619140625 5468.43701171875 C 3053.745849609375 5468.43115234375 3055.394287109375 5468.515625 3057.034912109375 5468.68994140625 L 3057.034912109375 5474.4140625 L 3053.645751953125 5474.4140625 C 3050.98828125 5474.4140625 3050.474609375 5475.67724609375 3050.474609375 5477.529296875 L 3050.474609375 5481.61376953125 L 3056.812255859375 5481.61376953125 L 3055.98681640625 5488.013671875 L 3050.474609375 5488.013671875 L 3050.474609375 5504.4365234375 L 3043.864501953125 5504.4365234375 Z">
                </path>
            </svg>
            <div id="Group_54">
                <svg class="Rectangle_39">
                    <rect id="Rectangle_39" rx="0" ry="0" x="0" y="0" width="65" height="65">
                    </rect>
                </svg>
                
                <a href={`http://13k13.com/api/login/facebook/signup`}><svg class="Rectangle_38">
               
                    <rect id="Rectangle_38" rx="0" ry="0" x="0" y="0" width="387" height="65">
                    </rect>
                </svg></a>
               
            </div>
        </div>
        <div id="Group_63">
            <svg class="icons8-google" viewBox="3 3 36 36.728">
                <path id="icons8-google" d="M 21.3697681427002 2.999999284744263 C 11.22531509399414 2.999999284744263 2.999999284744263 11.22239208221436 2.999999284744263 21.36380195617676 C 2.999999284744263 31.50520896911621 11.22531509399414 39.72760772705078 21.3697681427002 39.72760772705078 C 36.6882438659668 39.72760772705078 40.13941192626953 25.50637054443359 38.70244598388672 18.30316734313965 L 36.66696929931641 18.30316734313965 L 33.19682693481445 18.30316734313965 L 21.36380195617676 18.30316734313965 L 21.36380195617676 24.4244327545166 L 33.20585250854492 24.4244327545166 C 31.84448051452637 29.70142555236816 27.06576347351074 33.6063346862793 21.36380195617676 33.6063346862793 C 14.60286045074463 33.6063346862793 9.121265411376953 28.12474060058594 9.121265411376953 21.36380195617676 C 9.121265411376953 14.60286045074463 14.60286045074463 9.121265411376953 21.36380195617676 9.121265411376953 C 24.43820953369141 9.121265411376953 27.23883819580078 10.26249980926514 29.38893890380859 12.13407707214355 L 33.73778915405273 7.788223743438721 C 30.47209358215332 4.813287258148193 26.13364219665527 2.999999284744263 21.3697681427002 2.999999284744263 Z">
                </path>
            </svg>
            <div id="Group_57">
                <svg class="Rectangle_39_gv">
                    <rect id="Rectangle_39_gv" rx="0" ry="0" x="0" y="0" width="65" height="65">
                    </rect>
                </svg>
                <a href={`http://13k13.com/api/login/google/signup`}><svg class="Rectangle_38_gw">
                    <rect id="Rectangle_38_gw" rx="0" ry="0" x="0" y="0" width="387" height="65">

                    </rect>
                </svg></a>
            </div>
        </div>
        <div id="Group_64">
            <svg class="Path_7" viewBox="0 2.248 36 29.256">
                <path id="Path_7" d="M 36 5.711501121520996 C 34.67550659179688 6.299499988555908 33.25200271606445 6.69550085067749 31.75800132751465 6.874000549316406 C 33.28350448608398 5.960500717163086 34.45500183105469 4.513000011444092 35.00550079345703 2.788000583648682 C 33.57900238037109 3.634000301361084 31.99800109863281 4.249000549316406 30.31500053405762 4.580500602722168 C 28.96950149536133 3.145000219345093 27.04800033569336 2.248000144958496 24.92399978637695 2.248000144958496 C 20.1555004119873 2.248000144958496 16.6515007019043 6.697000503540039 17.72850036621094 11.31550025939941 C 11.59200191497803 11.00800037384033 6.150000095367432 8.068000793457031 2.506500005722046 3.59950065612793 C 0.5715000629425049 6.919000148773193 1.503000140190125 11.26150131225586 4.791000366210938 13.46049976348877 C 3.582000017166138 13.42149925231934 2.442000150680542 13.09000015258789 1.447499990463257 12.53650093078613 C 1.36650013923645 15.95800113677979 3.818999767303467 19.15900230407715 7.37100076675415 19.87150192260742 C 6.331501483917236 20.15350341796875 5.193000316619873 20.21950149536133 4.035000324249268 19.99750328063965 C 4.974000453948975 22.93150329589844 7.701000213623047 25.06599998474121 10.93500137329102 25.12600135803223 C 7.830000400543213 27.56050300598145 3.917999982833862 28.64800071716309 0 28.18600273132324 C 3.268500089645386 30.2815055847168 7.152000427246094 31.50400733947754 11.32200050354004 31.50400733947754 C 25.03500366210938 31.50400733947754 32.78249740600586 19.9225025177002 32.31449890136719 9.534999847412109 C 33.75749588012695 8.492500305175781 35.01000213623047 7.192001342773438 36 5.711501121520996 Z">
                </path>
            </svg>
            <div id="Group_58">
                <svg class="Rectangle_39_g">
                    <rect id="Rectangle_39_g" rx="0" ry="0" x="0" y="0" width="65" height="65">
                    </rect>
                </svg>
                <Link><svg class="Rectangle_38_g">
                    <rect id="Rectangle_38_g" rx="0" ry="0" x="0" y="0" width="387" height="65">
                    </rect>
                </svg></Link>
            </div>
        </div>
    </div>
    
    
    
    
</>

    )
}
