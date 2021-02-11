import React from "react";
import Header from "../../components/Header/index";
import AboutContainer from "../../components/About-Container/index";
import AboutDetails from "../../components/About-Details";
import ProfilePicture from "../../images/profile-picture.png";
import "./style.css";
import AboutDetailsParagraph from "../../components/About-Details-Paragraph";

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
                    <AboutDetailsParagraph>
                        <h2>About Me</h2>
                        <p>
                            Hoj je deka ofon, nu unua vortludo ekskluzive ies. Fiksa ekkria ili do. Is kuzo mega tre. Sob jo ator frida disskribado, ofon sekse artefarita iom zo. Ha baf kial pasko praantaŭlasta, plie prezoinda ge pre. Ac ligvokalo diskriminacio sob, ig zeta nenia senobjekta nea. Vi tiama infra bis, jeno egalas enz ol. Ing post danke festo o, enz kies ultra artefarita zo. Via ie peto stif kemia, halo pleja akuzativo kio nf.
                        </p>
                    </AboutDetailsParagraph>
                </AboutDetails>
            </AboutContainer>
        </>
    );
};

export default About;