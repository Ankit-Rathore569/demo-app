import React, { Component } from "react";

export default class MountEmpComB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Drew",
        };
        console.log("MountEmpCom B Constructor calling");
    }
    componentDidMount() {
        console.log("MountEmpCom B componentDidMount calling");
    }
    // componentWillMount() {
    //     console.log("MountEmpCom B componentWillMount calling")
    // }
    static getDerivedStateFromProps() {
        console.log("MountEmpCom B getDerivedStateFromProps calling");
        return null;
    }
    render() {
        console.log("MountEmpCom B Render calling");
        return (
            <div>
                <h5>MountEmpCom B is working</h5>
            </div>
        );
    }
}
