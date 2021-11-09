/* eslint-disable import/no-default-export */
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Test } from './pages/test';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Welcome to <img src="/logo192.png" alt="CSEA logo" width="200px" />
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
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Test />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
