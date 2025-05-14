import React from 'react';
import Navbar from '../../components/Navbar';
import trademarkHeader from '../../assets/trademarkheader.jpg';

const Trademark = () => {
  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
    "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi", "Jammu & Kashmir", "Ladakh"
  ];

  return (
    <div className="bg-white text-primary">
      <Navbar />

      {/* Header Image Section */}
      <div className="relative">
        <img
          src={trademarkHeader}
          alt="Trademark Registration Header"
          className="w-full h-[35vh] object-cover"
        />
      </div>

      {/* Content Section */}
      <section className="px-6 py-24 lg:px-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">
          {/* Left: Main Info */}
          <div className="lg:col-span-2 space-y-12">
            <p className="text-lg text-gray-700 max-w-3xl">
              Secure your brand identity by registering your trademark, ensuring exclusive rights to your brand name, logo, or slogan. Whether you're a startup or a growing business, trademarks are a powerful legal asset to protect your ideas.
            </p>

            {/* Info Blocks */}
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h2 className="text-2xl font-bold text-blue-800 mb-2">Who Needs It?</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Startups launching new products or services</li>
                  <li>Small and medium businesses expanding branding</li>
                  <li>Creators or designers safeguarding logos or slogans</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-800 mb-2">Documents Required</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li><strong>PAN & Aadhaar:</strong> Individual or authorized representative</li>
                  <li><strong>Logo or Brand Name:</strong> Clearly visible in digital format</li>
                  <li><strong>Business Proof or Power of Attorney:</strong> For filing purposes</li>
                </ul>
              </div>

              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-blue-800 mb-2">Steps Involved</h2>
                <ol className="list-decimal pl-6 text-gray-700 space-y-1">
                  <li><strong>Trademark Search:</strong> Check for existing similar marks</li>
                  <li><strong>Application Filing:</strong> Submit online through IP portal</li>
                  <li><strong>Examination & Publication:</strong> By the Registrar of Trademarks</li>
                  <li><strong>Certificate Issuance:</strong> Receive final approval and certificate</li>
                </ol>
              </div>

              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-blue-800 mb-2">Why It Matters</h2>
                <p className="text-gray-700">
                  Trademarks protect your identity, prevent legal disputes, and build trust. A registered trademark boosts credibility, unlocks licensing opportunities, and enables enforcement against infringers in court.
                </p>
              </div>



              <div>
                <h2 className="text-2xl font-bold text-blue-800 mb-2">Who Can Obtain a Trademark?</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Individual</li>
                  <li>Joint Owners</li>
                  <li>Limited Liability Partnership</li>
                  <li>Trust or Society</li>
                  <li>Proprietorship Firm</li>
                  <li>Partnership Firm</li>
                </ul>
              </div>

              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-blue-800 mb-2">What's the difference between ™ and ®?</h2>
                <p className="text-gray-700">
                  When there is a TM on the brand name or logo, it indicates that the trademark application has been filed and is under process. Once registration is completed, TM gets replaced by ® and is valid for 10 years.
                </p>
              </div>

              <div className="md:col-span-2 text-sm text-gray-700">
                <p className="font-semibold text-black mb-1">Avail 50% discount on Trademark Registration</p>

              </div>
            </div>
          </div>

          {/* Contact Form on Right */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-200 h-fit">
            <h3 className="text-2xl font-semibold mb-1 text-gray-900">
              Need Consultation on Trademark Registration?
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Fill up the form to get the consultation
            </p>
            <form
              className="space-y-4"
              action="https://formspree.io/f/your-form-id"
              method="POST"
            >
              <input
                type="text"
                name="name"
                placeholder="Full name"
                required
                className="w-full border-b border-gray-300 bg-transparent px-1 py-2 focus:outline-none focus:border-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full border-b border-gray-300 bg-transparent px-1 py-2 focus:outline-none focus:border-blue-500"
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile number"
                pattern="[0-9]{10}"
                required
                className="w-full border-b border-gray-300 bg-transparent px-1 py-2 focus:outline-none focus:border-blue-500"
              />
              <select
                name="state"
                required
                className="w-full border-b border-gray-300 bg-transparent px-1 py-2 focus:outline-none focus:border-blue-500"
              >
                <option value="">Select your State</option>
                {states.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
              <textarea
                name="message"
                rows="4"
                placeholder="Message"
                className="w-full border-b border-gray-300 bg-transparent px-1 py-2 focus:outline-none focus:border-blue-500"
              ></textarea>
              <button
                type="submit"
                className="bg-black text-white rounded-full px-6 py-2 text-sm hover:bg-gray-800 transition"
              >
                → Send a message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trademark;