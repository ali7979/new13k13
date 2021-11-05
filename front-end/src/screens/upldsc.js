// import '../css/upld.css'
// import { Link } from 'react-router-dom'
// import Full_transparent from "../images/Full_transparent.png"
// import Ellipse_4 from "../images/Ellipse_4.png"

// export default function upldsc() {
//     return (
// //         <>
// // <form id="Web_1920__5">
// // 	<svg class="Rectangle_40">
// // 		<rect id="Rectangle_40" rx="0" ry="0" x="0" y="0" width="1920" height="1080">
// // 		</rect>
// // 	</svg>
// // 	<div id="Upload_a_video">
// // 		<span>Upload a video</span>
// // 	</div>
// // 	<div id="Caption">
// // 		<span>Caption</span>
// // 	</div>
// // 	<div id="Caption_n">
// // 		<span>Caption</span>
// // 	</div>
// // 	<div id="Who_can_see_this_video">
// // 		<span>Who can see this video</span>
// // 	</div>
// // 	<div id="Select_Category">
// // 		<span>Select Category:</span>
// // 	</div>
// // 	<div id="Allow_users_to">
// // 		<span>Allow users to</span>
// // 	</div>
// // 	<img id="Full_transparent" src={Full_transparent}/>
		
// // 	<svg class="Line_12" viewBox="0 0 1920 2">
// // 		<path id="Line_12" d="M 0 0 L 1920 0">
// // 		</path>
// // 	</svg>
// // 	<div id="This_video_will_be_uploaded_to">
// // 		<span>This video will be uploaded to @{userLogin.username}</span>
// // 	</div>

// // 	{videoPath!==undefined?(
// //                         <div className="uploaded-video" onLoadedData={HandleLoad}>
// //                             <Player
// //                                 src={videoPath.replace("../front-end/public/","")}
// //                                 fluid = {true}
// //                                 autoPlay={true}
// //                                 >
// //                                 <BigPlayButton position="center"/>
// //                             </Player> 
// //                         </div>
// //                     ):(
                    
// //                     <form  {...getRootProps({className: 'dropzone '+dropzoneEffect})}>
// //                     {percent?(
// //                         <>
// //                         <CircularProgressbar
// //                         value={percent}
// //                         styles={buildStyles({
// //                             strokeLinecap: "butt"
// //                         })}
// //                         strokeWidth={7}
// //                         />
// //                             <span onClick={abortUpload} className="abort-upload-button"><img src="https://sf16-scmcdn-sg.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/close-54baafc270c3e8ba4db7a0f5dbc9f9d3.svg"/></span>
// //                         <p>{video.name}</p>
// //                         </>
// //                     ):(
// //                         <>
// //                         <img src="/upload-icon.svg" alt =""/>
// //                     {
// //                     fileTooLarge?(
// //                         <div>File Too Large</div>
// //                     ):(
// //                     droped?(
// //                             <div>
// //                                 <ul>
// //                                     <li>
// //                                         Name: {video.name}
// //                                     </li>
// //                                     <li>
// //                                         Type : {video.type}
// //                                     </li>
// //                                     <li>
// //                                         Size : {(video.size/1024/1024).toFixed(2)} Mo
// //                                     </li>
// //                                 </ul>
// //                             </div>
// //                         ):( <div>
// //                                 <p>Select a video to upload</p>
// //                                 <span>or drag and drop a file </span>
// //                                 <ul>
// //                                     <li>MP4 or WebM</li>
// //                                     <li>720x1280 resolution or higher</li>
// //                                     <li>Up to 180 seconds</li>
// //                                 </ul>
                                
// //                             </div>
// //                         ))
// //                         }
// //                       <input {...getInputProps({multiple:false})} onChange={e=>manageVideo(e)}required/>
// //                         </>
// //                     )}
// //                     </form>
// //                     )}


