import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Blockchain from "./Blockchain";
import SmartContracts from "./SmartContract";
import MobileApps from "./MobileApps";
import WebDevelopment from "./WebDevment";

const coreServices = [
  {
    id: "blockchain",
    title: "Blockchain Development",
    description:
      "Custom Layer-1 and Layer-2 blockchain solutions, decentralized apps (DApps), and enterprise-grade integrations.",
    icon: "https://cdn-icons-png.flaticon.com/128/5987/5987424.png"
  },
  {
    id: "smart-contracts",
    title: "Smart Contract Development",
    description:
      "Secure, gas-optimized contracts for DeFi, NFTs, Token Launches, and DAOs on Ethereum, BSC, Polygon & more.",
    icon: "https://cdn-icons-png.flaticon.com/128/9994/9994579.png"
  },
  {
    id: "mobile-apps",
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps (iOS & Android) using Flutter or React Native with seamless backend integration.",
    icon: "https://cdn-icons-png.flaticon.com/128/882/882704.png"
  },
  {
    id: "web-development",
    title: "Web Application Development",
    description:
      "Scalable web apps using React, Next.js, or Vue.js with cloud architecture, RESTful/GraphQL APIs.",
    icon: "https://cdn-icons-png.flaticon.com/128/919/919827.png"
  }
];

const additionalServices = [
  "UI/UX Design",
  "IT Infrastructure Consulting",
  "DevOps & CI/CD",
  "AI & ML Integration",
  "Custom ERP Solutions",
  "Cloud Services (AWS, Azure, GCP)",
  "API Development & Integration",
  "Cybersecurity & Auditing",
  "Technical Documentation",
];

const colorPalette = [
  "from-blue-400 to-purple-500",
  "from-green-400 to-teal-500",
  "from-pink-400 to-red-500",
  "from-yellow-300 to-orange-400",
  "from-indigo-400 to-blue-500",
  "from-rose-400 to-pink-500",
  "from-cyan-400 to-blue-500",
  "from-lime-300 to-green-400",
  "from-fuchsia-400 to-purple-500",
];

const Services = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (location.hash) {
      const section = location.hash.replace("#", "");
      setActiveSection(section);
    } else {
      setActiveSection("");
    }
  }, [location]);

  const renderSectionComponent = () => {
    switch (activeSection) {
      case "blockchain":
        return <Blockchain />;
      case "smart-contracts":
        return <SmartContracts />;
      case "mobile-apps":
        return <MobileApps />;
      case "web-development":
        return <WebDevelopment />;
      default:
        return null;
    }
  };

  if (activeSection) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">{renderSectionComponent()}</div>
    );
  }

  return (
    <main className="relative overflow-hidden bg-gradient-to-br from-[#f8faff] via-white to-blue-50 min-h-screen py-20 px-6 font-sans">
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-br from-purple-400 to-blue-400 rounded-full blur-3xl opacity-20 right-[-200px] top-[-100px]" />
      <div className="absolute w-[300px] h-[300px] bg-gradient-to-tr from-yellow-300 to-pink-300 rounded-full blur-2xl opacity-30 left-[-100px] bottom-[-100px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-14 leading-snug tracking-tight">
          Explore Our Creative Core Services
        </h1>

        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {coreServices.map((service, index) => (
            <div
              key={index}
              onClick={() => navigate(`/services#${service.id}`)}
              className="group cursor-pointer bg-white/20 backdrop-blur-2xl border border-white/30 hover:border-blue-400 rounded-3xl p-8 shadow-2xl hover:shadow-blue-300/50 transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-white rounded-full mb-5 shadow-md group-hover:scale-110 transition">
                <img src={service.icon} alt={service.title} className="w-8 h-8 object-contain" />
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-blue-700 mb-3">
                {service.title}
              </h2>
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed tracking-wide">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 justify-center items-center">
          {additionalServices.map((service, index) => (
            <div
              key={index}
              className={`px-5 py-3 rounded-2xl shadow-lg backdrop-blur-xl border border-white/30 bg-gradient-to-br ${colorPalette[index % colorPalette.length]} text-white font-medium text-sm sm:text-base`}
            >
              {service}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Services;
