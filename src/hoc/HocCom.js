import React, { Component, Fragment } from 'react'
import Bjp from './Bjp'
import Congress from './Congress'
// higher-order component is a function that takes a component and returns a new component.
export default class HocCom extends Component {
    render() {
        return (
            <Fragment>
                <h5>Higher Order Component</h5>
                <Bjp name="Shivraj Singh Chouhan" />
                <Congress name="kamal nath" />
            </Fragment>
        )
    }
}
