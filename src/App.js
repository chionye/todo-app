import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppProvider from './context/Context';
import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "dashboard",
      element: <Dashboard />,
    },
    {
      path: "register",
      element: <Dashboard />,
    },
  ]);

return (
  <AppProvider>
    <RouterProvider router={router} />
  </AppProvider>
);
}

export default App;
