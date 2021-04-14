import React, { Component } from "react";

export default class EmployeeB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            EmpId: this.props.empBid,
        };
        console.log("Employee B Constructor calling");
    }
    static getDerivedStateFromProps(props, state) {
        console.log("Employee B getDerivedStateFromProps calling");
        console.log(props, state);
        if (props.empBid !== state.EmpId) {
            return { EmpId: props.empBid };
        }
        return null;
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("EmployeeB shouldComponentUpdate calling");
        console.log(nextProps, nextState);
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("EmployeeB getSnapshotBeforeUpdate calling");
        console.log(prevProps, prevState);
        return 3;
    }
    componentDidUpdate(prevProps, prevState, snapShot) {
        console.log("EmployeeB componentDidMount is invoked");
        console.log(prevProps, prevState, snapShot);
    }
    render() {
        console.log("Employee B Render calling");
        return (
            <div>
                <h1>Employee B is working</h1>
                <h1>Emp Id:{this.state.EmpId}</h1>
            </div>
        );
    }
}
