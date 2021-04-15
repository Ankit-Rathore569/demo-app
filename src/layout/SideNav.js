import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import "../App.css";
const SideNav = () => {
    return (
        <Fragment>
            <div className="sidenav">
                <Link to="/home">Home</Link>
                <Link to="/props">Props</Link>
                <Link to="/state">State</Link>
                <Link to="/lcm-mounting">Life-cycle-Mounting</Link>
                <Link to="/lcm-updating">Life-cycle-Updating</Link>
                <Link to="/lcm-unmounting">Life-cycle-unmouting</Link>
                <Link to="/hooks">Hooks</Link>
                <Link to="/customhooks">CustomHook</Link>
                <Link to="/purecomp">Pure-Component</Link>
                <Link to="/ref">Refs</Link>
                <Link to="/hoc">Hoc</Link>
            </div>
        </Fragment>
    )
}

export default SideNav

