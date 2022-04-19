import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import './Login.css'
import {useDispatch} from 'react-redux'
import {login} from '../../actions/userAction'
// import {useAlert} from "react-alert"


const Login = () => {

  const dispatch=useDispatch();
  // const alert=useAlert();
  // const {error}=useSelector(state=>state.user)
  const [loginEmail,setLoginEmail] = useState("")
  const [loginPassword,setLoginPassword] = useState("")

  const loginSubmit=(e)=>{
       e.preventDefault();
       dispatch(login(loginEmail,loginPassword))
     }

    //  useEffect(() => {
    //    if(error){
    //      alert.error(error)
    //      dispatch(clearErrors())
    //    }
    //  }, [dispatch,error,alert])
     
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
                <Link to='/register'> new user?Register here</Link>
              </form>
            </div>
        </>
  );
}

export default Login