import * as React from "react";
import { hydrateRoot } from "react-dom/client";
import { App } from "../App.tsx";

window.onload = () => {
  hydrateRoot(document.getElementById("react_root"), <App />);
};
