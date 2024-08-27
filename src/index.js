import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// `../..` means go 2 levels out (in terms of directories.)
// `./XXX` means find in current directory, file XXX.
// `../XXX` means find in outside directory, file XXX.