import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import Testimonials from "./components/Testimonials";
import GuaranteeBanner from "./components/GuaranteeBanner";
import WhyChoose from "./components/WhyChoose";
import AidaSection from "./components/AidaSection";
import LandingSlider from "./components/LandingSlider";
import ExpertSection from "./components/ExpertSection";
import ComparisonSection from "./components/ComparisonSection";
import DeliverResults from "./components/DeliverResults";
import FaqSection from "./components/FaqSection";
import CallSection from "./components/CallSection";

import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Showcase />

      <Testimonials />
      <GuaranteeBanner />
      <WhyChoose />
      <AidaSection />
      <LandingSlider />

      <ExpertSection />
      <ComparisonSection />
      <DeliverResults />

      <FaqSection />

      <CallSection />  

      <Footer />
    </>
  );
}
