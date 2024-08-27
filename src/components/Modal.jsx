import React from "react";
import "../css/modal.css";
import { AnimatePresence, motion } from "framer-motion";
import { entry } from "../variants";

import confirmedIcon from "../assets/images/icon-order-confirmed.svg";

function Modal({ selectedProducts, getTotal, onClose }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="modal-wrapper"
        role="dialog"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        aria-modal="true"
        variants={entry}
        initial="hidden"
        animate="visible"
      >
        <article className="modal-container">
          <img
            src={confirmedIcon}
            alt="Order Confirmed icon"
            className="confirmed-icon"
          />
          <h3 id="modal-title" className="modal-title">{`Order Confirmed`}</h3>
          <p id="modal-description" className="modal-parag">
            We hope you enjoy your food!
          </p>

          <div className="modal-item-wrapper">
            {selectedProducts.map((product) => {
              const itemTotal = (product.price * product.quantity).toFixed(2);

              return (
                <div
                  key={product.id}
                  className="modal-item"
                  role="group"
                  aria-labelledby={`product-name-${product.id}`}
                  aria-describedby={`product-details-${product.id}`}
                >
                  <div className="thumbnail-price-total-cost">
                    <img
                      src={product.image.thumbnail}
                      alt={`Thumbnail of ${product.name}`}
                      className="product-thumbnail"
                    />
                    <div className="name-price">
                      <h4 id={`product-name-${product.id}`} className="name">
                        {product.name}
                      </h4>
                      <div
                        className="qty-price"
                        id={`product-details-${product.id}`}
                      >
                        <span className="cart-qty">{`${product.quantity}x`}</span>
                        <p className="price">{`@ $${product.price}`}</p>
                      </div>
                    </div>
                    <p className="item-total modal">{`$${itemTotal}`}</p>
                  </div>
                </div>
              );
            })}
            <div className="total-cost-wrapper">
              <p className="order-total">Order Total</p>
              <p className="total-cost">{`$${getTotal().totalCost.toFixed(
                2
              )}`}</p>
            </div>
          </div>

          <button
            type="button"
            className="close-modal btn"
            onClick={onClose}
            aria-label="Close order confirmation and start a new order"
          >
            Start New Order
          </button>
        </article>
      </motion.div>
    </AnimatePresence>
  );
}

export default Modal;
