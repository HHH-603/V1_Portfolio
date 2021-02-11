import React from "react";
import "./style.css";

const AboutDetailsParagraph = (props) => {
    return (
        <div className="about-details-paragraph">{props.children}</div>
    );
};

export default AboutDetailsParagraph;