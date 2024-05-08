import React from "react";
import "components/Login.css";
import {useNavigate} from "react-router-dom"
import { useState } from "react";
import "../dashboardhome/Dashboardhome";


export default function Login() {

    const [isLoginFormVisible, setLoginFormVisible] = useState(true);

    const handleToggleForm = () => {
        setLoginFormVisible(!isLoginFormVisible);
    };

    const navigate = useNavigate()

    const dashboard = () => {
      navigate("./Dashboardhome")
    }

    return (
        <>
     <section className="loginhome-section">
        <div className="loginhome-section-div">
            <div className="tmlogo-div">
            <img className="tmlogo" src="" alt="logo" />
            </div>
           
          <div className="form-structor-div">
            
            <div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true" />

			<div className="signup">
				<form>
					<label htmlFor="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="txt" placeholder="User name" required={true} />
					<input type="email" name="email" placeholder="Email" required={true} />
					<input type="password" name="pswd" placeholder="Password" required={true} />
					<button>Sign up</button>
				</form>
			</div>

			<div className="login">
				<form>
					<label htmlFor="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required={true}  />
					<input type="password" name="pswd" placeholder="Password" required={true} />
                    <button>Login As User</button>
					<button onClick={dashboard}>Login As Superuser</button>
				</form>
			</div>
	</div>
         </div>
        </div>     
            </section>
        </>
    );
}