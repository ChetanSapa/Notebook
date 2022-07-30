import React from "react";
import {NavLink} from "react-router-dom";

export const Navbar = () => (
    <nav className={'navbar navbar-dark navbar-expand-lg bg-primary'}>
        {/*<div className="container-fluid">*/}
            <div className="navbar-brand m-lg-3">
                Notes
            </div>
            <div className="navbar-nav">
                <NavLink className="nav-link" aria-current="page" to={'/'} exact>Home</NavLink>
                <NavLink className="nav-link" to={'/about'}>About</NavLink>
            </div>
        {/*</div>*/}
    </nav>
)

