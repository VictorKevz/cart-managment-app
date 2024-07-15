import React, { useState } from "react";
import data from "../../Data";
import Products from "./Products/Products";
import "./shop.css";
import Cart from "./Cart/Cart";

function Shop() {
  const [selectedProductIDs, setSelectedProductIDs] = useState([]);

  const handleSelected = (id) => {
    setSelectedProductIDs((prevSelected) => [...prevSelected, id]);
  };

  const handleDeselect = (id) => {
    setSelectedProductIDs((prevSelected) =>
      prevSelected.filter((productId) => productId !== id)
    );
  };

  return (
    <section className="shop-section">
      <h1 className="title">Desserts</h1>
      <div className="shop-wrapper">
        <div className="products-wrapper">
          {data.map((item) => (
            <Products
              key={item.id}
              products={item}
              onSelect={handleSelected}
              onDeselect={handleDeselect}
              isSelected={selectedProductIDs.includes(item.id)}
            />
          ))}
        </div>
        <Cart />
      </div>
    </section>
  );
}

export default Shop;