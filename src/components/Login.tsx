import React from "react";
import "components/Login.css";
import {useNavigate} from "react-router-dom"
import { useState } from "react";



export default function Login() {

    const [isLoginFormVisible, setLoginFormVisible] = useState(true);

    const handleToggleForm = () => {
        setLoginFormVisible(!isLoginFormVisible);
    };

    const navigate = useNavigate()

    const dashboard = () => {
      navigate("/")
    }

    const logo = require('../components/tinymeshimg.png');

    return (
        <>
     <section className="loginhome-section">
        <div className="loginhome-section-div">
            <div className="tmlogo-div">
            <img className="tmlogo" src={String(logo)} alt="logo" />
            </div>
           
          <div className="form-structor-div">
            
            <div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true" />

			<div className="signup">
				<form>
					<label htmlFor="chk" aria-hidden="true">Sign up</label>
					<input className="input2" type="text" name="txt" placeholder="User name" required={true} />
					<input className="input2" type="email" name="email" placeholder="Email" required={true} />
					<input className="input2" type="password" name="pswd" placeholder="Password" required={true} />
					<button className="button2">Sign up</button>
				</form>
			</div>

			<div className="login">
				<form>
					<label htmlFor="chk" aria-hidden="true">Login</label>
					<input className="input2" type="email" name="email" placeholder="Email" required={true}  />
					<input className="input2" type="password" name="pswd" placeholder="Password" required={true} />
                    <button className="button2">Login As User</button>
					<button className="button2" onClick={dashboard}>Login As Superuser</button>
				</form>
			</div>
	</div>
         </div>
        </div>     
            </section>
        </>
    );
}