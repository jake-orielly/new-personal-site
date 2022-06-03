import React from 'react';
import { ShowText } from './components/ShowText';
import { NavBar } from './components/NavBar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      < NavBar />
        <Routes>
          <Route path="/" element={
            <ShowText text="Welcome to the home page." />
          }>  
          </Route>
          <Route path="/blog" element={
            <ShowText text="Everybody's gotta have a blog I guess." />
          }>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
