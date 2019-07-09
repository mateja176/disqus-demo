import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Disqus from './Disqus';
import logo from './logo.svg';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header" style={{ display: 'none' }}>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Disqus />
      </div>
    </Router>
  );
};

export default App;
