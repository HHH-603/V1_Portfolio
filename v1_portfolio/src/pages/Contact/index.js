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
                    <h2>I'm currently open to new opportunities, so please feel free to send me an email and/or take a look at my LinkedIn and GitHub accounts!</h2>
                    <div className="contact-information">
                        <p className="contact-text"><a href="mailto:hholmes726@gmail.com" className="contact-link">Email</a></p>
                        <p className="contact-text"><a href="https://www.linkedin.com/in/henryhamiltonholmes/" className="contact-link">LinkedIn</a></p>
                        <p className="contact-text"><a href="https://github.com/HHH-603" className="contact-link">GitHub</a></p>
                    </div>
                </ContactDetails>
            </ContactContainer>
        </>
    );
};

export default Contact;