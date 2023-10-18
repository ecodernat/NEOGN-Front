import { PersistGate } from "redux-persist/integration/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { store, persistor } from "./redux/store.js";
import { Toaster } from "react-hot-toast";
import axios from "axios";

//Descomentar la ruta a la API en la que se desea realizar la peticion y comentar el que no se utilizará
// ----------------------------------------------------

axios.defaults.baseURL = import.meta.env.VITE_URL_PRODUCTION;
// axios.defaults.baseURL = import.meta.env.VITE_URL_LOCAL;

// ----------------------------------------------------

// persistor.purge();

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <Router>
          <App /> <Toaster />
        </Router>
      </React.StrictMode>
    </PersistGate>
  </Provider>
);
