import { Fragment } from "react";
import "./App.css";
import CustomHook from "./CustomHook";
import HooksComp from "./HooksComp";
function App() {
  const [salary, increamentSalary] = CustomHook()
  const [salary2, increamentSalary2] = CustomHook()
  return (
    <Fragment>
      <h2>Hello World APP.JS</h2>
      <hr />
      <h2>Employee Details</h2>
      <h2>Hii User Your salary is {salary}</h2>
      <button onClick={increamentSalary}>Increament Salary</button>
      <h2>Hii User Your salary is {salary2}</h2>
      <button onClick={increamentSalary2}>Increament Salary</button>
    </Fragment>
  );
}

export default App;
