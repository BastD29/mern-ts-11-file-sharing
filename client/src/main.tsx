import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./style/index.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { FileProvider } from "./context/FileContext/FileProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FileProvider>
      <App />
    </FileProvider>
    <ToastContainer
    // position="top-right"
    // autoClose={5000}
    // hideProgressBar={false}
    // newestOnTop={false}
    // closeOnClick
    // rtl={false}
    // pauseOnFocusLoss
    // draggable
    // pauseOnHover
    />
  </React.StrictMode>
);
