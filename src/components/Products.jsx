import React, { useState } from "react";
import data from "../Data";
import "../css/products.css";
import decreaseIcon from "../assets/images/icon-decrement-quantity.svg";
import cartIcon from "../assets/images/icon-add-to-cart.svg";
import increaseIcon from "../assets/images/icon-increment-quantity.svg";

function Products({ onSelect, selectedProducts,onIncrement }) {
  const isSelected = (currentID) => {
    return selectedProducts.some((p) =>  p.id === currentID);
  };

  const getQty = (currentID) => {
    const matchedProduct = selectedProducts.find((p) => p.id === currentID);
    return matchedProduct ? matchedProduct.quantity : 0;
  };

  return (
    <section className="products-wrapper">
      <h1 className="title">Desserts</h1>
      <div className="products-container">
        {data.map((product) => {
          const quantity = getQty(product.id);
          return (
            <div
              key={product.id}
              className={`product-card`}
            >
              <div
                className={`product-image-wrapper ${isSelected(product.id) && "active"}`}
            
              >
                <picture>
                  <source
                    media="(max-width:860px )"
                    srcSet={product.image.tablet}
                  />
                  <source
                    media="(max-width:560px )"
                    srcSet={product.image.mobile}
                  />
                </picture>
                <img
                  src={product.image.desktop}
                  alt={`Image of ${product.name}`}
                  className="product-img"
                />
              </div>
              <div
                className={`button-wrapper ${
                  isSelected(product.id) && "active"
                }`}
              >
                {quantity > 0 ? (
                  <div className="active-btn-wrapper">
                    <button type="button" className="qty-btn">
                      <img
                        src={decreaseIcon}
                        alt="Decrement Icon"
                        className="qty-icon minus"
                      />
                    </button>
                    <span className="qty">{quantity}</span>
                    <button type="button" className="qty-btn" onClick={()=>onIncrement(product.id)}>
                      <img
                        src={increaseIcon}
                        alt="Increment Icon"
                        className="qty-icon plus"
                      />
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="add-to-cart-btn"
                    onClick={() => onSelect(product)}
                  >
                    <img src={cartIcon} alt="Cart Icon" className="cart-icon" />{" "}
                    Add to cart
                  </button>
                )}
              </div>
              <div className="product-details">
                <p className="category">{product.category}</p>
                <h2 className="product-name">{product.name}</h2>
                <p className="product-price">{`$${product.price.toFixed(
                  2
                )}`}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Products;
