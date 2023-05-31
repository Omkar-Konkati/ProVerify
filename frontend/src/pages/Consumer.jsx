import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { PurchaseHistory } from "../components/PurchaseHistory";
import { Verification } from "../components/Verification";

export const Consumer = () => {
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
          Consumer purchase history
        </button>
        <button
          onClick={() => handleButtonClick(2)}
          className={activeButton === 2 ? "active" : ""}
        >
          Product Verification
        </button>
      </div>
      {activeButton === 1 && <PurchaseHistory />}
      {activeButton === 2 && <Verification />}
    </div>
  );
};
