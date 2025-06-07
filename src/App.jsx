import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import BackToTop from "./components/BackToTop";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <div className="bg-black text-white font-sans">
      <Loader />
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Team />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
