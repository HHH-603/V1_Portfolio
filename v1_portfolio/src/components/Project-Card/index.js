import React from "react";
import "./style.css";


const ProjectCard = (props) => {
    return (
        <div className="project-card">{props.children}</div>
    );
};

export default ProjectCard;