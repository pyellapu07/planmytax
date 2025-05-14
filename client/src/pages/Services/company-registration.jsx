import React from 'react';

const CompanyRegistration = () => {
  return (
    <section className="bg-white text-primary py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Company Registration</h2>
        <p className="mb-6">
          Legally register your company in India and get started with limited liability and corporate identity.
        </p>

        <h3 className="text-xl font-semibold mb-2">Who Needs It?</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Entrepreneurs, startups, and businesses</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Documents Required</h3>
        <ul className="list-disc list-inside mb-6">
          <li>ID and address proof of all directors</li>
          <li>Proof of office address</li>
          <li>Digital Signature (DSC)</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Steps Involved</h3>
        <ol className="list-decimal list-inside mb-6">
          <li>DSC & DIN Application</li>
          <li>Name Reservation</li>
          <li>MOA/AOA Filing</li>
          <li>Incorporation Certificate</li>
        </ol>

        <p className="mb-6">
          <strong>Estimated Time:</strong> 7–15 days<br />
          <strong>Cost:</strong> ₹6,000+
        </p>

        <a
          href="/contact"
          className="inline-block bg-primary text-white px-6 py-2 rounded-full hover:bg-blue-800 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default CompanyRegistration;
