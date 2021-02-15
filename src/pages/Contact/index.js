import React from "react";
import ContactContainer from "../../components/Contact-Container";
import "./style.css";
import ContactDetails from "../../components/Contact-Details";
import Header from "../../components/Header";

const Contact = () => {
    return (
        <>
            <ContactContainer>
                <Header>
                    <h1>Contact</h1>
                </Header>
                <ContactDetails>
                    <p>I'm currently open to new opportunities, so please feel free to send me an email and/or take a look at my LinkedIn and GitHub accounts!</p>
                    <div className="contact-information">
                        <h2 className="contact-text"><a href="mailto:hholmes726@gmail.com" className="contact-link">Email</a></h2>
                        <h2 className="contact-text"><a href="https://www.linkedin.com/in/henryhamiltonholmes/" className="contact-link">LinkedIn</a></h2>
                        <h2 className="contact-text"><a href="https://github.com/HHH-603" className="contact-link">GitHub</a></h2>
                    </div>
                </ContactDetails>
            </ContactContainer>
        </>
    );
};

export default Contact;