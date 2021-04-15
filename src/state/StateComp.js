import React, { Component, Fragment } from "react";

export default class StateComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            count: this.props.count,
        };
    }
    clickMe = () => {
        let count = this.state.count;
        let name = this.state.name;
        this.setState({ count: ++count });

        if (count === 1) {
            name = "Alexander";
        } else if (count === 2) {
            name = "Henry";
        } else if (count === 3) {
            name = "Jacob";
        } else if (count === 4) {
            name = "Michael";
        } else if (count === 5) {
            name = "Daniel";
        } else if (count === 6) {
            name = "Jack";
        } else if (count === 6) {
            name = "Wyatt";
        }
        this.setState({ name: name });
    };
    render() {
        return (
            <Fragment>
                <h5>This is state component</h5>
                <h5>Name:{this.state.name}</h5>
                <h5>Total Count:{this.state.count}</h5>
                <button className="btn btn-success" onClick={this.clickMe}>Click Me</button>
            </Fragment>
        );
    }
}
