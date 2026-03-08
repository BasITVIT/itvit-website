import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "../itvit-v3-glass.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode><App /></StrictMode>
);
