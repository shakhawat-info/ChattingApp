import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { store } from "./assets/Redux/Store.js";
import { Provider } from "react-redux";
import firebaseConfig from '../Firebase.config.js'

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
