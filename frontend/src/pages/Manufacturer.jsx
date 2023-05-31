import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { AddSeller } from "../components/AddSeller";
import { AddProduct } from "../components/AddProduct";
import { QuerySeller } from "../components/QuerySeller";
import { SellProductToSeller } from "../components/SellProductToSeller";

export const Manufacturer = () => {
  const [activeButton, setActiveButton] = useState(1);
  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };
  return (
    <div className="container">
      <Navbar />
      <div className="in-page-nav">
        <button
          onClick={() => handleButtonClick(1)}
          className={activeButton === 1 ? "active" : ""}
        >
          Add Product
        </button>
        <button
          onClick={() => handleButtonClick(2)}
          className={activeButton === 2 ? "active" : ""}
        >
          Add Seller
        </button>
        <button
          onClick={() => handleButtonClick(3)}
          className={activeButton === 3 ? "active" : ""}
        >
          Sell Product to Seller
        </button>
        <button
          onClick={() => handleButtonClick(4)}
          className={activeButton === 4 ? "active" : ""}
        >
          Query Seller
        </button>
      </div>
      {activeButton === 1 && <AddProduct />}
      {activeButton === 2 && <AddSeller />}
      {activeButton === 3 && <SellProductToSeller />}
      {activeButton === 4 && <QuerySeller />}
    </div>
  );
};
