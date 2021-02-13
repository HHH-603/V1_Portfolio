import React from "react";
import "./style.css";

const ProjectCard = (props) => {
    return (
        <div className="project-card">
            <div className="image-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <p>{props.name}</p>
                <p>Description: {props.description}</p>
                <p>Languages/Technologies Used: {props.technologies}</p>
                <p>Deployed Action: {props.deployed}</p>
                <p>GitHub Repository: {props.repository}</p>
            </div>
        </div>
    );
};

export default ProjectCard;