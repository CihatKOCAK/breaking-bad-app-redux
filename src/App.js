import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail/Index";
import Quotes from "./pages/Quotes/Index";
function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Characters</Link>
          </li>
          <li>
            <Link to="/quotes">Quotes</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route  exact path="/" element={<Home />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route  path="/char/:char_id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
