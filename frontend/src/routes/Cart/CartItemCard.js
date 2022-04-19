import React from "react";
import "./CartItemCard.css";
import { Link } from "react-router-dom";

const CartItemCard = ({url,id,title,price}) => {
  return (
    <div className="CartItemCard">
      <img src={url} alt="ssa" />
      <div>
        <Link to={`/product/${id}`}>{title}</Link>
        <span>{`₹${price}`}</span>
        <p>Remove</p>
      </div>
    </div>
  );
};

export default CartItemCard;