// // 	<Link><svg class="Rectangle_41">
// // 		<rect id="Rectangle_41" rx="20" ry="20" x="0" y="0" width="490" height="707">
// // 		</rect>
// // 	</svg></Link>
// // 	<svg class="Rectangle_42">
// // 		<rect id="Rectangle_42" rx="20" ry="20" x="0" y="0" width="766" height="63">
// // 		</rect>
// // 	</svg>
// // 	<svg class="Rectangle_43">
// // 		<rect id="Rectangle_43" rx="20" ry="20" x="0" y="0" width="766" height="153">
// // 		</rect>
// // 	</svg>
// // 	<div id="Select_a_video_to_upload_or_dr">
// // 		<span>Select a video to upload<br/>or drag and drop a file</span>
// // 	</div>
// // 	<svg class="Path_13" viewBox="245 334.778 84 54.6">
// // 		<path id="Path_13" d="M 245 374.6819763183594 L 245 371.4007263183594 C 245.0487213134766 371.2488098144531 245.1217346191406 371.1001586914062 245.1424102783203 370.9444580078125 C 246.0398254394531 364.1977233886719 250.9538269042969 358.735107421875 257.582275390625 357.1815795898438 C 258.1669921875 357.0446166992188 258.3663330078125 356.8127746582031 258.4844665527344 356.2493896484375 C 261.3529357910156 342.5811767578125 274.7727661132812 333.0852355957031 288.5357971191406 335.0313415527344 C 297.4593200683594 336.2933349609375 304.218505859375 340.8601684570312 308.8429565429688 348.6021118164062 C 309.0150756835938 348.890380859375 309.427001953125 349.1981506347656 309.7420043945312 349.2145385742188 C 318.7784118652344 349.6850891113281 326.2393188476562 355.7717895507812 328.4123229980469 364.5063171386719 C 328.6546630859375 365.4805297851562 328.8062438964844 366.47705078125 329 367.4632263183594 L 329 371.0726013183594 C 328.949951171875 371.2545471191406 328.8757934570312 371.4337158203125 328.8533325195312 371.6190795898438 C 327.6571655273438 381.5430603027344 319.5071716308594 389.0792846679688 309.5111694335938 389.2999267578125 C 302.9811706542969 389.4441528320312 296.4457397460938 389.3434143066406 289.91259765625 389.3496704101562 C 289.7844848632812 389.3498229980469 289.6563415527344 389.315673828125 289.5224609375 389.2968139648438 L 289.5224609375 368.7717895507812 C 291.2613525390625 370.5101928710938 292.894287109375 372.1555786132812 294.5421142578125 373.785888671875 C 295.6483764648438 374.8803100585938 297.1156005859375 374.934814453125 298.1301574707031 373.9458312988281 C 299.1221008300781 372.9788513183594 299.1117553710938 371.4212341308594 298.0528869628906 370.3546752929688 C 294.9908447265625 367.2702941894531 291.9176025390625 364.1965942382812 288.8329162597656 361.1348266601562 C 287.7203979492188 360.0305480957031 286.2887878417969 360.0223388671875 285.1900634765625 361.113037109375 C 282.0859985351562 364.1942749023438 278.9927673339844 367.2865295410156 275.9121704101562 370.3910827636719 C 274.8912048339844 371.419921875 274.8882446289062 372.9637451171875 275.8465576171875 373.9228515625 C 276.8233642578125 374.9006652832031 278.3158569335938 374.8964233398438 279.3745422363281 373.8631286621094 C 280.8809509277344 372.393310546875 282.356201171875 370.8914794921875 283.8471984863281 369.4058837890625 C 284.0301513671875 369.2236328125 284.2284851074219 369.0567626953125 284.4857482910156 368.8228149414062 L 284.4857482910156 389.3017578125 C 284.3270874023438 389.3229064941406 284.2201232910156 389.3498229980469 284.1131591796875 389.3496704101562 C 276.2680053710938 389.341796875 268.4207458496094 389.438232421875 260.5782165527344 389.2901000976562 C 253.6185302734375 389.15869140625 247.5521545410156 384.2607727050781 245.6480407714844 377.5429077148438 C 245.3817749023438 376.6034545898438 245.2136077880859 375.6363220214844 245 374.6819763183594 Z">
// // 		</path>
// // 	</svg>
// // 	<div id="n_Mp4_or_WebM__720x1280_resolu">
// // 		<span>• Mp4 or WebM<br/>• 720x1280 resolution or<br/>   higher<br/>• Up to 180 seconds</span>
// // 	</div>
// // 	<div >
// // 		<input id="Title" placeholder="Title"></input>
// // 	</div>
// // 	<div >
// //     <input id="Description" placeholder="Description"></input>
// // 	</div>
// // 	<div id="Group_76">
// // 		<div id="Public">
// // 			<span>Public</span>
// // 		</div>
// //         <input type="radio" name="visibility" value="Public"required style={{visibility:"hidden"}}/>
		
