import React from "react";
import "./cart.css";
import empty from "../../../assets/images/illustration-empty-cart.svg";

function Cart() {
  return (
    <div className="main-cart-wrapper">
      <article className="empty-cart-container">
        <h2 className="empty-cart-title">Your Cart(0)</h2>

        <div className="empty-cart-content">
          <img
            src={empty}
            alt="empty illustration icon"
            className="empty-icon"
          />
          <p className="empty-cart-parag">Your added items will appear here</p>
        </div>
      </article>
    </div>
  );
}

export default Cart;
