import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Router } from '@reach/router';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';
import Error from './components/Error';

class App extends Component {
  state = {
    isLoading: true
  };
  render() {
    if (this.state.isLoading) {
      return <h1>LOADING</h1>;
    } else {
      return (
        <div className="App">
          <Header />
          <Router primary={false}>
            <Home path="/" />
            <About path="/about/" />
            <Projects path="/projects/" />
            <Contact path="/contact/" />
            <Error path="*" />
          </Router>
          <Footer />
        </div>
      );
    }
  }
  componentDidMount() {
    this.setState({ isLoading: false });
  }
}

export default App;
