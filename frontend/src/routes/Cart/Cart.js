import React, { Fragment } from "react";
import "./Cart.css";
import CartItemCard from "./CartItemCard";
import Typography from '@mui/material/Typography';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { Link } from "react-router-dom";
import { products } from '../../constant/data';

const Cart = () => {

  // const order={
  //   url:'https://m.media-amazon.com/images/I/81kJzDOwjNL._AC_UL320_.jpg',
  //   id:'product1',
  //   name:'T-shirt',
  //   price:'500'
  // }
  return (
    <Fragment>
      
        <div className="emptyCart">
          <RemoveShoppingCartIcon />

          <Typography>No Product in Your Cart</Typography>
          <Link to="/products">View Products</Link>
        </div>
      
        <Fragment>
          {
          <div className="cartPage">
            <div className="cartHeader">
              <p>Product</p>
              <p>Quantity</p>
              <p>Subtotal</p>
            </div>

            { products && products.map(product => (
                <div className="cartContainer" >
                     <CartItemCard
                     id={product.id}
                     title={product.title}
                     url={product.url}
                     price={product.price}
                     />
                  <div className="cartInput">
                    <button
                      // onClick={() =>
                      //   decreaseQuantity(item.product, item.quantity)
                      // }
                    >
                      -
                    </button>
                    <input type="number" value={1} readOnly />
                    <button
                      // onClick={() =>
                      //   increaseQuantity(
                      //     item.product,
                      //     item.quantity,
                      //     item.stock
                      //   )
                      // }
                    >
                      +
                    </button>
                  </div>
                  <p className="cartSubtotal">{`₹${
                    product.price
                  }`}</p>
                </div>
                 ))
                }

            <div className="cartGrossProfit">
              <div></div>
              <div className="cartGrossProfitBox">
                <p>Gross Total</p>
                <p>{`₹${2900}`}</p>
              </div>
              <div></div>
              <div className="checkOutBtn">
                <button>Check Out</button>
              </div>
            </div>
          </div>
         }
        </Fragment>
    </Fragment>
  );
};

export default Cart;
