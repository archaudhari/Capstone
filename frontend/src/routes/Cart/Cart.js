import React, { Fragment } from "react";
import "./Cart.css";
import CartItemCard from "./CartItemCard";
import { Typography } from "@material-ui/core";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { Link } from "react-router-dom";

const Cart = () => {

  return (
    <Fragment>
      
        <div className="emptyCart">
          <RemoveShoppingCartIcon />

          <Typography>No Product in Your Cart</Typography>
          <Link to="/products">View Products</Link>
        </div>
      
        <Fragment>
          <div className="cartPage">
            <div className="cartHeader">
              <p>Product</p>
              <p>Quantity</p>
              <p>Subtotal</p>
            </div>

            {
                <div className="cartContainer" >
                  <CartItemCard />
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
                    500 * 1
                  }`}</p>
                </div>
              }

            <div className="cartGrossProfit">
              <div></div>
              <div className="cartGrossProfitBox">
                <p>Gross Total</p>
                <p>{`₹${500}`}</p>
              </div>
              <div></div>
              <div className="checkOutBtn">
                <button>Check Out</button>
              </div>
            </div>
          </div>
        </Fragment>
    </Fragment>
  );
};

export default Cart;
