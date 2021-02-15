import React from "react";
import Header from "../../components/Header/index";
import ProfilePicture from "../../images/profile-picture.png";
import AboutContainer from "../../components/About-Container/index";
import AboutDetails from "../../components/About-Details";
import SkillSet from "../../components/Skill-Set/index";
import "./style.css";

var greeting = () => {
    let today = new Date();
    let hoursNow = today.getHours();

    if (hoursNow > 18) {
        return "Good evening!";
    } else if (hoursNow > 12) {
        return "Good afternoon!";
    } else if (hoursNow > 0) {
        return "Good morning!";
    } else {
        return "Greetings!"
    }
}

const About = () => {
    return (
        <>
            <AboutContainer>
                <Header>
                    <h1>About</h1>
                </Header>
                <div className="profile-picture-container">
                    <img src={ProfilePicture} alt="profile" className="profile-picture" />
                </div>
                <AboutDetails>
                    <h2 className="greeting">{greeting()}</h2>
                    <div className="about-details">
                        <p className="about-details-paragraph">
                            My name is Hank, and I'm a web developer based in Charlotte, North Carolina. I specialize in building mobile-first MERN web applications and websites, and love building products that have clean code and engaging user experiences.
                            I am a graduate of the University of North Carolina at Charlotte's Full Stack Web Development program, and previously worked at EveryAction, a nonprofit CRM/SaaS company in Washington, DC. A few technologies and frameworks that I've been working with recently are:
                        </p>
                    </div>
                    <SkillSet />
                </AboutDetails>
            </AboutContainer>
        </>
    );
};

export default About;