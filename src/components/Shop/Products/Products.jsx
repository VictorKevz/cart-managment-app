import React from "react";
import cartIcon from "../../../assets/images/icon-add-to-cart.svg";
import "./products.css";

function Products({ products }) {
  const { id, price, name, category } = products;
  const { desktop, mobile, tablet } = products.image;
  const checkClassName = () => {
    let myClassName;
    if (id === 1) {
      myClassName = "first";
    }
    if (id === 2) {
      myClassName = "second";
    }
    if (id === 3) {
      myClassName = "third";
    }
    if (id === 4) {
      myClassName = "fourth";
    }
    if (id === 5) {
      myClassName = "fifth";
    }
    if (id === 6) {
      myClassName = "sixth";
    }
    if (id === 7) {
      myClassName = "seventh";
    }
    if (id === 8) {
      myClassName = "eighth";
    }
    if (id === 9) {
      myClassName = "ninth";
    }
    return myClassName;
  };
  return (
    <div className={`product-card ${checkClassName()}`}>
      <div className="image-container">
        <picture>
          <source srcSet={desktop} media="(min-width: 1080px)" />
          <source srcSet={tablet} media="(min-width: 750px)" />

          <img src={mobile} alt={name} className="product-img" />
        </picture>
        <div className="button-container">
          <button className={`btn add-to-cart ${checkClassName()}`}>
            {" "}
            <img src={cartIcon} alt="cart icon" className="cart-icon" /> Add to
            Cart
          </button>
        </div>
      </div>
      <div className={`product-text-container ${checkClassName()}`}>
        <p className={`product-category ${checkClassName()}`}>{category}</p>
        <h2 className="product-name">{name}</h2>
        <h3 className="product-price">{`$${price.toFixed(2)}`}</h3>
      </div>
    </div>
  );
}

export default Products;
