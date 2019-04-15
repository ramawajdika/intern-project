import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Navbar from "./components/Navigation";

class App extends Component {
  render() {
    return (
        <Router>
        <Navbar />
        <div>
          <Route exact path="/" component={LandingPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
