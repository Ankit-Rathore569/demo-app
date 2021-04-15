import React, { Component } from "react";
// Regular component does not implement the shouldComponentUpdate method.It always return true by default
export default class RegularComp extends Component {
    shouldComponentUpdate(newProps, newState) {
        if (newProps.name !== this.props.name) {
            return true;
        } else {
            return false;
        }
    }
    render() {
        console.log("Regular Component Rendering");
        return (
            <div>
                <h5>Regular Compnonent </h5>
                <h5>Regular Compnonent Name:{this.props.name}</h5>
            </div>
        );
    }
}