// // 	</div>
// // 	<div id="Group_77">
// // 		<div id="Friends">
// // 			<span>Friends</span>
// // 		</div>
// //         <input type="radio" name="visibility" value="Friends"required style={{visibility:"hidden"}}/>

// // 	</div>
// // 	<div id="Group_78">
// // 		<div id="Private">
// // 			<span>Private</span>
// // 		</div>
// //         <input className="rd"type="radio" name="visibility" value="Friends"required style={{visibility:"hidden"}}/>

// // 	</div>
// // 	<div id="Group_70">
// // 		<svg class="Rectangle_3">
// // 			<rect id="Rectangle_3" rx="29" ry="29" x="0" y="0" width="163" height="58">
// // 			</rect>
// // 		</svg>
// // 		<Link to="/"><div id="Discard">
// // 			<span>Discard</span>
// // 		</div></Link>
// // 	</div>
// // 	<div id="Group_71">
// // 		<svg class="Rectangle_3_bg">
// // 			<rect id="Rectangle_3_bg" rx="29" ry="29" x="0" y="0" width="131" height="58">
// // 			</rect>
// // 		</svg>
// // 		<div id="Post">
// // 			<span className={conditionToPost?"confirm-post":"disactivated-confirm-post"}  onClick={(e)=>uploadVid(e)} >Post</span>
// // 		</div>
// // 	</div>
// // 	<div id="Group_73">
// // 		<div id="Group_19">
// // 			<svg class="Rectangle_2">
// // 				<rect id="Rectangle_2" rx="34" ry="34" x="0" y="0" width="700" height="68">
// // 				</rect>
// // 			</svg>
// // 			<div >
// //             <input id="Search_All" placeholder="Search All"></input>
// // 			</div>
// // 			<div id="All">
// // 				<Link id="Al">All</Link>
// // 			</div>
// // 			<svg class="Line_1" viewBox="0 0 5 52">
// // 				<path id="Line_1" d="M 0 0 L 0 52">
// // 				</path>
// // 			</svg>
// // 		</div>
// // 		<svg class="ic_chevron_right_24px" viewBox="0 0 13.69 22.17">
// // 			<path id="ic_chevron_right_24px" d="M 2.604967594146729 0 L 0 2.604967594146729 L 8.461526870727539 11.08497333526611 L 0 19.56497573852539 L 2.604967594146729 22.16994094848633 L 13.68994140625 11.08497333526611 L 2.604967594146729 0 Z">
// // 			</path>
// // 		</svg>
// // 	</div>
// // 	<svg class="Path_14" viewBox="245 334.778 53.846 35">
// // 		<path id="Path_14" d="M 245 360.3577575683594 L 245 358.25439453125 C 245.0312194824219 358.1570129394531 245.0780334472656 358.0617065429688 245.0912780761719 357.9619140625 C 245.6665496826172 353.6370544433594 248.8165740966797 350.1353454589844 253.0655975341797 349.1394958496094 C 253.4404296875 349.0516967773438 253.5682067871094 348.903076171875 253.6439208984375 348.5419311523438 C 255.4827270507812 339.7802124023438 264.085205078125 333.6930236816406 272.90771484375 334.9405212402344 C 278.6279907226562 335.74951171875 282.9608154296875 338.6769714355469 285.9252319335938 343.6398010253906 C 286.0355529785156 343.8245849609375 286.2996215820312 344.0218811035156 286.5015258789062 344.0324096679688 C 292.2941284179688 344.3340148925781 297.0767822265625 348.2357788085938 298.4697265625 353.8348693847656 C 298.6251220703125 354.4593505859375 298.7222900390625 355.0981750488281 298.846435546875 355.7303161621094 L 298.846435546875 358.0440673828125 C 298.8143920898438 358.1606750488281 298.766845703125 358.2755126953125 298.75244140625 358.3943786621094 C 297.9856567382812 364.7559204101562 292.7612915039062 369.5868530273438 286.3535461425781 369.7283020019531 C 282.1676330566406 369.8207702636719 277.9782104492188 369.7561950683594 273.790283203125 369.7601928710938 C 273.7081909179688 369.7602844238281 273.6260375976562 369.7384033203125 273.5402221679688 369.726318359375 L 273.5402221679688 356.5691833496094 C 274.6549072265625 357.6835327148438 275.70166015625 358.73828125 276.7579650878906 359.7833557128906 C 277.4671020507812 360.4848937988281 278.4076538085938 360.5198364257812 279.0579833984375 359.8858642578125 C 279.69384765625 359.2659912109375 279.6872253417969 358.2675476074219 279.0084533691406 357.5838317871094 C 277.0455932617188 355.6066589355469 275.0755615234375 353.6363220214844 273.0982055664062 351.6736450195312 C 272.385009765625 350.9657592773438 271.4673461914062 350.9605102539062 270.7630004882812 351.65966796875 C 268.773193359375 353.6348571777344 266.7903442382812 355.6170654296875 264.8156127929688 357.607177734375 C 264.1611328125 358.2666931152344 264.1592407226562 359.25634765625 264.7735595703125 359.8711242675781 C 265.3997192382812 360.4979553222656 266.3564453125 360.4952087402344 267.0350952148438 359.8328552246094 C 268.000732421875 358.8906555175781 268.9464416503906 357.9279479980469 269.9022216796875 356.9756164550781 C 270.0194702148438 356.8587951660156 270.1466064453125 356.7518310546875 270.3115234375 356.6018676757812 L 270.3115234375 369.7294616699219 C 270.2098388671875 369.7430419921875 270.1412353515625 369.7602844238281 270.0726928710938 369.7601928710938 C 265.043701171875 369.7551574707031 260.0133666992188 369.8169555664062 254.986083984375 369.7219848632812 C 250.5247192382812 369.6377563476562 246.6360015869141 366.498046875 245.4154052734375 362.1917114257812 C 245.2447204589844 361.5894775390625 245.1369171142578 360.9695434570312 245 360.3577575683594 Z">
// // 		</path>
// // 	</svg>
// // 	<div id="Group_74">
// // 		<svg class="Path_15" viewBox="1211.752 172 40.115 35">
// // 			<path id="Path_15" d="M 1212.082641601562 174.1856689453125 L 1224.691650390625 188.4622802734375 L 1230.561157226562 206.1004486083984 C 1230.919555664062 207.176025390625 1232.37841796875 207.3240356445312 1232.947631835938 206.3438415527344 L 1251.6875 173.9735260009766 C 1252.195678710938 173.0969696044922 1251.5625 172.0000305175781 1250.549560546875 172.0000305175781 L 1213.069580078125 172.0000305175781 C 1211.936401367188 172.0000305175781 1211.33447265625 173.3370666503906 1212.082641601562 174.1856689453125 Z M 1217.455444335938 175.2891845703125 L 1243.933227539062 175.2891845703125 L 1226.467895507812 185.5184936523438 L 1217.455444335938 175.2891845703125 Z M 1232.30615234375 200.9117889404297 L 1228.112426757812 188.3636322021484 L 1245.446411132812 178.2165374755859 L 1232.30615234375 200.9117889404297 Z">
// // 			</path>
// // 		</svg>
// // 	</div>
// // 	<div id="Group_75">
// // 		<svg class="Path_16" viewBox="1279.984 169.985 32.644 35">
// // 			<path id="Path_16" d="M 1296.30078125 204.9850006103516 L 1291.115478515625 198.4927673339844 L 1279.98388671875 198.4927673339844 L 1279.98388671875 169.9849853515625 L 1312.62744140625 169.9849853515625 L 1312.62744140625 198.4927673339844 L 1301.520263671875 198.4927673339844 L 1296.30078125 204.9850006103516 Z M 1283.295166015625 195.1847534179688 L 1292.707641601562 195.1847534179688 L 1296.310791015625 199.6937713623047 L 1299.936279296875 195.1847534179688 L 1309.316162109375 195.1847534179688 L 1309.316162109375 173.2930450439453 L 1283.295166015625 173.2930450439453 L 1283.295166015625 195.1847534179688 Z">
// // 			</path>
// // 		</svg>
// // 		<svg class="Rectangle_44">
// // 			<rect id="Rectangle_44" rx="0" ry="0" x="0" y="0" width="13.037" height="4.165">
// // 			</rect>
// // 		</svg>
// // 	</div>
// // 	<img id="Ellipse_4" src={Ellipse_4}  />
		
