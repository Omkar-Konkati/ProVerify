import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { connectWallet, currentAccount } = useContext(GlobalContext);
  return (
    <nav>
      <h1>ProVerify</h1>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/manufacturer"}>Manufacturer</Link>
        </li>
        <li>
          <Link to={"/seller"}>Seller</Link>
        </li>
        <li>
          <Link to={"/consumer"}>Consumer</Link>
        </li>
      </ul>
      {currentAccount ? (
        <button className="primary-btn">
          {" "}
          {currentAccount.slice(0, 5) + "..." + currentAccount.slice(38, 42)}
        </button>
      ) : (
        <button className="primary-btn" onClick={() => connectWallet()}>
          Connect
        </button>
      )}
    </nav>
  );
};
