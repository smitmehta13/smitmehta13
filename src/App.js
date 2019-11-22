import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import BackgroundGame from './components/BackgroundGame';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BackgroundGame />
      <Navbar />
      <section id="home" className="home-section">
        <Home />
      </section>
    </div>
  );
}

export default App;