// // 	<div id="Group_79">
		
// // 		<div id="Comment">
// //         <input className="chckbx" type="checkbox" name="visibility" value="Comment"required/>
// // 			<span>Comment</span>
// // 		</div>
// // 		<div id="Duet">
// //         <input type="checkbox" name="visibility" value="Comment"required/>
// // 			<span>Duet</span>
// // 		</div>
// // 		<div id="Stich">
// //         <input type="checkbox" name="visibility" value="Comment"required/>
// // 			<span>Stich</span>
// // 		</div>
// // 	</div>
// // 	<div id="Group_80">
// // 		<svg class="Rectangle_11">
// // 			<rect id="Rectangle_11" rx="24.796998977661133" ry="24.796998977661133" x="0" y="0" width="126.74" height="49.594">
// // 			</rect>
// // 		</svg>
// // 		<svg class="Rectangle_12">
// // 			<rect id="Rectangle_12" rx="24.796998977661133" ry="24.796998977661133" x="0" y="0" width="119.393" height="49.594">
// // 			</rect>
// // 		</svg>
// // 		<svg class="Rectangle_13">
// // 			<rect id="Rectangle_13" rx="24.796998977661133" ry="24.796998977661133" x="0" y="0" width="134.088" height="49.594">
// // 			</rect>
// // 		</svg>
// // 		<svg class="Rectangle_14">
// // 			<rect id="Rectangle_14" rx="24.796998977661133" ry="24.796998977661133" x="0" y="0" width="130.414" height="49.594">
// // 			</rect>
// // 		</svg>
// // 		<svg class="Rectangle_15">
// // 			<rect id="Rectangle_15" rx="24.796998977661133" ry="24.796998977661133" x="0" y="0" width="126.74" height="49.594">
// // 			</rect>
// // 		</svg>
// // 		<div id="Sports">
// // 			<Link>Sports</Link>
// // 		</div>
// // 		<Link><div id="Drama">
// // 			<span>Drama</span>
// // 		</div></Link>
// // 		<div id="Fantasy">
// //         <Link>Fantasy</Link>
// // 		</div>
// // 		<div id="Comedy">
// //         <Link>Comedy</Link>
// // 		</div>
// // 		<div id="Science">
// //         <Link>Science</Link>
// // 		</div>
// // 	</div>
// // </form>


