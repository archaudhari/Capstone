import React,{useRef} from 'react'
import {Link} from 'react-router-dom'
import FaceIcon from '@material-ui/icons/Face'
import ShopIcon from '@material-ui/icons/Shop'
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import CategoryIcon from "@material-ui/icons/Category";
import ContactIcon from '@material-ui/icons/Contacts'
import './Register.css'
import LockOpenIcon from "@material-ui/icons/LockOpen";

const Register = () => {
  const customerTab = useRef(null);
  const sellerTab = useRef(null);
  const switcherTab = useRef(null);

  const switchTabs = (e, tab) => {
    if (tab === "customer") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");

      sellerTab.current.classList.remove("shiftToNeutralForm");
      customerTab.current.classList.remove("shiftToLeft");
    }
    if (tab === "seller") {
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");

      sellerTab.current.classList.add("shiftToNeutralForm");
      customerTab.current.classList.add("shiftToLeft");
    }
  };
  return (
    <>
          <div className="CustomerSellerContainer">
            <div className="CustomerSellerBox">
              <div>
                <div className="customer_seller_toggle">
                  <p onClick={(e) => switchTabs( e,"customer")}>CUSTOMER</p>
                  <p onClick={(e) => switchTabs( e,"seller")}>SELLER</p>
                </div>
                <button ref={switcherTab}></button>
              </div>
              <form
                className="customerForm"
                ref={customerTab}
                
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
                <ContactIcon/>
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
                <input type="submit" value="RegisterCustomer" className="customerBtn" />
                <Link to='login'>Already have an account? Login here</Link>
              </form>
              <form
                className="sellerForm"
                ref={sellerTab}
                
              >
                <div className="sellerName">
                <ShopIcon/>
                  <input
                    type="text"
                    placeholder="Shop name"
                    required
                    name="name"
                   
                  />
                </div>
                <div className="sellerEmail">
                <MailOutlineIcon/>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                   
                  />
                </div>
                <div className="sellerMobile">
                <ContactIcon/>
                  <input
                    type="MobileNo"
                    placeholder="Mobile no."
                    required
                    name="mobile"
                   
                  />
                </div>
                <div className="sellerCategory">
                <CategoryIcon/>
                  <input
                    type="text"
                    placeholder="Choose Category"
                  />
                </div>
                <div className="sellerPassword">
                <LockOpenIcon/>
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    name="password"
                   
                  />
                </div>
                <input type="submit" value="RegisterSeller" className="sellerBtn" />
                <Link to='login'>Already have an account? Login here</Link>  
              </form>
            </div>
          </div>
        </>
  );
}

export default Register