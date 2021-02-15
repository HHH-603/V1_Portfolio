import React from "react";
import "./style.css";

const ContactContainer = (props) => {
    return (
        <div className="contact-container">{props.children}</div>
    );
};

export default ContactContainer;