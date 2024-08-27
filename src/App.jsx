import React, { useState,useEffect } from "react";
import "./App.css";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Modal from "./components/Modal";

function App() {
  


  // State to hold selected products with their quantities
  const [selectedProducts, setSelectedProducts] = useState([]); // holds objects of selected products
  // State to control the visibility of the confirmation modal
  const [modal, setModal] = useState(false);

  // Function to add a product to the cart or increase its quantity
  const selectProducts = (selectedItem) => {
    setSelectedProducts((prevProducts) => {
      // Add the selected product to the cart with an initial quantity of 1
      return [...prevProducts, { ...selectedItem, quantity: 1 }];
    });
  };

  // Function to increment the quantity of a selected product
  const incrementQty = (currentID) => {
    setSelectedProducts((prevProducts) => {
      // Map through the products and increment the quantity of the matched product
      return prevProducts.map((product) =>
        product.id === currentID
          ? { ...product, quantity: product.quantity + 1 } // Increment quantity
          : product // Keep other products unchanged
      );
    });
  };

  // Function to decrement the quantity of a selected product
  const decrementQty = (currentID) => {
    setSelectedProducts((prevProducts) => {
      // Map through the products, decrement the quantity if it matches, and filter out products with zero quantity
      return prevProducts
        .map((p) =>
          p.id === currentID ? { ...p, quantity: p.quantity - 1 } : p // Decrement quantity
        )
        .filter((p) => p.quantity > 0); // Remove products with zero quantity
    });
  };

  // Function to remove a product from the cart
  const deleteFromCart = (currentID) => {
    setSelectedProducts((prevProducts) => {
      // Filter out the product to be deleted from the cart
      return prevProducts.filter((product) => product.id !== currentID);
    });
  };

  // Function to calculate the total cost and quantity of all selected products
  const getTotal = () => {
    let total = { totalCost: 0, totalQty: 0 };

    for (let i = 0; i < selectedProducts.length; i++) {
      // Calculate total price for each product based on price and quantity
      let totalItem = selectedProducts[i].price * selectedProducts[i].quantity;

      // Accumulate the total quantity and cost
      total.totalQty += selectedProducts[i].quantity;
      total.totalCost += totalItem;
    }
    return total;
  };

  // Function to open the confirmation modal
  const openModal = () => {
    setModal(true);
  };

  // Function to close the confirmation modal and clear the cart
  const closeModal = () => {
    setModal(false);
    setSelectedProducts([]); // Clear cart after confirming the order
  };

  // Effect to handle body overflow when modal is open
  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling
    }

    // Cleanup function to reset the overflow when the component is unmounted or modal state changes
    return () => {
      document.body.style.overflow = "";
    };
  }, [modal]); // Runs when 'modal' state changes

  return (
    <main className="outer-container">
      <div className="inner-container">
       
        <Products
          onSelect={selectProducts} 
          selectedProducts={selectedProducts} 
          onIncrement={incrementQty} 
          onDecrement={decrementQty} 
        />
        
        <Cart
          selectedProducts={selectedProducts} 
          onDelete={deleteFromCart} 
          getTotal={getTotal} 
          onOpen={openModal} 
        />
      
        {modal && (
          <Modal
            getTotal={getTotal} 
            selectedProducts={selectedProducts} 
            onClose={closeModal} 
          />
        )}
      </div>
    </main>
  );
}

export default App;