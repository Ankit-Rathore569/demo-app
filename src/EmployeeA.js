import React, { Component } from 'react'
import EmployeeB from './EmployeeB'

export default class EmployeeA extends Component {
    constructor(props) {
        super(props)
        this.state = {
            empid: 101
        }
        console.log("Employee A Constructor calling")
    }

    static getDerivedStateFromProps() {
        console.log("Employee A getDerivedStateFromProps calling")
        return null
    }
    updateId = () => {
        let empid = this.state.empid
        this.setState({ empid: ++empid })
    }
    render() {
        console.log("Employee A Render calling")
        return (
            <div>
                <h1>Employee A is working</h1>
                <h1>Emp Id:{this.state.empid}</h1>
                <button onClick={this.updateId}>Update Id</button>
                <EmployeeB empBid={this.state.empid} />
            </div>
        )
    }
}
