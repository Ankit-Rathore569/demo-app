import React, { Component } from 'react'
import EmployeeB from './EmployeeB'

export default class EmployeeA extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Jordon"
        }
        console.log("Employee A Constructor calling")
    }
    componentDidMount() {
        console.log("Employee A componentDidMount calling")
    }
    componentWillMount() {
        console.log("Employee A componentWillMount calling")
    }
    // static getDerivedStateFromProps() {
    //     console.log("Employee A getDerivedStateFromProps calling")
    //     return null;
    // }
    render() {
        console.log("Employee A Render calling")
        return (
            <div>
                <h1>Employee A is working</h1>
                <EmployeeB />
            </div>
        )
    }
}
