import React from 'react';
import Navbar from '../../components/Navbar';
import gstHero from '../../assets/gsthero.png';
import client1 from '../../assets/client1.png'; // your logo file
import client2 from '../../assets/client2.png';          // your logo file
// Individual GST service card image imports
import gstReg from '../../assets/gst-registration.png';
import gstReturn from '../../assets/gst-registration.png';
import gstCancel from '../../assets/gst-registration.png';
import gstModify from '../../assets/gst-registration.png';
import gstNil from '../../assets/gst-registration.png';
import gstAnnual from '../../assets/gst-registration.png';
import gstLUT from '../../assets/gst-registration.png';
import gstEWay from '../../assets/gst-registration.png';
import { FaRegFileAlt, FaCog, FaRegClipboard } from 'react-icons/fa';

const GSTPage = () => {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[35vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${gstHero})` }}
      >
        {/* You can optionally add text overlay */}
      </section>

      {/* Client Logos */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-lg text-gray-600 font-medium uppercase tracking-wide mb-4">Trusted by</h3>
          <div className="flex flex-wrap justify-center items-center gap-10">
            <img src={client1} alt="Client 1" className="h-12 object-contain" />
            <img src={client2} alt="Client 2" className="h-12 object-contain" />
          </div>
        </div>
      </section>
      {/* GST Services Card Grid */}
      <section className="px-6 py-20 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">GST Services</h2>
          <p className="text-center text-blue-500 font-medium mb-12">Explore our wide range of GST solutions</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'GST Registration', image: gstReg, desc: 'Apply for GSTIN from any state with ease.' },
              { title: 'GST Return Filing', image: gstReturn, desc: 'Expert-assisted online GST return filing.' },
              { title: 'GST Surrender/Cancel', image: gstCancel, desc: 'Cancel your GST registration online.' },
              { title: 'GST Modification Update', image: gstModify, desc: 'Update or amend GST registration easily.' },
              { title: 'GST NIL Return Filing', image: gstNil, desc: 'File NIL returns quickly and on time.' },
              { title: 'GSTR-9 Annual Filing', image: gstAnnual, desc: 'Guided support to file annual GSTR-9.' },
              { title: 'GST LUT Filing', image: gstLUT, desc: 'File LUT for export businesses and approvals.' },
              { title: 'GST E-WayBills', image: gstEWay, desc: 'Generate E-Way Bills with 360° assistance.' },
            ].map((card, index) => (
              <div key={index} className="bg-blue-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition">
                <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{card.title}</h3>
                  <p className="text-sm text-gray-700 mb-3">{card.desc}</p>
                  <a href="/contact" className="text-blue-600 font-semibold text-sm hover:underline flex items-center gap-1">
                    Click Here <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Service Cards */}
      <section className="bg-white py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaRegFileAlt className="text-blue-600 text-3xl mb-2" />,
              title: 'Fast Registration',
              description: 'Quick and guided online GST registration to get your GSTIN with ease.',
            },
            {
              icon: <FaCog className="text-blue-600 text-3xl mb-2" />,
              title: 'Filing & Modifications',
              description: 'Timely GST return filings and amendments for GST updates or cancellations.',
            },
            {
              icon: <FaRegClipboard className="text-blue-600 text-3xl mb-2" />,
              title: 'Expert Support',
              description: 'Get help from certified experts to manage your compliance seamlessly.',
            },
          ].map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition text-center"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h4>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GST Info Section */}
      <section className="px-6 py-20 lg:px-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

          {/* Left Column: Detailed Info */}
          <div className="space-y-10">
            <p className="text-gray-700">
              Register under India’s GST system and gain legal tax compliance for your business.
              Whether you're a service provider, seller, or new business, we help you stay compliant and stress-free.
            </p>

            <div>
              <h2 className="text-2xl font-bold text-blue-800 mb-2">Who Needs It?</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Businesses with turnover above threshold</li>
                <li>Interstate sellers and service providers</li>
                <li>E-commerce operators</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-800 mb-2">Documents Required</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>PAN & Aadhaar</li>
                <li>Business proof</li>
                <li>Bank details</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-800 mb-2">Steps Involved</h2>
              <ol className="list-decimal pl-6 text-gray-700 space-y-1">
                <li>Online application submission</li>
                <li>Verification by GST officer</li>
                <li>GSTIN issuance</li>
              </ol>
            </div>

            <a
              href="/contact"
              className="inline-block bg-primary text-white px-6 py-2 rounded-full hover:bg-blue-800 transition"
            >
              Register Now
            </a>
          </div>

          {/* Right Column is now empty since cards moved up */}
        </div>
      </section>
    </div>
  );
};

export default GSTPage;
