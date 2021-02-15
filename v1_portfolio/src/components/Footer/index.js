import React from "react";
import Email from "../../images/mail-line.svg";
import GitHub from "../../images/github-line.svg";
import LinkedIn from "../../images/linkedin-box-line.svg";
import "./style.css";

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <a href="mailto:hholmes726@gmail.com">
                    <img src={Email} alt="email-icon" className="icon" />
                </a>
            &nbsp;
            <a href="https://www.linkedin.com/in/henryhamiltonholmes/">
                    <img src={LinkedIn} alt="linkedin-icon" className="icon" />
                </a>
            &nbsp;
            <a href="https://github.com/HHH-603">
                    <img src={GitHub} alt="github-icon" className="icon" />
                </a>
            &nbsp;
            <p className="footer-text">
                    | Hank Holmes, Full Stack Web Developer
            </p>
            </footer>
        </>
    );
};

export default Footer;