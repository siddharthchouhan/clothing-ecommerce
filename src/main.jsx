import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Shop from "./pages/Shop.jsx";
import App from "./App.jsx";
import Cart from "./pages/Cart.jsx";
import LoginSignup from "./pages/LoginSignup.jsx";
import ShopCategory from "./pages/ShopCategory.jsx";
import Product from "./pages/Product.jsx";
import menBanner from "./components/assets/banner_mens.png";
import womenBanner from "./components/assets/banner_women.png";
import kidsBanner from "./components/assets/banner_kids.png";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Shop /> },
      { path: "/cart", element: <Cart /> },
      { path: "/login-signup", element: <LoginSignup /> },
      { path: "/product-category", element: <ShopCategory /> },
      {
        path: "/men",
        element: <ShopCategory category="men" banner={menBanner} />,
      },
      {
        path: "/women",
        element: <ShopCategory category="women" banner={womenBanner} />,
      },
      {
        path: "/kids",
        element: <ShopCategory category="kid" banner={kidsBanner} />,
      },
      {
        path: "/products/:productId",
        element: <Product />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
