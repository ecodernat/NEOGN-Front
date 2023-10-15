import { PersistGate } from "redux-persist/integration/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { store, persistor } from "./redux/store.js";

import axios from "axios";

//Descomentar la ruta a la API en la que se desea realizar la peticion y comentar el que no se utilizará
// ----------------------------------------------------
axios.defaults.baseURL = "https://neogn-back.up.railway.app";
// axios.defaults.baseURL="http://localhost:3001"
// ----------------------------------------------------

// persistor.purge();

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <Router>
          <App />
        </Router>
      </React.StrictMode>
    </PersistGate>
  </Provider>
);
