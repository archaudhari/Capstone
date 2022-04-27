import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import './Login.css'
import {useDispatch,useSelector} from 'react-redux'
import {login,clearErrors} from '../../actions/userAction'
import {useAlert} from "react-alert"


const Login = ({handleChange }) => {

  const dispatch=useDispatch();
  const alert=useAlert();
  const { error } = useSelector(
    (state) => state.user
  );
  
  const [loginEmail,setLoginEmail] = useState("")
  const [loginPassword,setLoginPassword] = useState("")

  const loginSubmit=(e)=>{
       e.preventDefault();
       dispatch(login(loginEmail,loginPassword))
     }

     useEffect(() => {
       if(error){
         alert.error(error)
         dispatch(clearErrors())
       }
    }, [error,alert, dispatch ]);
     
     
  return (
    <>
            <div className="LoginBox">
              <form className="loginForm" onSubmit={loginSubmit}>
                <div className="loginEmail">
                <MailOutlineIcon/>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={loginEmail}
                    onChange={(e)=>setLoginEmail(e.target.value)}
                  />
                </div>
                <div className="loginPassword">
                <LockOpenIcon />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={loginPassword}
                    onChange={(e)=>setLoginPassword(e.target.value)}
                  />
                </div>
                <Link to='password/forgot'>Forget Password ?</Link>
                <input type="submit" value="Login" className="loginBtn" />
                <p onClick={()=>handleChange('event',1)}> new user?Register here</p>
              </form>
            </div>
        </>
  );
}

export default Login