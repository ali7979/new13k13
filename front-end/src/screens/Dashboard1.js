import React, { useEffect, useState } from 'react'
import '../css/dash.css'
import img_avatar from './img_avatar.png';
export default function Dashboard() {
    return (
        <>


            <div class="alll">

                <div class="left">
                    <div className="element ele1">
                        <div className="center">
                            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
                            <h3>ShamBhavi</h3>
                            <p>my name is sahaj kedia i love shambhavi</p>
                        </div>
                        <div className="followers">
                            <div className="lil">28.1K <p>likes</p></div>
                            <div className="lil">1M<p>likes</p></div>
                            <div className="lil">20<p>likes</p></div>
                            <div className="lil">10📹<p>likes</p></div>



                        </div>
                        <div className="list">


                            <ul>
                                <li>
                                    <a href="" class="active">
                                        <span class="las la-home"></span>
                                        <span> Home</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span class="las la-th-large"></span>
                                        <span> Feed</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span class="las la la-bell"></span>
                                        <span> Notifications</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span class="las 
                         la-search"></span>
                                        <span> Discover</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span class="las la-paper-plane"></span>
                                        <span> Direct</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span class="la-instagram"></span>
                                        <span> IGTV</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span class="las la-signal"></span>
                                        <span> Stats</span>
                                    </a>
                                </li>

                                <li>
                                    <a href="">
                                        <span class="las la-cog"></span>
                                        <span> Settings</span>
                                    </a>
                                </li>
                            </ul>



                        </div>








                    </div>


                    <div class="element ele2">
                        <div>
                            <h1>Messenger  <i class="fas fa-comment-dots"></i></h1></div>
                        <div className="lst">
                            <div className="people">
                                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" /><span className="names">Zoheb <i class="fas fa-circle" style={{ color: "#9ACD32" }}></i></span>
                            </div>
                            <div className="people">  <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" /><span className="names"> Ali <i class="fas fa-circle" style={{ color: "#9ACD32" }}></i></span>
                            </div>
                            <div className="people">   <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" /><span className="names">Sahaj <i class="fas fa-circle" style={{ color: "grey" }}></i></span>
                            </div>
                            <div className="people">    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" /><span className="names">Sourab <i class="fas fa-circle" style={{ color: "grey" }}></i></span>
                            </div>
                        </div>




                    </div>




                    <div class="element ele3">
                        <h1>Groups <i class="fas fa-user-friends"></i></h1>
                        <div className="lst">
                            <div className="people">
                                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" /><span className="names">Drawing Tips <i class="fas fa-bell"></i></span>
                            </div>
                            <div className="people">            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" /><span className="names"> Sports Updates <i class="fas fa-bell"></i></span>
                            </div>
                            <div className="people">            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" /><span className="names">Health Tips <i class="fas fa-bell-slash"></i></span>
                            </div>

                        </div>






                    </div>
                </div>
                <div class="main">
                    <div class="post">

                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />

                        <input className="makepost" type="text" placeholder="   Make a Post.." />


                        <div className="tt">
                            <a href="" class="active tta">
                                <span class="las la-home"></span>
                                <span className="ta"> Photos</span>
                            </a>

                            <a href="" class="active">
                                <span class="las la-home"></span>
                                <span className="ta"> Videos</span>
                            </a>

                            <a href="" class="active">
                                <span class="las la-home"></span>
                                <span className="ta"> Events</span>
                            </a>






                        </div>

                    </div>




                    <div class="displayer">
                    <i class="fas fa-ellipsis-h"></i>
                    <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" />
                    
                    <span className="names postt">Lara<br/><p style={{fontSize:"9px" , color:"#A9A9A9",marginTop:"-0rem"}}>Yesterday at 13:30</p></span>
                            <div className="wid">
        <div className="imgpost">
        <img src="https://pixabay.com/get/gf99edad46d1ff54fd46f19401f991ea1f9ed07d2a595b900b75a380967e82c21b941903813b7db1403dbff1bfad9ccfe42c77ca9862cb32cf01b7a6c44e911f4_1280.jpg" alt="Avatar" />
        </div>
            <div className="sett">
            <i class="ico far fa-heart"> 28.5k Likes</i>
            <i class="ico far fa-comment-alt"> 33 Comments</i>
            
            <i class="ico fas fa-share-alt"> 134 Shares </i>
            <i class="ico fas fa-bookmark"> 16 Saves</i>
            </div>       
<div className="lorem">
<p>lorem ipsum chbdjbewub cwubcuqewbqucebw cwubufbeubfewu kjdvidnij vd ew cjd wjw j wj ei ejcje hfbwh   wdq dwubbqwu ubdwb8q    byd qbu udb uewbqu</p>


<div className="comment">
<img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />

<input className="makepost" type="text" placeholder="   Write a Comment.." />
<div className="cnn">
 <i class="fas cn fa-paperclip"></i>
 <i class="far cn fa-smile"></i>
 <i class="fas cn fa-image"></i>
</div>
</div>

</div>


</div>

                    </div>
                </div>
                <div class="right">
                    <div class="element  ele4">


        <h1>Trending Feeds</h1>
            <div className="img2">
            <img className="im" src="https://pixabay.com/get/g8aaea36ed120e17cb215866f5803bb602995efbe8fe8ea2b88fd3e4ac80e006843b9fb1f3a214bd7c91cd848bff4f75e141736f07e550e84b5a75d2c06e838ef_1280.png" alt="Avatar" />
            <img className="im" src="https://pixabay.com/get/g35922d74003b411028437f913dc9f0ddc44515915a018e16b58b627bbf7af23e4678385997a30f654d015847053f40b6813c00125cedc540793108177a52c960_1280.jpg" alt="Avatar" />

            </div>

            <div className="img2">
            <img className="im" src="https://pixabay.com/get/g96591f3c354d02360a9dd777861f058d10036101b0e080e894ab3cd360b61a47ad034d819728b7d2db79dfe6842c0c2932831872eb89c88724236d91cef2e8c4_1280.jpg" alt="Avatar" />
            <img className="im" src="https://pixabay.com/get/g2974a48235a30f1ef8cd169ee5b15419031e1e5fbf2d6931282e34a07b8160e94713e944a1a4d7806f3b992464300152f74f530173f49821891cc89fe5151e36_1280.jpg" alt="Avatar" />

            </div >
            <div className="seall">
            <a href="#">See All <i class="fas fa-angle-double-right"></i></a>
            </div>



                    </div>
                    <div class="element  ele5">
                    <h1>Suggested For You</h1>
                    <div className="lst">
                            <div className="people p1">
                                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" /><span className="names">Zoheb <button className="bn">Become A Fan <i class="far sy fa-paper-plane" style={{ color: "#dba607" }}></i> </button></span>
                            </div>
                            <div className="people p1">  <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" /><span className="names"> Ali <button className="bn">Become A Fan <i class="far sy fa-paper-plane" style={{ color: "#dba607" }}></i></button> </span>
                            </div>
                            <div className="people p1">   <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" /><span className="names">Sahaj<button className="bn">Become A Fan <i class="far sy fa-paper-plane" style={{ color: "#dba607" }}></i></button></span>
                            </div>
                            <div className="people p1">    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" /><span className="names">Sourab <button className="bn">Become A Fan <i class="far sy fa-paper-plane" style={{ color: "#dba607" }}></i></button></span>
                            </div>

                            <div className="people p1">    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" /><span className="names">Sourab <button className="bn">Become A Fan <i class="far sy fa-paper-plane" style={{ color: "#dba607" }}></i></button></span>
                            </div>
                        </div>


                        <div className="seall">
            <a href="#">See All <i class="fas fa-angle-double-right"></i></a>
            </div>

                    </div>





                    <div class="element   ele6">
                    <h1>Profile Activity</h1>


                    <div class="avatars">
  <a href="#" class="avatars__item"><img class="avatar" src="https://randomuser.me/api/portraits/women/65.jpg" alt=""/></a>
  <a href="#" class="avatars__item"><img class="avatar" src="https://randomuser.me/api/portraits/men/25.jpg" alt=""/></a>
  <a href="#" class="avatars__item"><img class="avatar" src="https://randomuser.me/api/portraits/women/25.jpg" alt=""/></a>
  <a href="#" class="avatars__item"><img class="avatar" src="https://randomuser.me/api/portraits/men/55.jpg" alt=""/></a>
  
  <a href="#" class="avatars__item"><img class="avatar" src="https://randomuser.me/api/portraits/women/25.jpg" alt=""/></a>
  <a href="#" class="avatars__item"><img class="avatar" src="https://randomuser.me/api/portraits/men/55.jpg" alt=""/></a>
  
</div>
<h1 className="f">20.2k <p>Followers</p></h1>
<p className="fp">Active now on your profile</p>
<p className="last">The perfect time for uploading your new post <a href="#" >Create new Post</a></p>



                    </div>
                </div>

            </div>
        </>
    )
}
