import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { configStore } from "./configStore";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./ProductDetails";

const localStore = configStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={localStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/detail" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
