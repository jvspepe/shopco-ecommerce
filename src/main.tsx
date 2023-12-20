import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "@fontsource-variable/archivo";
import "@fontsource-variable/plus-jakarta-sans";
import "index.css";
import Home from "./pages/Home.tsx";
import App from "./App.tsx";
import RootLayout from "./layouts/RootLayout.tsx";

const browserRouter = createBrowserRouter([
  {
    element: <App />,
    children: [
      { element: <RootLayout />, children: [{ path: "/", element: <Home /> }] },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={browserRouter} />
  </React.StrictMode>
);
