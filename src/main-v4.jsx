import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "../itvit-v4-signal.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
