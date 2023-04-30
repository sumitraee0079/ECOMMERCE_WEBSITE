import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Context from "./context/Context";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./context/AuthContext";
//import { FirebaseContext } from "./context/FirebaseContext";
//import { db } from "./components/firebase";

ReactDOM.render(
  <React.StrictMode>
    <Context>
      
      <AuthProvider>
      <App />
      </AuthProvider>
      
    </Context>
  </React.StrictMode>,
  document.getElementById("root")
);
