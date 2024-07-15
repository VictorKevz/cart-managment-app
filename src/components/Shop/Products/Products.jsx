import React, { useState } from "react";
import decreaseIcon from "../../../assets/images/icon-decrement-quantity.svg";
import cartIcon from "../../../assets/images/icon-add-to-cart.svg";
import increaseIcon from "../../../assets/images/icon-increment-quantity.svg";
import "./products.css";

function Products({ products, onSelect, onDeselect, isSelected }) {
  const { id, price, name, category } = products;
  const { desktop, mobile, tablet } = products.image;
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity > 1) {
        return prevQuantity - 1;
      } else {
        onDeselect(id);
        return 1;
      }
    });
  };

  const checkClassName = (id) => {
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
    <div className={`product-card ${checkClassName(id)}`}>
      <div className={`image-container`}>
        <picture>
          <source srcSet={desktop} media="(min-width: 1080px)" />
          <source srcSet={tablet} media="(min-width: 750px)" />

          <img
            src={mobile}
            alt={name}
            className={`product-img ${isSelected ? "active-border" : ""}`}
          />
        </picture>

        {isSelected ? (
          <div className="active-btn-container">
            <img
              src={decreaseIcon}
              alt="decrease icon"
              className="btn decrease"
              onClick={handleDecrease}
            />
            <p className="qty">{quantity}</p>
            <img
              src={increaseIcon}
              alt="increase icon"
              className="btn increase"
              onClick={handleIncrease}
            />
          </div>
        ) : (
          <div className="button-container">
            <button
              className={`btn-add-to-cart ${checkClassName()}`}
              onClick={() => onSelect(id)}
            >
              <img src={cartIcon} alt="cart icon" className="cart-icon" /> Add
              to Cart
            </button>
          </div>
        )}
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