import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

var script = document.createElement("script");
script.src = "https://telegram.org/js/telegram-web-app.js";
document.head.appendChild(script);

script.onload = () => {
  setTimeout(() => {
    root.render(
      <React.StrictMode>
        <HashRouter>
          <App tg={window.Telegram.WebApp} />
        </HashRouter>
      </React.StrictMode>
    );
  }, 0);
};
