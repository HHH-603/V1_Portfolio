import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FlexContainer from "./components/Flex-Container";
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
      </>
    </Router>
  );
};

export default App;
