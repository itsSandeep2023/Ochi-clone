import React from "react";
import Navbar from "./component/Navbar";
import LandingPage from "./component/LandingPage";
import Marquee from "./component/Marquee";
import About from "./component/About";
import Eyes from "./component/Eyes";
import Featured from "./component/Featured";
import Cards from "./component/Cards";
import Footer from "./component/Footer";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full bg-[#fff] overflow-hidden">
      <Navbar />

      <div id="services">
        <LandingPage />
      </div>
      <Marquee />

      <div id="about-us">
        <About />
      </div>

      <Eyes />

      <div id="our-work">
        <Featured />
      </div>

      <div id="insights">
        <Cards />
      </div>

      <div id="contact-us">
        <Footer />
      </div>
    </div>
  );
}

export default App;
