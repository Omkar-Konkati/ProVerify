import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { SellProductToConsumer } from "../components/SellProductToConsumer";
import { ProductForSale } from "../components/ProductForSale";

export const Seller = () => {
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
          Sell Product to Consumer
        </button>
        <button
          onClick={() => handleButtonClick(2)}
          className={activeButton === 2 ? "active" : ""}
        >
          Product For Sale
        </button>
      </div>
      {activeButton === 1 && <SellProductToConsumer />}
      {activeButton === 2 && <ProductForSale />}
    </div>
  );
};
