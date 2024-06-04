import React from "react";
import "components/Login.css";
import { AuthType } from "containers/Auth";


const Auth: React.FC<AuthType> = ({ username, setUsername, password, setPassword, handleLogin, handleSignup, email, setEmail }) => {

    const logo = require('assets/tinymeshimg.png');

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
					<input className="input2" type="text" name="txt" placeholder="User name" value={username} onChange={e => setUsername(e.target.value)} required={true} />
					<input className="input2" type="email" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required={true} />
					<input className="input2" type="password" name="pswd" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required={true} />
					<button className="button2" onClick={handleSignup}>Sign up</button>
				</form>
			</div>

			<div className="login">
				<form>
					<label htmlFor="chk" aria-hidden="true">Login</label>
					<input className="input2" type="email" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required={true} />
					<input className="input2" type="password" name="pswd" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required={true} />
                    <button className="button2" onClick={handleLogin}>Login</button>
				</form>
			</div>
	</div>
         </div>
        </div>     
            </section>
        </>
    );
}

export default Auth;