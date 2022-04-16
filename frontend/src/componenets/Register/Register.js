import React from 'react'
import {Link} from 'react-router-dom';
import FaceIcon from '@mui/icons-material/Face';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ContactsIcon from '@mui/icons-material/Contacts';
import './Register.css';
import LockOpenIcon from '@mui/icons-material/LockOpen';

const Register = () => {
  return (
    <>
            <div className="CustomerSellerBox">
              <form
                className="customerForm"
              >
                <div className="customerName">
                 <FaceIcon/>
                  <input
                    type="text"
                    placeholder="Username"
                    required
                    name="name"
                   
                  />
                </div>
                <div className="customerEmail">
                <MailOutlineIcon/>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                   
                  />
                </div>
                <div className="customerMobile">
                <ContactsIcon/>
                  <input
                    type="mobileNo"
                    placeholder="Mobile No."
                    required
                    name="mobileNo"
                   
                  />
                </div>
                <div className="customerPassword">
                <LockOpenIcon/>
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    name="password"
                   
                  />
                </div>
                <div className="ConfirmPassword">
                <LockOpenIcon/>
                  <input
                    type="confpassword"
                    placeholder="Confirm Password"
                    required
                    name="confpassword"
                   
                  />
                </div>
                <input type="submit" value="Register" className="customerBtn" />
                <Link to='login'>Already register? Login here</Link>
              </form>
            </div>
        </>
  );
}

export default Register