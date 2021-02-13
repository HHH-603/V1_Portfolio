import React, { Component } from "react";
import projects from "../../projects.json";
import Header from "../../components/Header/index";
import ProjectCard from "../../components/Project-Card";
import ProjectContainer from "../../components/Project-Container";
import "./style.css";

class Projects extends Component {
    state={
        projects
    };
    render () {
        return (
            <ProjectContainer>
                <Header>Projects</Header>
                {this.state.projects.map(projects => (
                    <ProjectCard
                    id={projects.id}
                    key={projects.id}
                    image={projects.image}
                    name={projects.name}
                    description={projects.description}
                    technologies={projects.technologies}
                    deployed={projects.deployed}
                    repository={projects.repository}
                    />
                ))};
            </ProjectContainer>
        );
    };
};

export default Projects;