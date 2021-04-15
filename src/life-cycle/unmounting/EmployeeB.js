import React, { Component } from "react";

export default class EmployeeB extends Component {
    constructor(props) {
        super(props);
        console.log("Employee B Constructor calling");
    }
    componentWillMount() {
        console.log("Employee B componentWillMount calling");
    }
    componentWillUnmount() {
        console.log("Employee B  componentWillUnmount calling");
    }
    render() {
        console.log("Employee B Render calling");
        return (
            <div>
                <h5>Employee B is working</h5>
            </div>
        );
    }
}
