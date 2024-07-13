import React from "react";
import data from "../../Data";
import Products from "./Products/Products";
import "./shop.css";
import Cart from "./Cart/Cart";

function Shop() {
  return (
    <section className="shop-section">
      <h1 className="title">Desserts</h1>
      <div className="shop-wrapper">
        <div className="products-wrapper">
          {data.map((item) => (
            <Products key={item.id} products={item} />
          ))}
        </div>
        <Cart />
      </div>
    </section>
  );
}

export default Shop;
