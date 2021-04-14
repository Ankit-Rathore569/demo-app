import React, { PureComponent } from 'react'
// Pure component implement shouldComponentUpdate with shallow props and state comparison 
export default class PureComp extends PureComponent {
    render() {
        console.log("Pure Component Rendering")
        return (
            <div>
                <h3>Pure Compnonent </h3>
                <h3>Pure Compnonent Name:{this.props.name}</h3>
            </div>
        )
    }
}
