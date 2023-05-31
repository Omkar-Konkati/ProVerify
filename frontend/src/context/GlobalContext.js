import React, { useState, createContext, useEffect } from "react";
import { ethers } from "ethers";
import { toast } from "react-hot-toast";
let eth;

if (typeof window !== "undefined") {
  eth = window.ethereum;
}

export const GlobalContext = createContext();

export const GlobalContextProvider = ({children}) => {
    const [currentAccount, setCurrentAccount] = useState(null);

    const connectWallet = async (metamask = eth) => {
        try {
          if (!metamask) return toast.error("Please install Metamask First");
    
          const accounts = await metamask.request({
            method: "eth_requestAccounts",
          });
    
          setCurrentAccount(accounts[0]);
    
          toast.success("Wallet Connected!");
        } catch (error) {
          toast.error(error.message);
        }
      };
    
      const checkIfWalletIsConnected = async (metamask = eth) => {
        try {
          if (!metamask) return toast.error("Please install Metamask First");
    
          const accounts = await metamask.request({ method: "eth_accounts" });
    
          if (accounts.length) {
            setCurrentAccount(accounts[0]);
          }
        } catch (error) {
          console.log(error.message);
        }
      };

      useEffect(() => {
        checkIfWalletIsConnected();
      }, [currentAccount]);

      return (
        <GlobalContext.Provider value={{   connectWallet,
            currentAccount}} >
            {children}
        </GlobalContext.Provider>
      )
}