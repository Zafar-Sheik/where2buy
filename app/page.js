"use client";
import {
  FaCheckCircle,
  FaTruck,
  FaMapMarkerAlt,
  FaChartLine,
} from "react-icons/fa";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-20 bg-white text-gray-800">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-orange-100 to-amber-100">
        <div className="max-w-7xl mx-auto px-4 py-24 md:py-32">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-orange-700 leading-tight">
              Revolutionizing Retail in
              <br className="hidden md:block" />{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">
                Africa
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Empowering local economies through real-time market intelligence
              and seamless procurement solutions.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/contact"
                className="rounded-xl bg-orange-600 px-8 py-4 text-white text-lg hover:bg-orange-700 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                Get Started
              </Link>

              <Link
                href="/demo/spaza"
                className="rounded-xl border-2 border-orange-600 px-8 py-4 text-orange-700 text-lg hover:bg-orange-100 transition-all">
                Interact With Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: FaCheckCircle,
              title: "Real-time Pricing",
              text: "Instant cross-market comparisons",
            },
            {
              icon: FaTruck,
              title: "Smart Procurement",
              text: "Automated order management",
            },
            {
              icon: FaMapMarkerAlt,
              title: "Location Analytics",
              text: "Geo-targeted market insights",
            },
            {
              icon: FaChartLine,
              title: "Data Intelligence",
              text: "AI-powered business forecasts",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-orange-200 transition-all group hover:shadow-xl">
              <feature.icon className="text-4xl text-orange-700 mb-6 transition-transform group-hover:scale-110" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-orange-600 rounded-2xl p-12 text-center text-white space-y-8 shadow-xl">
          <h2 className="text-4xl font-bold">
            Powering Africa&apos;s Retail Revolution
          </h2>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            We are building the digital infrastructure to connect local
            businesses, optimize supply chains, and drive economic growth across
            the continent.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white bg-opacity-10 p-6 rounded-xl">
              <h3 className="text-2xl text-orange-800 font-bold mb-3">15k+</h3>
              <p className="text-black opacity-90">
                Local Businesses Empowered
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-xl">
              <h3 className="text-2xl text-orange-800 font-bold mb-3">
                R250M+
              </h3>
              <p className="text-black opacity-90">Annual Transaction Volume</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-xl">
              <h3 className="text-2xl text-orange-800  font-bold mb-3">92%</h3>
              <p className="text-black opacity-90">Cost Savings Reported</p>
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW SECTION */}
      <section className="max-w-7xl mx-auto px-4 space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-gray-900">
            Transform Your Business
          </h2>
          <p className="text-gray-700 text-xl">
            Seamless integration for every market participant
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-orange-700 font-bold">Spaza Shops</span>
              <h3 className="text-3xl font-bold">Smart Inventory Management</h3>
              <p className="text-gray-700 text-lg">
                Automated restocking alerts, price optimization, and direct
                wholesaler integration.
              </p>
            </div>
            <div className="grid gap-6">
              {[
                "Real-time stock tracking",
                "AI-powered demand forecasting",
                "Automated price matching",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <FaCheckCircle className="text-orange-600 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-100 rounded-2xl p-8">
            <div className="aspect-video bg-white rounded-xl flex items-center justify-center text-gray-400">
              <img src="/demo.png" alt="Interactive Demo" />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-gray-100 rounded-2xl p-8 order-last lg:order-first">
            <div className="aspect-video bg-white rounded-xl flex items-center justify-center text-gray-400">
              <img src="/dashboard.png" alt="Interactive Dashboard" />
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-orange-700 font-bold">Wholesalers</span>
              <h3 className="text-3xl font-bold">
                Market Expansion Made Simple
              </h3>
              <p className="text-gray-700 text-lg">
                Reach new customers, optimize pricing, and streamline logistics.
              </p>
            </div>
            <div className="grid gap-6">
              {[
                "Demand analytics",
                "Automated order processing",
                "Smart route optimization",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <FaCheckCircle className="text-orange-600 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="bg-gray-50 rounded-2xl p-12 text-center space-y-8 shadow-md">
          <h2 className="text-4xl font-bold text-gray-900">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-700 text-xl max-w-2xl mx-auto">
            Join hundreds of successful retailers and wholesalers already
            growing with Where2Buy.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="bg-orange-600 text-white px-8 py-4 rounded-xl hover:bg-orange-700 transition-all">
              Start Free Trial
            </button>
            <div className="md:border-l md:border-gray-300"></div>
            <div className="text-left">
              <p className="text-gray-600">Need help? Contact our team</p>
              <a
                href="mailto:sammalinge@icloud.com"
                className="text-orange-700 font-semibold hover:underline">
                sammalinge@icloud.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
