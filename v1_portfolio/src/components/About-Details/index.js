import React from "react";
import "./style.css";

const AboutDetails = (props) => {
    return (
        <div className="about-details">{props.children}</div>
    );
};

export default AboutDetails;