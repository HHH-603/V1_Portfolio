import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <p><Link className="navbar__nav-link" to="/">About</Link></p>
            <p><Link className="navbar__nav-link" to="/projects">Projects</Link></p>
            <p><Link className="navbar__nav-link" to="/contact">Contact</Link></p>
        </nav>
    );
};

export default Navbar;