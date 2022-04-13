import React from "react";
import "./CartItemCard.css";
import { Link } from "react-router-dom";

const CartItemCard = () => {
  return (
    <div className="CartItemCard">
      <img src={'https://m.media-amazon.com/images/I/81kJzDOwjNL._AC_UL320_.jpg'} alt="ssa" />
      <div>
        <Link to={`/product/electronics`}>T-shirt</Link>
        <span>{`Price: ₹${500}`}</span>
        <p>Remove</p>
      </div>
    </div>
  );
};

export default CartItemCard;
