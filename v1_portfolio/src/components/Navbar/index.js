import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link className="navbar__nav-link" to="/">About</Link>
        </nav>
    );
};

export default Navbar;