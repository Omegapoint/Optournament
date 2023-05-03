import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import Home from "./Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [],
  },
  {
    path: "/tabletennis",
    element: <Home />,
    children: [],
  },
  {
    path: "/pool",
    element: <Home />,
    children: [],
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
