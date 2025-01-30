import { createRoot } from "react-dom/client";
import "./index.css";
import CsvReader from "./components/GetData";
import Home from "./components/home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OutLet from "./router/OutLet";
import { Provider, useSelector } from "react-redux";
import { store } from "./components/store/store";
import { useState } from "react";
import App from "./App";
import Papa, { parse } from 'papaparse'







createRoot(document.getElementById("root")).render(

  


  <Provider store={store}>
   <App />

  </Provider>
);