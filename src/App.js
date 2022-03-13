import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail/Index";
function App() {
  return (
    <Router>
        <Routes>
          <Route key={"home"} exact path="/" element={<Home />} />
          <Route key={"char"} path="/char/:char_id" element={<Detail />} />
        </Routes>
    </Router>
  );
}


export default App;
