import React from "react";
import { createRoot } from "react-dom/client";
import "@designcodeio/threeui/style.css";
import "./styles.css";
import Welcome from "./Welcome.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Welcome />
  </React.StrictMode>,
);
