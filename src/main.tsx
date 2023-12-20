import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "@fontsource-variable/archivo";
import "@fontsource-variable/plus-jakarta-sans";
import "@/index.css";
import Home from "@/pages/Home.tsx";
import App from "@/App.tsx";
import RootLayout from "@/layouts/RootLayout.tsx";
import AccountCreate from "@/pages/AccountCreate.tsx";
import AccountLogin from "@/pages/AccountLogin.tsx";
import Products from "@/pages/Products";
import Cart from "@/pages/Cart";

const browserRouter = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <RootLayout />,
        children: [
          { path: "/", element: <Home /> },
          { path: "/criar-conta", element: <AccountCreate /> },
          { path: "/conectar", element: <AccountLogin /> },
          { path: "/produtos", element: <Products /> },
          { path: "/carrinho", element: <Cart /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={browserRouter} />
  </React.StrictMode>,
);
