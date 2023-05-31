import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalContextProvider } from "./context/GlobalContext";
import { Home } from "./pages/Home";
import { Manufacturer } from "./pages/Manufacturer";
import { Seller } from "./pages/Seller";
import { Consumer } from "./pages/Consumer";
import "../src/styles/global.scss";

const router = createBrowserRouter([
  { path: "*", element: <h1>404 Page not found</h1> },
  { path: "/", element: <Home /> },
  { path: "/manufacturer", element: <Manufacturer /> },
  { path: "/consumer", element: <Consumer /> },
  { path: "/seller", element: <Seller /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalContextProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </GlobalContextProvider>
);
