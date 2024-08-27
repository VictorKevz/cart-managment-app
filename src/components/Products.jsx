import React from "react";
import data from "../Data";
import { AnimatePresence, motion } from "framer-motion";
import { bounceIn } from "../variants";
import "../css/products.css";
import decreaseIcon from "../assets/images/icon-decrement-quantity.svg";
import cartIcon from "../assets/images/icon-add-to-cart.svg";
import increaseIcon from "../assets/images/icon-increment-quantity.svg";

function Products({ onSelect, selectedProducts, onIncrement, onDecrement }) {
  // Check if the product is already selected
  const isSelected = (currentID) => {
    return selectedProducts.some((p) => p.id === currentID);
  };

  // Get the quantity of the currently selected product
  const getQty = (currentID) => {
    const matchedProduct = selectedProducts.find((p) => p.id === currentID);
    return matchedProduct ? matchedProduct.quantity : 0;
  };

  return (
    <section className="products-wrapper" aria-labelledby="desserts-title">
      <h1 id="desserts-title" className="title">Desserts</h1>
      
      <div className="products-container">
        {data.map((product,i) => {
          const quantity = getQty(product.id);
          const selected = isSelected(product.id);

          return (
            <AnimatePresence mode="wait" key={product.id}>
            <motion.div
              
              className={`product-card`}
              aria-labelledby={`product-name-${product.id}`}
              aria-describedby={`product-price-${product.id} product-category-${product.id}`}
              aria-selected={selected}
              variants={bounceIn}
              initial="hidden"
              animate="visible"
              custom={i} 
            >
              <div
                className={`product-image-wrapper ${selected ? "active" : ""}`}
                aria-hidden={selected ? "false" : "true"}
              >
                <picture>
                  <source
                    media="(max-width:960px)"
                    srcSet={product.image.tablet}
                  />
                  <source
                    media="(max-width:560px)"
                    srcSet={product.image.mobile}
                  />
                  <img
                    src={product.image.desktop}
                    alt={`Image of ${product.name}`}
                    className="product-img"
                  />
                </picture>
              </div>
              <div
                className={`button-wrapper ${selected ? "active" : ""}`}
                role="group"
                aria-label={`Quantity controls for ${product.name}`}
              >
                {quantity > 0 ? (
                  <div className="active-btn-wrapper">
                    <button
                      type="button"
                      className="qty-btn"
                      onClick={() => onDecrement(product.id)}
                      aria-label={`Decrease quantity of ${product.name}`}
                    >
                      <img
                        src={decreaseIcon}
                        alt=""
                        className="qty-icon minus"
                      />
                    </button>
                    <span className="qty" aria-live="polite" aria-atomic="true">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      className="qty-btn"
                      onClick={() => onIncrement(product.id)}
                      aria-label={`Increase quantity of ${product.name}`}
                    >
                      <img
                        src={increaseIcon}
                        alt=""
                        className="qty-icon plus"
                      />
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="add-to-cart-btn"
                    onClick={() => onSelect(product)}
                    aria-label={`Add ${product.name} to cart`}
                  >
                    <img
                      src={cartIcon}
                      alt=""
                      className="cart-icon"
                    />{" "}
                    Add to cart
                  </button>
                )}
              </div>
              <div className="product-details">
                <p
                  id={`product-category-${product.id}`}
                  className="product-category"
                >
                  {product.category}
                </p>
                <h2
                  id={`product-name-${product.id}`}
                  className="product-name"
                >
                  {product.name}
                </h2>
                <p
                  id={`product-price-${product.id}`}
                  className="product-price"
                >
                  {`$${product.price.toFixed(2)}`}
                </p>
              </div>
            </motion.div>
            </AnimatePresence>
          );
        })}
      </div>
      
    </section>
  );
}

export default Products;