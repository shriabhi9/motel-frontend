import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CategoryProvider } from "./Context/Category-context";
import { LoginProvider } from "./Context/Login-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CategoryProvider>
      <LoginProvider>
        <App />
      </LoginProvider>
    </CategoryProvider>
  </BrowserRouter>
);
