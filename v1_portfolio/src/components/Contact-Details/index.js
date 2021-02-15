import React from "react";
import "./style.css";

const ContactDetails = (props) => {
    return (
        <div className="contact-details">{props.children}</div>
    );
};

export default ContactDetails;