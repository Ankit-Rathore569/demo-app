import React, { Fragment, useEffect, useState } from "react";

const HooksComp = () => {
    const [name, setName] = useState("John");
    const [name2, setName2] = useState("Roman");
    const [salary, setsalary] = useState(10000);
    const [salary2, setsalary2] = useState(50000);

    const increament = () => {
        setsalary(salary + 1);
    };
    const decreament = () => {
        setsalary2(salary2 - 1);
    };
    useEffect(() => {
        console.log("useEffect rendering");
    }, [salary]);
    return (
        <Fragment>
            <h5>Employee Details</h5>
            <h5>
                Hii {name} your salary is {salary}
            </h5>
            <button className="btn btn-success" onClick={increament}>Increament Salary</button>
            <h5>
                Hii {name2} your salary is {salary2}
            </h5>
            <button className="btn btn-danger" onClick={decreament}>Decreament Salary</button>
        </Fragment>
    );
};

export default HooksComp;