//         // </>

//         <div className="upload">
//             <div className="upload-fields">
//                 <div className="upload-video-title">
//                     <p style={{fontSize:"30px"}}>Upload a video</p>
//                     <p style={{color: "gray"}}>This video will be uploaded to @{userLogin.username}</p>
//                 </div>
//                 <div className="upload-file-field" style={{marginTop:"-110px"}}>
//                     {videoPath!==undefined?(
//                         <div className="uploaded-video" onLoadedData={HandleLoad}>
//                             <Player
//                                 src={videoPath.replace("../front-end/public/","")}
//                                 fluid = {true}
//                                 autoPlay={true}
//                                 >
//                                 <BigPlayButton position="center"/>
//                             </Player> 
//                         </div>
//                     ):(
                    
//                     <form  {...getRootProps({className: 'dropzone '+dropzoneEffect})}>
//                     {percent?(
//                         <>
//                         <CircularProgressbar
//                         value={percent}
//                         styles={buildStyles({
//                             strokeLinecap: "butt"
//                         })}
//                         strokeWidth={7}
//                         />
//                             <span onClick={abortUpload} className="abort-upload-button"><img src="https://sf16-scmcdn-sg.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/close-54baafc270c3e8ba4db7a0f5dbc9f9d3.svg"/></span>
//                         <p>{video.name}</p>
//                         </>
//                     ):(
//                         <>
//                         <img src="/upload-icon.svg" alt =""/>
//                     {
//                     fileTooLarge?(
//                         <div>File Too Large</div>
//                     ):(
//                     droped?(
//                             <div>
//                                 <ul>
//                                     <li>
//                                         Name: {video.name}
//                                     </li>
//                                     <li>
//                                         Type : {video.type}
//                                     </li>
//                                     <li>
//                                         Size : {(video.size/1024/1024).toFixed(2)} Mo
//                                     </li>
//                                 </ul>
//                             </div>
//                         ):( <div>
//                                 <p>Select a video to upload</p>
//                                 <span>or drag and drop a file </span>
//                                 <ul>
//                                     <li>MP4 or WebM</li>
//                                     <li>720x1280 resolution or higher</li>
//                                     <li>Up to 180 seconds</li>
//                                 </ul>
                                
