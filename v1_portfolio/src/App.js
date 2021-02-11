import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FlexContainer from "./components/Flex-Container";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <FlexContainer>
          <Route exact path="/" component={About} />
        </FlexContainer>
        <Footer />
      </>
    </Router>
  );
};

export default App;