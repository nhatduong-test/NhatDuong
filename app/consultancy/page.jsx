"use client";
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { Building2, ClipboardCheck, FileSearch, Lightbulb } from "lucide-react";

export default function ConsultancyPage() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const services = [
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Architecture & Design",
      description: "Comprehensive design services for industrial and civil works, technical infrastructure, transportation, hydraulic works, and construction planning (7110).",
      features: [
        "Industrial & civil structure design",
        "Technical infrastructure planning",
        "Transportation system design",
        "Hydraulic works engineering",
        "Urban construction planning"
      ]
    },
    {
      icon: <ClipboardCheck className="w-12 h-12" />,
      title: "Management & Supervision",
      description: "Professional construction project management and supervision services ensuring quality and compliance (7110).",
      features: [
        "Construction investment project management",
        "Construction supervision",
        "Quality assurance & control",
        "Progress monitoring",
        "Safety compliance oversight"
      ]
    },
    {
      icon: <FileSearch className="w-12 h-12" />,
      title: "Appraisal & Survey",
      description: "Expert appraisal and survey services for construction projects including topographical and geological assessments (7110).",
      features: [
        "Design document appraisal",
        "Cost estimate evaluation",
        "Topographical surveys",
        "Geological investigations",
        "Technical feasibility studies"
      ]
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Business Services",
      description: "Strategic management consultancy and tender documentation services (7020, 7110).",
      features: [
        "Management consultancy",
        "Tender document preparation",
        "Bid analysis & evaluation",
        "Strategic planning support",
        "Business process optimization"
      ]
    }
  ];

  return (
    <div className="bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#2f2f2f] text-white">
        <div className="pointer-events-none absolute right-[-10%] top-1/4 h-72 w-72 rounded-full bg-linear-to-tr from-orange-500/30 to-yellow-400/20 blur-3xl" />
        
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
              Consultancy &
              <span className="ml-2 bg-linear-to-b from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Technical Architecture
              </span>
            </h1>
            <p className="mt-4 mx-auto max-w-3xl text-base/7 text-gray-300 md:text-lg/8">
              Delivering world-class architectural design, engineering supervision, 
              and management consultancy services. We transform visions into reality 
              through technical excellence and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive consultancy and technical services backed by expertise and industry best practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-orange-500 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-orange-500 mr-2">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Nhat Duong Group?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center" data-aos="fade-up" data-aos-delay="0">
              <div className="bg-linear-to-br from-orange-500 to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Expert Team</h4>
              <p className="text-gray-600">
                Highly qualified architects, engineers, and consultants with proven track records
              </p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-linear-to-br from-orange-500 to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Quality Assurance</h4>
              <p className="text-gray-600">
                Rigorous quality control processes ensuring compliance with international standards
              </p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-linear-to-br from-orange-500 to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Innovation Focus</h4>
              <p className="text-gray-600">
                Leveraging cutting-edge technology and methodologies for optimal solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-r from-orange-500 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 text-center" data-aos="zoom-in">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Let&apos;s discuss how our consultancy and architectural services can bring your vision to life
          </p>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition">
            Contact Our Experts
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