//                             </div>
//                         ))
//                         }
//                       <input {...getInputProps({multiple:false})} onChange={e=>manageVideo(e)}required/>
//                         </>
//                     )}
//                     </form>
//                     )}
//                 </div>
//                 <form className="upload-elements">
//                     <div>
//                         <h3>Caption</h3>
//                         <input className="title" type="text" placeholder="    Title" onChange={e=>setTitle(e.target.value)}required/>
//                     </div>
//                     <div>
//                         <h3>Cover</h3>
//                         <textarea className="description" placeholder="   Description" onChange={e=>setDescription(e.target.value)}required></textarea>
//                     </div>
//                         <div>
//                         <h3>Select Category</h3>
//                         <div className="btnset">
//                         <a href="#" class="square_btn">Sports</a>
//                         <a href="#" class="square_btn">Drama</a>
//                         <a href="#" class="square_btn">Fantasy</a>
//                         <a href="#" class="square_btn">Comedy</a>
//                         <a href="#" class="square_btn">Science</a>
//                         </div>
//                            </div>
//                    <div style={{display:"flex", flexDirection:"row"}}>
//                     <div>
//                         <h3>Who can see this video</h3>
//                         <div className="vidCateg" onChange={e=>setVisibility(e.target.value)}>  
//                             <div>
//                                 <h4>Public</h4>
//                                 <input type="radio" name="visibility" value="Public"required/>
//                             </div>
//                             <div>
//                                 <h4>Friends</h4>
//                                 <input type="radio" name="visibility" value="Friends"required/>
//                             </div>
//                             <div>
//                                 <h4>Private</h4>
//                                 <input type="radio" name="visibility" value="Private"required/> 
//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         <h3>Allow users to </h3>
//                         <div>
//                         <div className="vidCateg" onChange={e=>setVisibility(e.target.value)}>  
//                             <div>
//                                 <input type="checkbox" name="visibility" value="Comment"required/>
//                                 <h4>Comment</h4>
//                             </div>
//                             <div>
                                
//                                 <input type="checkbox" name="visibility" value="Duet"required/>
//                                 <h4>Duet</h4>
//                             </div>
//                             <div>
                               
//                                 <input type="checkbox" name="visibility" value="Stich"required/> 
//                                 <h4>Stich</h4>
//                             </div>
//                             </div>
//                             </div>
//                         </div>
//                     </div>
                  
//                 </form>

//                 <div className="upload-buttons" style={{paddingBottom:"40px"}}>
//                     <Link to="/">
//                             <button className="cancel-post" style={{backgroundColor: "#D4AF37", color:"white"}}>Discard</button>
//                     </Link>
//                     <button className={conditionToPost?"confirm-post":"disactivated-confirm-post"}  onClick={(e)=>uploadVid(e)} >Post</button>
//                 </div>
                
//             </div>
           
//         </div>

//     )}