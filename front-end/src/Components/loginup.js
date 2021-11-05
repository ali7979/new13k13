import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Full_transparent_fz from "../images/Full_transparent_fz.png"

export default function loginup() {
    return (
       <>
       
		<svg class="Rectangle_23">
			<rect id="Rectangle_23" rx="20" ry="20" x="0" y="0" width="656" height="952">
			
            
            
            </rect>
            
		</svg>
        
		<div id="Log_in_to_13k13_to_show_your__">
			<span>Log in to 13k13 to show your <br/>talents to the world</span>
            <div className="b2ox">
<div className="b1o"><input placeholder="Enter Username or phone or email"></input></div>
<div className="b1o"><input placeholder="Enter Password"></input></div>
<button className="ylwbtn">Login</button>
</div>
		</div>











		<div id="By_continuing_you_agree_to_13k">
			<span>By continuing, you agree to 13k13's </span><span style={{textDecoration:"underline"}}><Link>Terms of service</Link></span><span> and confirm that<br/>you have read 13k13's </span><span style={{textDecoration:"underline"}}><Link>Privacy Policy</Link></span><span>.</span>
		</div>
		
		<div id="Dont_have_an_account_Sign_up">
			<span>Don't have an account? </span><Link><span style={{textDecoration:"underline"}}>Sign up</span></Link>
		</div>
		<Link to="/"><svg class="ic_cancel_24px" viewBox="2 2 51.678 51.678">
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
			
		
		
		
		
		
       </>
    )
}
