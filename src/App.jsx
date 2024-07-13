import React from "react";
import "./App.css";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <main className="outer-container">
      <div className="inner-container">
        {/* <header>
          <h1 className="title">Desserts</h1>
        </header> */}
        <Shop />
      </div>
    </main>
  );
}

export default App;
