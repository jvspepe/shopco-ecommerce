import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "@fontsource-variable/archivo";
import "@fontsource-variable/plus-jakarta-sans";
import Home from "./pages/Home.tsx";
import App from "./App.tsx";

const browserRouter = createBrowserRouter([
  { element: <App />, children: [{ path: "/", element: <Home /> }] },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={browserRouter} />
  </React.StrictMode>,
);
