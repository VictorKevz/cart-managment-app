import React from "react";
import "../css/cart.css";
import empty from "../assets/images/illustration-empty-cart.svg";
import deleteIcon from "../assets/images/icon-remove-item.svg";
import carbonIcon from "../assets/images/icon-carbon-neutral.svg";

function Cart({ selectedProducts,onDelete }) {
  const getTotal = () => {
    let total = { totalCost: 0, totalQty: 0 };

    for (let i = 0; i < selectedProducts.length; i++) {
      let totalItem = selectedProducts[i].price * selectedProducts[i].quantity;

      total.totalQty += selectedProducts[i].quantity;
      total.totalCost += totalItem;
    }
    return total;
  };
  return (
    <div className="cart-wrapper">
      {selectedProducts.length > 0 ? (
        <article className="filled-cart-wrapper">
          <h3 className="total-qty">{`Your Cart(${getTotal().totalQty})`}</h3>

          {selectedProducts.map((product) => {
            const itemTotal = (product.price * product.quantity).toFixed(2);

            return (
              <div key={product.id} className="product-item">
                <div className="name-price-delete">
                  <div className="name-price">
                    <h4 className="name">{product.name}</h4>
                    <div className="qty-price">
                      <span className="cart-qty">{`${product.quantity}x`}</span>
                      <p className="price">{`@ $${product.price}`}</p>
                      <p className="item-total">{`$${itemTotal}`}</p>
                    </div>
                  </div>
                  <button type="button" className="delete-btn" onClick={()=>onDelete(product.id)}>
                    <img
                      src={deleteIcon}
                      alt="Delete Item Icon"
                      className="delete-icon"
                    />
                  </button>
                </div>
              </div>
            );
          })}
          <div className="total-cost-wrapper">
            <p className="order-total">Order Total</p>
            <p className="total-cost">{`$${getTotal().totalCost.toFixed(2)}`}</p>
          </div>
          <div className="carbon-wrapper">
            <img
              src={carbonIcon}
              alt="Carbon Nuetral Icon"
              className="carbon-icon"
            />
            <p className="carbon-text">This is a carbon-nuetral delivery</p>
          </div>
          <button type="button" className="confirm-order-btn">
            Confirm Order
          </button>
        </article>
      ) : (
        <article className="empty-cart-container">
          <h2 className="empty-cart-title">Your Cart(0)</h2>

          <div className="empty-cart-content">
            <img
              src={empty}
              alt="empty illustration icon"
              className="empty-icon"
            />
            <p className="empty-cart-parag">
              Your added items will appear here
            </p>
          </div>
        </article>
      )}
    </div>
  );
}

export default Cart;
