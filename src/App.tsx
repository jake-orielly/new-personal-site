import React from "react";
import { HomePage } from "./components/HomePage";
import { Blog } from "./components/Blog";
import BlogRouter from "./components/Blog/BlogRouter";
import { Bookshelf } from "./components/Bookshelf";
import { Contact } from "./components/Contact";
import { NavBar } from "./components/NavBar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogRouter />} />
          <Route path="recentReads" element={<Bookshelf />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
