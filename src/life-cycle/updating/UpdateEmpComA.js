import React, { Component } from "react";
import UpdateEmpComB from "./UpdateEmpComB";
export default class UpdateEmpComA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            empid: 101,
        };
        console.log("UpdateEmpCom A Constructor calling");
    }
    static getDerivedStateFromProps() {
        console.log("UpdateEmpCom A getDerivedStateFromProps calling");
        return null;
    }
    updateId = () => {
        let empid = this.state.empid;
        this.setState({ empid: ++empid });
    };
    render() {
        console.log("UpdateEmpCom A Render calling");
        return (
            <div>
                <h5>UpdateEmpCom A is working</h5>
                <h5>Emp Id:{this.state.empid}</h5>
                <button className="btn btn-success m-2" onClick={this.updateId}>Update Id</button>
                <UpdateEmpComB empBid={this.state.empid} />
            </div>
        );
    }
}
