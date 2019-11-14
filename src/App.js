import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import BackgroundGame from './components/BackgroundGame';

function App() {
  return (
    <div className="App">
      <BackgroundGame />
      <Navbar />
      <section className="home-section">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </section>
      <section>
        <div>

        </div>
      </section>
    </div>
  );
}

export default App;
