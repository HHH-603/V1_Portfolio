import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import About from "./pages/About";

function App() {
  return (
    <Router>
      <>
        <Route exact path="/" component={About} />
      </>
    </Router>
  );
};

export default App;
