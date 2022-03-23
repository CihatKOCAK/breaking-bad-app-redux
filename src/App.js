import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Detail from "./pages/Detail";
import Quotes from "./pages/Quotes/Index";
import QuoteDetail from "./pages/QuoteDetail";
import Deaths from "./pages/Deaths";
import Chapters from "./pages/Chapters";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/char" element={<Characters />} />
        <Route path="/char/:char_id" element={<Detail />} />
        <Route exact path="/quotes" element={<Quotes />} />
        <Route path="/quotes/:quote_id" element={<QuoteDetail />} />
        <Route path="/deaths" element={<Deaths />} />
        <Route path="/chapters" element={<Chapters />} />
      </Routes>
    </Router>
  );
}

export default App;
