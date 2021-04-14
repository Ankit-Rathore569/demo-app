import React, { Component, Fragment } from 'react'
import PureComp from './PureComp';
import RegularComp from './RegularComp';

export default class ParentComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "John Smith",
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({ name: "Steve Jhonson" })
        }, 2000);
    }
    render() {
        console.log("Parent Component Rendering")
        return (
            <Fragment>
                <h3>Parent Comp Name:{this.state.name}</h3>
                <RegularComp name={this.state.name} />
                <PureComp name={this.state.name} />
            </Fragment >
        )
    }
}
