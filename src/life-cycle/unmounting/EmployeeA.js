import React, { Component } from "react";
export default class EmployeeA extends Component {
    constructor(props) {
        super(props);
        console.log("Employee A Constructor calling");
    }
    componentWillMount() {
        console.log("Employee A componentWillMount calling");
    }
    componentWillUnmount() {
        console.log("Employee A  componentWillUnmount calling");
    }
    render() {
        console.log("Employee A Render calling");
        return (
            <div>
                <h5>Employee A is working</h5>
            </div>
        );
    }
}
