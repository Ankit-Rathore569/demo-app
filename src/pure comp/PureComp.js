import React, { PureComponent } from "react";
// Pure component implement shouldComponentUpdate with shallow props and state comparison
export default class PureComp extends PureComponent {
    render() {
        console.log("Pure Component Rendering");
        return (
            <div>
                <h5>Pure Compnonent </h5>
                <h5>Pure Compnonent Name:{this.props.name}</h5>
            </div>
        );
    }
}
