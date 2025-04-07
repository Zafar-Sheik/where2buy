"use client";
import {
  FaHandshake,
  FaChartLine,
  FaUsers,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function MissionPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 py-24 md:py-32 text-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-orange-700">
              Building Africa&apos;s Retail Future
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Empowering communities through intelligent commerce solutions
            </p>
          </div>
        </div>
      </section>

      {/* Core Mission Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-orange-600 font-bold uppercase tracking-wide">
                Our Why
              </span>
              <h2 className="text-4xl font-bold text-gray-900">
                Revolutionizing Local Commerce
              </h2>
              <p className="text-gray-600 text-lg">
                We&apos;re creating an ecosystem where local businesses thrive
                through technology-driven solutions and community empowerment.
              </p>
            </div>

            <div className="grid text-black sm:grid-cols-2 gap-8">
              {[
                {
                  icon: FaHandshake,
                  title: "20k+ Partnerships",
                  text: "With local businesses & wholesalers",
                },
                {
                  icon: FaChartLine,
                  title: "35% Avg. Savings",
                  text: "For spaza shops using our platform",
                },
                {
                  icon: FaUsers,
                  title: "Community First",
                  text: "Designed for local needs",
                },
                {
                  icon: FaMapMarkerAlt,
                  title: "Nationwide Reach",
                  text: "Serving all major regions",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 bg-white border border-orange-50 rounded-xl hover:shadow-lg transition">
                  <item.icon className="text-3xl text-orange-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8 bg-orange-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900">
              Our Strategic Pillars
            </h3>
            <div className="text-gray-800 space-y-6">
              {[
                {
                  title: "Empowerment Through Technology",
                  content:
                    "Democratizing access to market intelligence tools previously only available to large corporations.",
                },
                {
                  title: "Community Ecosystem",
                  content:
                    "Building networks that connect local businesses with suppliers and customers.",
                },
                {
                  title: "Sustainable Growth",
                  content:
                    "Creating solutions that help businesses scale responsibly while maintaining local character.",
                },
              ].map((pillar, i) => (
                <div
                  key={i}
                  className="p-6 bg-white rounded-xl border border-orange-100">
                  <div className="text-orange-600 font-bold mb-2">0{i + 1}</div>
                  <h4 className="text-lg font-semibold mb-2">{pillar.title}</h4>
                  <p className="text-gray-600">{pillar.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Story Section */}
      <section className="bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">
                Our Aim - Real Impact, Measurable Results
              </h2>
              <p className="text-xl opacity-90">
                See how we&apos;re transforming local commerce across Africa
              </p>
              <div className="text-orange-800 grid grid-cols-3 gap-8">
                {[
                  { value: "92%", label: "Satisfaction Rate" },
                  { value: "R45M+", label: "Monthly Savings" },
                  { value: "150+", label: "Communities Served" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="text-center p-4 bg-white bg-opacity-10 rounded-xl">
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-sm opacity-90">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl aspect-video flex items-center justify-center">
              {/* Replace with actual video/image */}
              <span className="text-gray-500">Impact Story Video</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="bg-orange-50 rounded-2xl p-12 text-center space-y-8">
          <h2 className="text-4xl font-bold text-gray-900">
            Join the Revolution
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Whether you&apos;e a spaza shop owner, wholesaler, or community
            leader - together we can build stronger local economies.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="bg-orange-600 text-white px-8 py-4 rounded-xl hover:bg-orange-700 transition-all">
              Partner With Us
            </button>
            <button className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-xl hover:bg-orange-50 transition-all">
              View Impact Report
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
