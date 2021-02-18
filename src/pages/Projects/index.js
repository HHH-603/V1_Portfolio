import React from "react";
import Header from "../../components/Header/index";
import ProjectContainer from "../../components/Project-Container";
import ProjectCard from "../../components/Project-Card";
import PWA from "../../images/pwa-budget-tracker.png";
import NoteTaker from "../../images/note-taker-app.png";
import README from "../../images/readme-generator.png";
import "./style.css";
import ProjectDetails from "../../components/Project-Details";
import ImageContainer from "../../components/Image-Container";

const Projects = () => {
    return (
        <>
            <ProjectContainer>
                <Header>
                    <h1>Projects</h1>
                </Header>
                <ProjectCard>
                    <ImageContainer>
                        <a href="https://quiet-temple-68742.herokuapp.com/" className="deployed-link">
                            <img src={PWA} alt="pwa-budget-tracker" className="project-image"></img>
                        </a>
                    </ImageContainer>
                    <ProjectDetails>
                        <h2 className="project-name">"Budget Tracker Web Application"</h2>
                        <p className="project-paragraph">Description: Resource where users can easily track their money (purchases and deposits), both online and offline.</p>
                        <p className="project-paragraph">Technologies/Frameworks Used: JavaScript, HTML5, Bootstrap, and MongoDB.</p>
                        <p className="project-paragraph-link">
                            <a href="https://github.com/HHH-603/Online-Offline-Progressive-Web-App-Budget-Tracker" className="repository-link">GitHub Repository</a>
                        </p>
                        <br />
                    </ProjectDetails>
                </ProjectCard>
                <ProjectCard>
                    <ImageContainer>
                        <a href="https://hank-holmes-note-taker.herokuapp.com/" className="deployed-link">
                            <img src={NoteTaker} alt="note-taker" className="project-image"></img>
                        </a>
                    </ImageContainer>
                    <ProjectDetails>
                        <h2 className="project-name">"Note Taker Web Application"</h2>
                        <p className="project-paragraph">Description: Resource where users can write, save, and delete notes.</p>
                        <p className="project-paragraph">Technologies/Frameworks Used: JavaScript, Node.js, HTML5, and Bootstrap.</p>
                        <p className="project-paragraph-link">
                            <a href="https://github.com/HHH-603/Note-Taker" className="repository-link">GitHub Repository</a>
                        </p>
                        <br />
                    </ProjectDetails>
                </ProjectCard>
                <ProjectCard>
                    <ImageContainer>
                        <img src={README} alt="readme-generator" className="project-image"></img>
                    </ImageContainer>
                    <ProjectDetails>
                        <h2 className="project-name">"README Generator"</h2>
                        <p className="project-paragraph">Description: Resource that generates a fully formatted README.md file based on user responses to questions that are displayed via the CLI.</p>
                        <p className="project-paragraph">Technologies/Frameworks Used: JavaScript and Node.js.</p>
                        <p className="project-paragraph-link">
                            <a href="https://github.com/HHH-603/Online-Offline-Progressive-Web-App-Budget-Tracker" className="repository-link">GitHub Repository</a>
                        </p>
                    </ProjectDetails>
                    <br />
                </ProjectCard>
            </ProjectContainer>
        </>
    );
};
export default Projects;