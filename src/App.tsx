/* eslint-disable import/no-default-export */
/* eslint import/newline-after-import: "off" */
import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Test } from './pages/test';
import './css/font.css';
import { Quiz } from './pages/quiz';
import { Navbar } from './components/navbar';
import { SignIn } from './pages/login';
import { Waiting } from './pages/waiting';
import { ResultWaiting } from './pages/resultWait';
import { Result } from './pages/result';
import { SignUp } from './pages/signup';
function App() {
  return (
    <div className="App" style={{ backgroundColor: '#EAEEF3', minHeight: '100vh' }}>
      <Navbar />
      {/* <header className="App-header">
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
      </header> */}
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Test />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/wait" element={<Waiting />} />
            <Route path="/result-wait" element={<ResultWaiting />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
