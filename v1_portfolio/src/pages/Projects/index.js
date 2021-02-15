import React from "react";
import Header from "../../components/Header/index";
import ProjectContainer from "../../components/Project-Container";
import ProjectCard from "../../components/Project-Card";
import PWA from "../../images/pwa-budget-tracker.png";
import NoteTaker from "../../images/note-taker-app.png";
import README from "../../images/readme-generator.png";
import "./style.css";

const Projects = () => {
    return (
        <>
            <ProjectContainer>
                <Header>
                    <h1>Projects</h1>
                </Header>
                <ProjectCard>
                    <div className="image-container">
                        <img src={PWA} alt="pwa-budget-tracker" className="project-image"></img>
                    </div>
                    <div className="project-details">
                        <h2 className="project-name">"PWA Budget Tracker?"</h2>
                        <p className="project-paragraph">Description: Resource where users can easily track their money (purchases and deposits), both online and offline.</p>
                        <p className="project-paragraph">Technologies/Frameworks Used: JavaScript, HTML5, Bootstrap, and MongoDB.</p>
                        <p className="project-paragraph-link">
                            <a href="https://quiet-temple-68742.herokuapp.com/">Deployed Application</a>
                        </p>
                        <p className="project-paragraph-link">
                            <a href="https://github.com/HHH-603/Online-Offline-Progressive-Web-App-Budget-Tracker">GitHub Repository</a>
                        </p>
                        <br />
                    </div>
                </ProjectCard>
                <ProjectCard>
                    <div className="image-container">
                        <img src={NoteTaker} alt="pwa-budget-tracker" className="project-image"></img>
                    </div>
                    <div className="project-details">
                        <h2 className="project-name">"PWA Budget Tracker"</h2>
                        <p className="project-paragraph">Description: Resource where users can easily track their money (purchases and deposits), both online and offline.</p>
                        <p className="project-paragraph">Technologies/Frameworks Used: JavaScript, HTML5, Bootstrap, and MongoDB.</p>
                        <p className="project-paragraph-link">
                            <a href="https://quiet-temple-68742.herokuapp.com/">Deployed Application</a>
                        </p>
                        <p className="project-paragraph-link">
                            <a href="https://github.com/HHH-603/Online-Offline-Progressive-Web-App-Budget-Tracker">GitHub Repository</a>
                        </p>
                        <br />
                    </div>
                </ProjectCard>
                <ProjectCard>
                    <div className="image-container">
                        <img src={README} alt="pwa-budget-tracker" className="project-image"></img>
                    </div>
                    <div className="project-details">
                        <h2 className="project-name">"PWA Budget Tracker"</h2>
                        <p className="project-paragraph">Description: Resource where users can easily track their money (purchases and deposits), both online and offline.</p>
                        <p className="project-paragraph">Technologies/Frameworks Used: JavaScript, HTML5, Bootstrap, and MongoDB.</p>
                        <p className="project-paragraph-link">
                            <a href="https://quiet-temple-68742.herokuapp.com/">Deployed Application</a>
                        </p>
                        <p className="project-paragraph-link">
                            <a href="https://github.com/HHH-603/Online-Offline-Progressive-Web-App-Budget-Tracker">GitHub Repository</a>
                        </p>
                    </div>
                    <br />
                </ProjectCard>
            </ProjectContainer>
        </>
    );
};
export default Projects;