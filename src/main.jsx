import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//import "./indexAi.css";

import App from "./App.jsx";
//import App from "./AppAi.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
