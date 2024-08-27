import React from "react";
import "../css/cart.css";
import { AnimatePresence, motion } from "framer-motion";
import { entry } from "../variants";
import empty from "../assets/images/illustration-empty-cart.svg";
import deleteIcon from "../assets/images/icon-remove-item.svg";
import carbonIcon from "../assets/images/icon-carbon-neutral.svg";

function Cart({ selectedProducts, onDelete, getTotal, onOpen }) {
  return (
    <AnimatePresence mode="wait">
    <motion.div 
    className="cart-wrapper"
    variants={entry}
        initial="hidden"
        animate="visible"
    >
      {selectedProducts.length > 0 ? (
        <article className="filled-cart-wrapper" aria-live="polite">
          <h3 className="total-qty" aria-label={`Your Cart contains ${getTotal().totalQty} items`}>
            {`Your Cart (${getTotal().totalQty})`}
          </h3>

          {selectedProducts.map((product) => {
            const itemTotal = (product.price * product.quantity).toFixed(2);

            return (
              <div
                key={product.id}
                className="product-item"
                aria-labelledby={`product-name-${product.id}`}
                aria-describedby={`product-price-${product.id} product-quantity-${product.id}`}
              >
                <div className="name-price-delete">
                  <div className="name-price">
                    <h4
                      id={`product-name-${product.id}`}
                      className="name"
                    >
                      {product.name}
                    </h4>
                    <div className="qty-price">
                      <span
                        id={`product-quantity-${product.id}`}
                        className="cart-qty"
                        aria-label={`Quantity of ${product.name}: ${product.quantity}`}
                      >
                        {`${product.quantity}x`}
                      </span>
                      <p
                        id={`product-price-${product.id}`}
                        className="price"
                      >
                        {`@ $${product.price}`}
                      </p>
                      <p className="item-total">{`$${itemTotal}`}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="delete-btn"
                    onClick={() => onDelete(product.id)}
                    aria-label={`Remove ${product.name} from cart`}
                  >
                    <img
                      src={deleteIcon}
                      alt=""
                      className="delete-icon"
                    />
                  </button>
                </div>
              </div>
            );
          })}
          <div className="total-cost-wrapper" role="region" aria-label="Order Total">
            <p className="order-total">Order Total</p>
            <p className="total-cost">{`$${getTotal().totalCost.toFixed(2)}`}</p>
          </div>
          <div className="carbon-wrapper">
            <img
              src={carbonIcon}
              alt="Carbon Neutral Icon"
              className="carbon-icon"
            />
            <p className="carbon-text">This is a carbon-neutral delivery</p>
          </div>
          <button
            type="button"
            className="confirm-order btn"
            onClick={onOpen}
            aria-label="Confirm Order"
          >
            Confirm Order
          </button>
        </article>
      ) : (
        <article className="empty-cart-container" aria-live="polite">
          <h2 className="empty-cart-title">Your Cart (0)</h2>

          <div className="empty-cart-content">
            <img
              src={empty}
              alt="Empty Cart Illustration"
              className="empty-icon"
            />
            <p className="empty-cart-parag">
              Your added items will appear here
            </p>
          </div>
        </article>
      )}
    </motion.div>
    </AnimatePresence>
  );
}

export default Cart;