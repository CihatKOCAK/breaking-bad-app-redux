import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Detail from "./pages/Detail";
import Quotes from "./pages/Quotes/Index";
import QuoteDetail from "./pages/QuoteDetail";
import Loading from "./components/Loading";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/char" element={<Characters />} />
        <Route path="/char/:char_id" element={<Detail />} />
        <Route exact path="/quotes" element={<Quotes />} />
        <Route path="/quotes/:quote_id" element={<QuoteDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
