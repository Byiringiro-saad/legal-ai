import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/home";
import Form from "./pages/form";

// Sub-pages
import TypeForm from "./components/form";
import Report from "./components/report";
import Download from "./components/download";

//components
import Nav from "./components/nav";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />}>
          <Route path="" element={<TypeForm />} />
          <Route path="report" element={<Report />} />
          <Route path="download" element={<Download />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
