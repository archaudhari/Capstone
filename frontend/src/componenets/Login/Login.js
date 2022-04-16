import React from 'react'
import {Link} from 'react-router-dom';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Typography from '@mui/material/Typography';
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
                <Typography>new user?
                <Link to='/register'> Register here</Link>
                </Typography>
              </form>
            </div>
        </>
  );
}

export default Login