import React from "react";
import Navbar from "../components/Navbar";
import ServiceCard from "../components/ServiceCard";
import DetailedServiceCard from "../components/DetailedServiceCard";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import heroImage from "../assets/hero section image.png";
import { FaBalanceScale, FaBuilding, FaFileInvoice, FaGlobe, FaUtensils, FaAward } from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  { title: "Trademark Registration", description: "Protect your brand name/logo/slogan by registering your trademark from anywhere in India." },
  { title: "Company Registration", description: "Register any type of company including Pvt Ltd, LLP, OPC and update PAN, TAN & GST." },
  { title: "GST Services", description: "Outsource GST filings and compliance with trusted legal experts at PlanMyTax." },
  { title: "Import Export License", description: "Get your DGFT Import Export license online and kickstart your trade journey." },
  { title: "FSSAI Registration", description: "Apply for food safety certificates and FSSAI license for your food business." },
  { title: "ISO Registration", description: "Improve credibility by registering your business for ISO certification." },
];

const detailedCards = [
  {
    icon: <FaBalanceScale />,
    title: "Trademark Registration",
    description: "Safeguard your brand identity by registering your trademark quickly and legally.",
    link: "/services/trademark"
  },
  {
    icon: <FaBuilding />,
    title: "Company Registration",
    description: "From Private Ltd to LLP, we help you register seamlessly with the government.",
    link: "/services/company-registration"
  },
  {
    icon: <FaFileInvoice />,
    title: "GST Services",
    description: "Fast and accurate GST filing, modification, and cancellation — all handled by us.",
    link: "/services/gst"
  },
  {
    icon: <FaGlobe />,
    title: "Import Export License",
    description: "Expand internationally by obtaining your IEC certificate in days.",
    link: "#"
  },
  {
    icon: <FaUtensils />,
    title: "FSSAI Registration",
    description: "Get your food safety certificate and serve your customers with confidence.",
    link: "#"
  },
  {
    icon: <FaAward />,
    title: "ISO Registration",
    description: "Show you're global-standard ready with ISO certification support.",
    link: "#"
  }
];

const Home = () => {
  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-indigo-700 to-blue-600 bg-size-400 animate-gradient min-h-screen">
        <Navbar />
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between gap-16 min-h-[calc(100vh-5rem)]">
          {/* Left Hero Text */}
          <div className="flex-1 text-left">
            <h1 className="text-6xl font-extrabold leading-tight mb-6">
              Legal. <br /> Compliant. <br /> Stress-Free.
            </h1>
            <button className="border border-white px-6 py-2 rounded-full font-medium mb-6 hover:bg-white hover:text-primary transition">
              B2B Services
            </button>
            <p className="text-blue-100 text-xl max-w-md leading-relaxed mb-8">
              Helping individuals and businesses get legally registered, tax-compliant, and future-ready.
            </p>
            <div className="flex gap-10">
              <div className="text-left">
                <p className="text-sm text-blue-100">Up to</p>
                <p className="text-3xl font-bold text-white">10%</p>
                <p className="text-sm text-blue-100">Discount on Services</p>
              </div>
              <div className="text-left">
                <p className="text-sm text-blue-100">Up to</p>
                <p className="text-3xl font-bold text-white">14%</p>
                <p className="text-sm text-blue-100">Growth in Efficiency</p>
              </div>
            </div>
          </div>

          {/* Right Hero Image */}
{/* Right Hero Image */}
<div className="flex-1 flex justify-center items-center">
  <div className="relative flex-1 flex justify-center items-center">
    <div className="absolute -bottom-[570px] z-10">
      <img
        src={heroImage}
        alt="Hero Visual"
        className="w-full min-w-[750px] object-contain drop-shadow-2xl"
      />
    </div>
  </div>
</div>

        </div>
      </div>

      {/* Services Grid */}
      <section className="bg-white text-primary py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Services We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {detailedCards.map((card, i) => (
              <DetailedServiceCard
                key={i}
                icon={card.icon}
                title={card.title}
                description={card.description}
                link={card.link}
              />
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
