import React from "react";
import "./style.css";

const ProjectDetails = (props) => {
    return (
        <div className="project-details">{props.children}</div>
    );
};

export default ProjectDetails;