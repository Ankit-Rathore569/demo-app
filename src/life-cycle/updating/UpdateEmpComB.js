import React, { Component } from "react";

export default class MountEmpComB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            EmpId: this.props.empBid,
        };
        console.log("MountEmpCom B Constructor calling");
    }
    static getDerivedStateFromProps(props, state) {
        console.log("MountEmpCom B getDerivedStateFromProps calling");
        console.log(props, state);
        if (props.empBid !== state.EmpId) {
            return { EmpId: props.empBid };
        }
        return null;
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("MountEmpCom B shouldComponentUpdate calling");
        console.log(nextProps, nextState);
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("MountEmpCom B getSnapshotBeforeUpdate calling");
        console.log(prevProps, prevState);
        return 3;
    }
    componentDidUpdate(prevProps, prevState, snapShot) {
        console.log("MountEmpCom B componentDidMount is invoked");
        console.log(prevProps, prevState, snapShot);
    }

    render() {
        console.log("MountEmpCom B Render calling");
        return (
            <div>
                <h5>MountEmpCom B is working</h5>
                <h5>Emp Id:{this.state.EmpId}</h5>
            </div>
        );
    }
}
