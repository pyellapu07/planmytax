import React from "react";
import Navbar from "../components/Navbar";

import DetailedServiceCard from "../components/DetailedServiceCard";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import heroImage from "../assets/hero section image.png";
import { FaBalanceScale, FaBuilding, FaFileInvoice, FaGlobe, FaUtensils, FaAward } from "react-icons/fa";


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
    link: "/services/gst"
  },
  {
    icon: <FaUtensils />,
    title: "FSSAI Registration",
    description: "Get your food safety certificate and serve your customers with confidence.",
    link: "/services/gst"
  },
  {
    icon: <FaAward />,
    title: "ISO Registration",
    description: "Show you're global-standard ready with ISO certification support.",
    link: "/services/gst"
  }
];

const Home = () => {
  return (
    <div className="min-h-screen text-white">
{/* Hero Section */}
<div className="relative bg-gradient-to-r from-blue-900 via-indigo-700 to-blue-600 bg-size-400 animate-gradient">
  <Navbar />
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 min-h-[80vh] text-center lg:text-left">

    
    {/* Left Text */}
    <div className="flex-1 text-center lg:text-left mx-auto">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
        Legal. <br /> Compliant. <br /> Stress-Free.
      </h1>
      <button className="border border-white px-6 py-2 rounded-full font-medium mb-6 hover:bg-white hover:text-primary transition mx-auto lg:mx-0">
        B2B Services
      </button>
      <p className="text-blue-100 text-lg sm:text-xl max-w-md leading-relaxed mb-6">
        Helping individuals and businesses get legally registered, tax-compliant, and future-ready.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center sm:items-start">
        <div className="text-left">
          <p className="text-sm text-blue-100">Up to</p>
          <p className="text-2xl font-bold text-white">10%</p>
          <p className="text-sm text-blue-100">Discount on Services</p>
        </div>
        <div className="text-left">
          <p className="text-sm text-blue-100">Up to</p>
          <p className="text-2xl font-bold text-white">14%</p>
          <p className="text-sm text-blue-100">Growth in Efficiency</p>
        </div>
      </div>
    </div>

    {/* Right Image */}
    <div className="flex-1 flex justify-center items-center">
      <img
        src={heroImage}
        alt="Hero Visual"
        className="mx-auto w-72 sm:w-96 md:w-[450px] lg:w-[600px] xl:w-[750px] max-w-[550px] h-auto object-contain drop-shadow-2xl"
      />
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
