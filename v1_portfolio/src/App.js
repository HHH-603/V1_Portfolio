import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FlexContainer from "./components/Flex-Container";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <FlexContainer>
          <Route exact path="/" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </FlexContainer>
        <br />
        <br />
        <br />
        <Footer />
      </>
    </Router>
  );
};

export default App;