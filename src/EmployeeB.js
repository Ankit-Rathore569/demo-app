import React, { Component } from 'react'

export default class EmployeeB extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Drew"
        }
        console.log("Employee B Constructor calling")
    }
    componentDidMount() {
        console.log("Employee B componentDidMount calling")
    }
    componentWillMount() {
        console.log("Employee B componentWillMount calling")
    }
    // static getDerivedStateFromProps() {
    //     console.log("Employee B getDerivedStateFromProps calling")
    //     return null;
    // }
    render() {
        console.log("Employee B Render calling")
        return (
            <div>
                <h1>Employee B is working</h1>
            </div>
        )
    }
}
