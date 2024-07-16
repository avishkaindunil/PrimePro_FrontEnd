import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/root/Home";
import AboutUs from "./pages/root/AboutUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import News from "./pages/root/News";
import Contact from "./pages/root/Contact";
import Services from "./pages/root/Services";
import Login from "./pages/login/Login";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
