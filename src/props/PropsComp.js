import React, { Component, Fragment } from "react";
export default class PropsComp extends Component {
    constructor(props) {
        super(props);
        console.log(props.name);
    }
    render() {
        const data = {
            text: "I hope you enjoy learning React!",
            author: {
                name: "Hello Kitty",
                avatarUrl: "https://placekitten.com/g/64/64",
            },
        };
        return (
            <Fragment>
                <h5 className="txt-center">Hello I Am Props Component</h5>
                <h5>Emp Name:{this.props.name}</h5>
                <h5>Emp Id:{this.props.empid}</h5>
                <h5>Emp Domain:{this.props.domain}</h5>
                <hr />
                {/* <PropsChildComp name="John" empid="102" domain="Backend Developer" />
                <PropsChildComp name="Vishal" empid="103" domain="React JS Developer" />
                <PropsChildComp name="Yash" empid="104" domain="Android Developer" /> */}
                <PropsChildComp data={data} />
            </Fragment>
        );
    }
}
class PropsChildComp extends Component {
    render() {
        return (
            // <Fragment>
            //     <h5 className="txt-center">Hello I Am Props Child Components</h5>
            //     <h5>Emp Name:{this.props.name}</h5>
            //     <h5>Emp Id:{this.props.empid}</h5>
            //     <h5>Emp Domain:{this.props.domain}</h5>
            //     <hr />
            // </Fragment>
            <Fragment>
                <h5 className="txt-center">Hello I Am Props Child Components</h5>
                <div className="UserInfo">
                    <img
                        className="Avatar"
                        src={this.props.data.author.avatarUrl}
                        alt={this.props.data.author.name}
                    />
                    <div className="UserInfo-name">{this.props.data.author.name}</div>
                </div>
                <div className="Comment-text">{this.props.data.text}</div>
            </Fragment>
        );
    }
}
