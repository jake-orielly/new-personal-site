import React from 'react';
import { ShowText } from './components/ShowText'
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">{"Home Page"}</Link>
          <Link to="/blog">{"Blog"}</Link>
        </nav>
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
