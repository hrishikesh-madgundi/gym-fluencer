import React from "react";
import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import FeatureCards from "./components/FeatureCards";
import StepTour from "./components/StepTour";
import ReviewsCarousel from "./components/ReviewsCarousel";
import FAQ from "./components/FAQs";
import Footer from "./components/Footer";

function App() {
  return (
    <div >
      <Navbar />
      <HeroCarousel />
      <FeatureCards/>
      <StepTour />
      <ReviewsCarousel/>
      <FAQ/>
      <Footer/>
      
    </div>
  );
}

export default App;
