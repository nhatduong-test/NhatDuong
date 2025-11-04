"use client";
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { Code2, Server, Zap, Database, Cloud, Cpu } from "lucide-react";

export default function InformationTechnologyPage() {
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
      icon: <Code2 className="w-12 h-12" />,
      title: "Software & IT Solutions",
      description: "Comprehensive software development and IT consultancy services (6201, 6202, 6209, 6311, 6312).",
      features: [
        "Computer programming & custom software development",
        "IT consultancy & system management",
        "Data processing & analytics",
        "Web portal development",
        "Enterprise software solutions"
      ]
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Power Generation",
      description: "Clean and sustainable energy solutions through advanced power generation technologies (3511).",
      features: [
        "Wind power generation systems",
        "Solar power installations",
        "Renewable energy solutions",
        "Grid integration services",
        "Energy efficiency consulting"
      ]
    },
    {
      icon: <Server className="w-12 h-12" />,
      title: "Publishing & Distribution",
      description: "Software publishing and technology equipment distribution services (5820, 4651, 4652, 4741, 4742).",
      features: [
        "Software publishing & licensing",
        "Computer & peripheral equipment wholesale/retail",
        "Telecommunications equipment distribution",
        "Technology product supply chain",
        "After-sales technical support"
      ]
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "Machinery Production",
      description: "Manufacturing and installation of industrial computing equipment and machinery (2620, 3320).",
      features: [
        "Computer & peripheral equipment manufacturing",
        "Industrial machinery installation",
        "Equipment customization & integration",
        "Quality control & testing",
        "Maintenance & technical support"
      ]
    }
  ];

  const technologies = [
    { name: "Cloud Computing", icon: <Cloud className="w-8 h-8" /> },
    { name: "Data Centers", icon: <Database className="w-8 h-8" /> },
    { name: "AI & Machine Learning", icon: <Cpu className="w-8 h-8" /> },
    { name: "IoT Solutions", icon: <Server className="w-8 h-8" /> },
    { name: "Renewable Energy", icon: <Zap className="w-8 h-8" /> },
    { name: "Software Development", icon: <Code2 className="w-8 h-8" /> },
  ];

  return (
    <div className="bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#2f2f2f] text-white">
        <div className="pointer-events-none absolute right-[-10%] top-1/4 h-72 w-72 rounded-full bg-linear-to-tr from-green-500/30 to-yellow-400/20 blur-3xl" />
        
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
              Information Technology &
              <span className="ml-2 bg-linear-to-b from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Power Generation
              </span>
            </h1>
            <p className="mt-4 mx-auto max-w-3xl text-base/7 text-gray-300 md:text-lg/8">
              Pioneering the future with innovative IT solutions and sustainable energy systems. 
              We combine cutting-edge technology with clean power generation to drive digital 
              transformation and environmental sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Technology Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From software development to renewable energy, we deliver comprehensive technology solutions
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
                <div className="text-green-500 mb-4">
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
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Core Technologies</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Leveraging advanced technologies to deliver exceptional value
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-linear-to-br hover:from-blue-500 hover:to-cyan-500 hover:text-white transition-all duration-300 group"
                data-aos="zoom-in"
                data-aos-delay={index * 50}
              >
                <div className="text-green-500 group-hover:text-white mb-3 flex justify-center">
                  {tech.icon}
                </div>
                <p className="text-sm font-semibold text-gray-800 group-hover:text-white">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Energy Solutions Highlight */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Sustainable Power Generation
              </h2>
              <p className="text-gray-600 mb-6">
                Our commitment to environmental sustainability drives our investment in 
                renewable energy technologies. We specialize in wind and solar power 
                generation, providing clean, efficient energy solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Wind Power Systems</h4>
                    <p className="text-gray-600 text-sm">Efficient wind turbine installations and grid integration</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Solar Energy Solutions</h4>
                    <p className="text-gray-600 text-sm">Advanced photovoltaic systems for reliable clean energy</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Energy Management</h4>
                    <p className="text-gray-600 text-sm">Smart grid technology and energy optimization</p>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-left">
              <div className="bg-linear-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">IT Infrastructure Excellence</h3>
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                    <h4 className="font-bold mb-2">Enterprise Solutions</h4>
                    <p className="text-sm text-white/90">
                      Custom software development, system integration, and digital transformation
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                    <h4 className="font-bold mb-2">Data Management</h4>
                    <p className="text-sm text-white/90">
                      Advanced data processing, analytics, and business intelligence
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                    <h4 className="font-bold mb-2">Hardware Manufacturing</h4>
                    <p className="text-sm text-white/90">
                      Computer equipment production and industrial machinery installation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-r from-blue-500 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 text-center" data-aos="zoom-in">
          <h2 className="text-3xl font-bold text-white mb-4">
            Transform Your Business with Technology
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Partner with us to harness the power of IT and sustainable energy for your organization
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition">
            Get Started Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
