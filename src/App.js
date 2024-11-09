import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Projects from './Components/Projects';
import WritingsIndex from './Components/WritingsIndex';
import './css/App.css';
import './css/index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/writings" element={<WritingsIndex />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
