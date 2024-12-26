import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import firebaseConfig from "../Firebase.config.js";
import { Context } from "./Context/Context.jsx";

createRoot(document.getElementById("root")).render(
  <Context>
    <App />
  </Context>
);
