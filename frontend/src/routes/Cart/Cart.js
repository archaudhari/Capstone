import React, { useState, Fragment } from "react";
import "./Cart.css";
import CartItemCard from "./CartItemCard";
import Typography from '@mui/material/Typography';
import { MainContainer } from '../../GlobalStyle';
import styled from "styled-components";
import { CommonBtn } from "../../GlobalStyle";
import Login from '../../routes/PopupLogin/PopupLogin';
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { Link, useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { addItemsToCart,removeItemsFromCart } from "../../actions/cartAction";
// import Login from '../../routes/PopupLogin/PopupLogin';


const Cart = ({ user }) => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const { cartItems } = useSelector((state) => state.cart);

  const [open, setOpen] = useState(false);
  
  const handleOpen = () => setOpen(true)
  // useEffect(() => {
  //   if (isAuthenticated === false) {
  //     return (
  //       <Login/>
  //     ) 
  //   }
  // }, [ isAuthenticated]);

  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const deleteCartItems = (id) => {
    dispatch(removeItemsFromCart(id));
  };

  const checkoutHandler = () => {
    navigate("/shipping");
  };


  return (
    <fragment>
    {user ?<Fragment>
      {cartItems.length === 0 ?<div className="emptyCart">
          <RemoveShoppingCartIcon />

          <Typography>No Product in Your Cart</Typography>
          <Link to="/products">View Products</Link>
        </div>:<Fragment>
          {
          <div className="cartPage">
            <div className="cartHeader">
              <p>Product</p>
              <p>Quantity</p>
              <p>Subtotal</p>
            </div>
              {cartItems &&
              cartItems.map((item) => (
                <div className="cartContainer" key={item.product}>
                  <CartItemCard item={item} deleteCartItems={deleteCartItems} />
                  <div className="cartInput">
                    <button
                      onClick={() =>
                        decreaseQuantity(item.product, item.quantity)
                      }
                    >
                      -
                    </button>
                    <input type="number" value={item.quantity} readOnly />
                    <button
                      onClick={() =>
                        increaseQuantity(
                          item.product,
                          item.quantity,
                          item.stock
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                  <p className="cartSubtotal">{`₹${
                    item.price * item.quantity
                  }`}</p>
                </div>
              ))}

              <div className="cartGrossProfit">
              <div></div>
              <div className="cartGrossProfitBox">
                <p>Gross Total</p>
                <p>{`₹${cartItems.reduce(
                  (acc, item) => acc + item.quantity * item.price,
                  0
                )}`}</p>
              </div>
              <div></div>
              <div className="checkOutBtn">
                <button onClick={checkoutHandler}>Check Out</button>
              </div>
            </div>
          </div>
         }
        </Fragment>} 
      </Fragment> : (
        <>
          
          <MainContainer>
          <h4>No Item Found</h4>
            <DefaultContainer onClick={handleOpen}>
                Please Login to Access this Page
            </DefaultContainer>
          <Login open={open} setOpen={setOpen} />
          </MainContainer>
        </>
      ) 
    } 
    </fragment>
  );
};

const DefaultContainer = styled(CommonBtn)`
    && {
        color: #fff;
        font-size:20px;
        margin-left:0px;
        text-transform: capitalize;
        padding:5px 15px;
        background-color: #6a329f;
        border-radius: 30px;
        height:45px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    &&:hover {
        background-color:#6a329f;
    }`;

export default Cart;
