import React, { Component } from "react";
import MountEmpComB from "./MountEmpComB";

export default class MountEmpCompA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Jordon",
        };
        console.log("MountEmpComp A Constructor calling");
    }
    componentDidMount() {
        console.log("MountEmpComp A componentDidMount calling");
    }
    // componentWillMount() {
    //     console.log("MountEmpComp A componentWillMount calling");
    // }
    static getDerivedStateFromProps() {
        console.log("MountEmpComp A getDerivedStateFromProps calling");
        return null;
    }
    render() {
        console.log("MountEmpComp A Render calling");
        return (
            <div>
                <h5>MountEmpComp A is working</h5>
                <MountEmpComB />
            </div>
        );
    }
}
