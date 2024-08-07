import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/Global.style.js";
import GlobalResposive from "./styles/GlobalResponsive.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <GlobalResposive />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
