import React from "react";
import ReactDOM from "react-dom/client";
import Page from "./App";
import "./index.css"; // optional if using Tailwind

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);
