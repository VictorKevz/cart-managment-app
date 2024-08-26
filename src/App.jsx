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

  const decrementQty = (currentID) => {
    setSelectedProducts((prevProducts) => {
      return prevProducts
        .map((p) =>
          p.id === currentID ? { ...p, quantity: p.quantity - 1 } : p
        )
        .filter((p) => p.quantity > 0);
    });
  };
  const deleteFromCart = (currentID) => {
    setSelectedProducts((prevProducts) => {
      return prevProducts.filter((product)=> product.id !== currentID)
    });
  };
  return (
    <main className="outer-container">
      <div className="inner-container">
        <Products
          onSelect={selectProducts}
          selectedProducts={selectedProducts}
          onIncrement={incrementQty}
          onDecrement={decrementQty}
        />
        <Cart selectedProducts={selectedProducts} onDelete={deleteFromCart} />
      </div>
    </main>
  );
}

export default App;
