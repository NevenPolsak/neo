import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero"
import About from "./components/about/About"
import Development from "./components/development/Development";
import Subscribe from "./components/subscribe/Subscribe"
import Footer from "./components/footer/Footer"
import ScrollButton from "./components/scrollButton/ScrollButton";

function App() {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <About/>
    <Development/>
    <Subscribe/>
    <Footer/>
    <ScrollButton/>
   </div>
  );
}

export default App;
