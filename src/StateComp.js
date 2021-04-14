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
                <h1>This is state component</h1>
                <h3>Name:{this.state.name}</h3>
                <h3>Total Count:{this.state.count}</h3>
                <button onClick={this.clickMe}>Click Me</button>
            </Fragment>
        );
    }
}
