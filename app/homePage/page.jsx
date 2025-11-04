"use client";
import React, { useEffect } from "react";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import About from "@/components/Home/aboutShowcase";
import CustomerSupport from "../../components/CustomerSupport/CustomerSupport";
import Process from "@/components/Process/Process";
import BusinessSectors from "@/components/BusinessSectors/BusinessSectors";
import Testimonials from "@/components/Testimonials/Testimonials";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-light">
      <Navbar />
      <Hero />
      <About/>
      <CustomerSupport/>
      <Process/>
      <BusinessSectors />
      <Testimonials />
      <Footer />
    </div>
  );
}
