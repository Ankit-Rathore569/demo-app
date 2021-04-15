import React, { Fragment } from "react";
import CustomHook from "./CustomHook";
const CallCustomHook = () => {
    const [salary, increamentSalary] = CustomHook();
    const [salary2, increamentSalary2] = CustomHook();
    return (
        <Fragment>
            <h5>Employee Details</h5>
            <h5>Hii User Your salary is {salary}</h5>
            <button className="btn btn-success" onClick={increamentSalary}>Increament Salary</button>
            <h5>Hii User Your salary is {salary2}</h5>
            <button className="btn btn-danger" onClick={increamentSalary2}>Increament Salary</button>
        </Fragment>
    );
};

export default CallCustomHook;
