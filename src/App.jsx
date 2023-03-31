import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/home";
import Form from "./pages/form";

//components
import Nav from "./components/nav";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;