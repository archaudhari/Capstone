import React, { useState } from 'react'
import FaceIcon from '@mui/icons-material/Face';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import './Register.css';
import {register} from '../../actions/userAction'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import {useDispatch} from 'react-redux'

const Register = ({handleChange}) => {
  const dispatch=useDispatch();
    const [userData,setUserData]=useState({
      name:"",
      email:"",
      password:""
    })
    const {name,email,password}=userData;
    
    const [avatar,setAvatar]=useState("/Profile.png");
    const [avatarPreview,setAvatarPreview]=useState("/Profile.png")

    
  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUserData({ ...userData, [e.target.name]: e.target.value });
    }
  };


    const registerSubmit=(e)=>{
      e.preventDefault();
        
        const myForm = new FormData();
  
        myForm.set("name", name);  
        myForm.set("email", email);
        myForm.set("password", password);
        myForm.set("avatar", avatar);
        dispatch(register(myForm));
      };

    
  return (
    <>
            <div className="CustomerSellerBox">
              <form
                className="customerForm"
                encType='multipart/form-data'
                onSubmit={registerSubmit}
              >
                <div className="customerName">
                 <FaceIcon/>
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                    value={name}
                    onChange={registerDataChange}
                  />
                </div>
                <div className="customerEmail">
                <MailOutlineIcon/>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={registerDataChange}
                  />
                </div>
                <div className="customerPassword">
                <LockOpenIcon/>
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    name="password"
                    value={password}
                    onChange={registerDataChange}
                  />
                </div>
                <div className="registerImage" id='registerImage'>
                <img src={avatarPreview} alt='avatarp'/>
                  <input
                    type="file"
                    name="avatar"
                    accept='image/*'
                    onChange={registerDataChange}
                  />
                </div>
                
                <input type="submit" value="Register" className="customerBtn" />
                <p onClick={()=>handleChange('event',0)}>Already register? Login here</p>
              </form>
            </div>
        </>
  );
}

export default Register