import React from "react";
import "./style.css";

const AboutContainer = (props) => {
    return (
        <div className="about-container">{props.children}</div>
    );
};

export default AboutContainer;