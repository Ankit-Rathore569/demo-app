import React, { Component, Fragment } from 'react'

export default class RefForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: ''
        }
        this.inputTextField = React.createRef()
    }
    changeSubmit = (e) => {
        e.preventDefault()
        console.log(this.inputTextField)
        console.log(this.inputTextField.current)
        this.inputTextField.current.focus()
        const key = this.inputTextField.current.name
        const val = this.inputTextField.current.value
        this.setState({
            [key]: val
        })
    }
    render() {
        return (
            <Fragment>
                <h1 className="text-center">Contact Form</h1>
                <div className="container">
                    <h5>Name:{this.state.name}</h5>
                    <h5>Email:{this.state.email}</h5>
                    <h5>Password:{this.state.password}</h5>
                    <form onSubmit={this.changeSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputName1">Name</label>
                            <input type="text" name="name" ref={this.inputTextField} className="form-control" id="exampleInputName1" placeholder="name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" name="email" id="exampleInputEmail1" defaultValue="admin@yopmail.com" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </Fragment>
        )
    }
}
