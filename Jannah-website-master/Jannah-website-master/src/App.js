import React from "react";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import About from "./components/about/aboutpage";
import Footer from "./components/footer/footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/project" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} /> */}
        </Routes>
        <Footer />
      </div>
      </Router>
  );
}

export default App;
