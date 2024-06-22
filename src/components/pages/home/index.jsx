"use client";

import AboutSection from "./about";
import HeroSection from "./hero-section";
import Services from "./services";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <Services />
      <AboutSection />
    </div>
  );
}

export default HomePage;
