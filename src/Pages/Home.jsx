import React from "react";
import Hero from "../Components/HomePage/Hero";
import AboutUs from "../Components/HomePage/AboutUs";
import PopularDestination from "../Components/HomePage/PopularDestination";
import PopularPackages from "../Components/HomePage/PopularPackages";
import TravelWithUs from "../Components/HomePage/TravelWithUs";
import Testimonials from "../Components/HomePage/Testimonials";
import BlogSection from "../Components/HomePage/BlogSection";

function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <PopularDestination />
      <PopularPackages />
      <TravelWithUs />
      <Testimonials />
      <BlogSection />
    </div>
  );
}

export default Home;
