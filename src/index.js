import React from "react";
import reactDom from "react-dom";
import ReactDOM from "react-dom";
import App from "./App";
import EmployeeB from "./life-cycle/unmounting/EmployeeB";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
ReactDOM.render(
  <React.StrictMode>
    <EmployeeB />
  </React.StrictMode>,
  document.getElementById("rootB")
);
reactDom.unmountComponentAtNode(document.getElementById("rootB"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
