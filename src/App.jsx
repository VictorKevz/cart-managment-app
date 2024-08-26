import React, { useState } from "react";
import "./App.css";
import Products from "./components/Products";
import Cart from "./components/Cart";
function App() {
  const [selectedProducts, setSelectedProducts] = useState([]); //holds objects of selected products

  const selectProducts = (selectedItem) => {
    setSelectedProducts((prevProducts) => {
      return [...prevProducts, { ...selectedItem, quantity: 1 }];
    });
  };

  const incrementQty = (currentID) => {
    setSelectedProducts((prevProducts) => {
      return prevProducts.map((product) =>
        product.id === currentID
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
    });
  };

  return (
    <main className="outer-container">
      <div className="inner-container">
        <Products
          onSelect={selectProducts}
          selectedProducts={selectedProducts}
          onIncrement={incrementQty}
        />
        <Cart />
      </div>
    </main>
  );
}

export default App;
