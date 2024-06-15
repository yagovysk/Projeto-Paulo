import React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Pages/Header/Header";
import { Galeria } from "./Pages/About/About";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },

  {
    path: "/haleria",
    element: <Galeria />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
