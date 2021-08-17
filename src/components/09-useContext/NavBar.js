import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink activeClassName="active" exact className="navbar-brand" to="/">Home</NavLink>        
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <NavLink activeClassName="active"exact className="nav-link" to="/about">About</NavLink>
                <NavLink activeClassName="active" exact className="nav-link" to="/login">Login</NavLink>                
                </div>
            </div>
        </nav>
    )
}
