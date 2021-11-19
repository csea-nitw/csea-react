/* eslint-disable import/no-default-export */
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Test } from './pages/test';
import './css/font.css';
import { Quiz } from './pages/quiz';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Welcome to <img src="/logo192.png" alt="CSEA logo" width="200px" />
        <p>
          Solve <code>the Quiz</code> and win prizes.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit CSEA
        </a>
      </header>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Test />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
