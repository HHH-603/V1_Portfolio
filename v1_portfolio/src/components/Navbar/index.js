import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link className="navbar__nav-link" to="/">About</Link>
            <Link className="navbar__nav-link" to="/projects">Projects</Link>
            <Link className="navbar__nav-link" to="/contact">Contact</Link>
        </nav>
    );
};

export default Navbar;