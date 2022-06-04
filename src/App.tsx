import React from "react";
import { ShowText } from "./components/ShowText";
import { Blog } from "./components/Blog";
import { NavBar } from "./components/NavBar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route
            path=""
            element={
              <ShowText text="We're making some changes... new site coming soon!" />
            }
          ></Route>
          <Route path="blog" element={<Blog />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
