import React from 'react'
import {Link} from 'react-router-dom';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import './Login.css'


const Login = (handleChange) => {
  return (
    <>
            <div className="LoginBox">
              <form className="loginForm">
                <div className="loginEmail">
                <MailOutlineIcon/>
                  <input
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="loginPassword">
                <LockOpenIcon />
                  <input
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <Link to='password/forgot'>Forget Password ?</Link>
                <input type="submit" value="Login" className="loginBtn" />
                <Link to='/register'> new user?Register here</Link>
              </form>
            </div>
        </>
  );
}

export default Login