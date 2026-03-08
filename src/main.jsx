import { StrictMode } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";

// Verander deze import om een andere variant te bekijken:
// import App from "../itvit-v1-dark-cyan.jsx";
// import App from "../itvit-v2-navy-orange.jsx";
// import App from "../itvit-v3-corporate.jsx";
// import App from "../itvit-v3-glass.jsx";
// import App from "../itvit-v3-terminal.jsx";
import App from "../itvit-v1-dark-cyan.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
