import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Router } from '@reach/router';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <About path="/about/" />
        <Projects path="/projects/" />
        <Contact path="/contact/" />
        {/* <Error path="*" /> */}
      </Router>
      <Footer />
    </div>
  );
}

export default App;
