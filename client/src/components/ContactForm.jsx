import React, { useState } from "react";

const servicesList = ["Trademark", "Company Reg.", "GST", "Import/Export", "FSSAI", "ISO", "Others"];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    services: [],
    message: "",
  });

  const toggleService = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      services: formData.services.join(", "),
    };

    await fetch("https://formspree.io/f/mrbqyzew", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    alert("Form submitted!");
    setFormData({ name: "", email: "", services: [], message: "" });
  };

  return (
    <section className="bg-white text-primary py-20 px-6" id="contact">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Get in Touch</h2>
        <p className="text-center mb-6">
          Have a question or need help? Fill out the form below and we'll get back to you shortly.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold">Name</label>
            <input
              type="text"
              name="name"
              className="w-full border rounded-md px-4 py-2 mt-1"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block font-semibold">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border rounded-md px-4 py-2 mt-1"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
            />
          </div>

          {/* Pills Section placed below Email */}
          <div>
            <label className="block font-semibold mb-1">Service Type</label>
            <div className="flex flex-wrap gap-4">
              {servicesList.map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => toggleService(service)}
                  className={`px-4 py-1 rounded-full border text-sm ${
                    formData.services.includes(service)
                      ? "bg-primary text-white"
                      : "border-primary text-primary"
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-semibold">Message</label>
            <textarea
              name="message"
              rows="4"
              className="w-full border rounded-md px-4 py-2 mt-1"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="How can we help you?"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-primary text-white px-8 py-2 rounded-full font-semibold hover:bg-blue-800 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
