"use client";
import { useState } from "react";
import { FiMail, FiPhone, FiSend, FiMapPin } from "react-icons/fi";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send formData to your backend
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 py-24 md:py-32 text-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-orange-700">
              Let's Connect
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Whether you're a spaza shop owner, wholesaler, or investor - we'd
              love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">Our Offices</h2>
              <p className="text-gray-600 text-lg">
                Reach out to our team for partnerships, support, or media
                inquiries.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-6 p-6 bg-white border border-gray-100 rounded-xl hover:shadow-lg transition">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <FiMapPin className="text-orange-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl text-black font-semibold mb-2">
                    Headquarters
                  </h3>
                  <p className="text-gray-600">1 South Beach Road, Umdloti</p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 bg-white border border-gray-100 rounded-xl hover:shadow-lg transition">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <FiMail className="text-orange-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl text-black font-semibold mb-2">
                    Email Us
                  </h3>
                  <a
                    href="mailto:sammalinge@icloud.com"
                    className="text-orange-600 hover:underline">
                    sammalinge@icloud.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 bg-white border border-gray-100 rounded-xl hover:shadow-lg transition">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <FiPhone className="text-orange-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl text-black font-semibold mb-2">
                    Call Us
                  </h3>
                  <p className="text-gray-600">+27 67 416 5681</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-8">
            {submitted ? (
              <div className="text-center p-8">
                <div className="bg-green-100 text-green-600 p-4 rounded-full inline-block mb-6">
                  <FiSend className="text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-600">
                  Thank you for reaching out. Our team will get back to you
                  within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a message
                </h2>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white px-6 py-4 rounded-lg hover:bg-orange-700 transition flex items-center justify-center">
                  <FiSend className="mr-2" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="bg-gray-100 rounded-2xl aspect-video flex items-center justify-center">
          {/* Replace with actual map component */}
          <div className="text-center p-8">
            <FiMapPin className="text-4xl text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Location</h3>
            <p className="text-gray-600">Interactive map coming soon</p>
          </div>
        </div>
      </section>
    </div>
  );
}
