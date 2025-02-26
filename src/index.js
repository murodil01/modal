import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import withLogger from "./withLogger";

const EnhancedApp = withLogger(App);

ReactDOM.render(
  <React.StrictMode>
    <EnhancedApp />
  </React.StrictMode>,
  document.getElementById("root")
);
