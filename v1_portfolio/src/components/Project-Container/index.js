import React from "react";
import "./style.css";

const ProjectContainer = (props) => {
    return (
        <div className="project-container">{props.children}</div>
    );
};

export default ProjectContainer;