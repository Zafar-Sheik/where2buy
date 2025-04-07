"use client";
import { useState } from "react";
import {
  FiSearch,
  FiFilter,
  FiMapPin,
  FiTruck,
  FiStar,
  FiCheckCircle,
} from "react-icons/fi";

export default function BrowseWholesalers() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState({
    category: [],
    minOrder: null,
    deliveryTime: null,
    rating: null,
  });

  // Dummy data
  const wholesalers = [
    {
      id: 1,
      name: "Metro Wholesalers",
      rating: 4.8,
      products: 1250,
      minOrder: 500,
      deliveryTime: "2h",
      location: "3.2km away",
      categories: ["Staples", "Cleaning", "Beverages"],
      featuredProducts: ["Maize Meal 10kg", "Sunlight Soap", "Coca-Cola 2L"],
      verified: true,
    },
    {
      id: 2,
      name: "Truworth Foods",
      rating: 4.6,
      products: 850,
      minOrder: 300,
      deliveryTime: "4h",
      location: "5.1km away",
      categories: ["Canned Goods", "Snacks"],
      featuredProducts: ["Baked Beans 410g", "Potato Chips"],
      verified: false,
    },
    {
      id: 3,
      name: "Fresh Farm Distributors",
      rating: 4.9,
      products: 2000,
      minOrder: 1000,
      deliveryTime: "6h",
      location: "8.5km away",
      categories: ["Produce", "Dairy"],
      featuredProducts: ["Apples (1kg)", "Milk 2L"],
      verified: true,
    },
  ];

  // Filter logic
  const filteredWholesalers = wholesalers.filter((wholesaler) => {
    const matchesSearch = wholesaler.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesRating = activeFilters.rating
      ? wholesaler.rating >= activeFilters.rating
      : true;
    const matchesMinOrder = activeFilters.minOrder
      ? wholesaler.minOrder <= activeFilters.minOrder
      : true;
    const matchesDelivery = activeFilters.deliveryTime
      ? wholesaler.deliveryTime <= activeFilters.deliveryTime
      : true;

    return matchesSearch && matchesRating && matchesMinOrder && matchesDelivery;
  });

  return (
    <div className="min-h-screen text-black bg-gray-50 pt-16 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-blue-600 mb-2">
            Browse Wholesalers
          </h1>
          <p className="text-gray-600">
            Connect with trusted suppliers in your area
          </p>
        </div>

        {/* Search and Filters */}
        <div className="lg:flex gap-8 mb-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 mb-6 lg:mb-0">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-lg font-semibold mb-4 flex items-center">
                <FiFilter className="mr-2" /> Filters
              </h2>

              <div className="space-y-6">
                {/* Minimum Order Filter */}
                <div>
                  <h3 className="font-medium mb-2">Minimum Order</h3>
                  <select
                    className="w-full p-2 border rounded-lg"
                    onChange={(e) =>
                      setActiveFilters({
                        ...activeFilters,
                        minOrder: e.target.value,
                      })
                    }>
                    <option value="">Any</option>
                    <option value="300">R300+</option>
                    <option value="500">R500+</option>
                    <option value="1000">R1000+</option>
                  </select>
                </div>

                {/* Delivery Time Filter */}
                <div>
                  <h3 className="font-medium mb-2">Max Delivery Time</h3>
                  <select
                    className="w-full p-2 border rounded-lg"
                    onChange={(e) =>
                      setActiveFilters({
                        ...activeFilters,
                        deliveryTime: e.target.value,
                      })
                    }>
                    <option value="">Any</option>
                    <option value="2">2 hours</option>
                    <option value="4">4 hours</option>
                    <option value="6">6 hours</option>
                  </select>
                </div>

                {/* Rating Filter */}
                <div>
                  <h3 className="font-medium mb-2">Minimum Rating</h3>
                  <div className="flex space-x-2">
                    {[4, 4.5, 5].map((rating) => (
                      <button
                        key={rating}
                        onClick={() =>
                          setActiveFilters({ ...activeFilters, rating })
                        }
                        className={`flex items-center px-3 py-1 rounded-full ${
                          activeFilters.rating === rating
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}>
                        <FiStar className="mr-1" /> {rating}+
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search Bar */}
            <div className="relative mb-6">
              <FiSearch className="absolute left-4 top-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search wholesalers by name or location..."
                className="w-full pl-12 pr-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Wholesaler Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
              {filteredWholesalers.map((wholesaler) => (
                <div
                  key={wholesaler.id}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center mb-2">
                        <h3 className="text-xl font-semibold mr-3">
                          {wholesaler.name}
                        </h3>
                        {wholesaler.verified && (
                          <FiCheckCircle
                            className="text-green-500"
                            title="Verified Supplier"
                          />
                        )}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <FiMapPin className="mr-2" />
                        <span>{wholesaler.location}</span>
                      </div>
                    </div>
                    <span className="flex items-center bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                      <FiStar className="mr-1" /> {wholesaler.rating}
                    </span>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-600">
                        {wholesaler.products}+
                      </p>
                      <p className="text-sm text-gray-600">Products</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-600">
                        R{wholesaler.minOrder}
                      </p>
                      <p className="text-sm text-gray-600">Min Order</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-600">
                        {wholesaler.deliveryTime}
                      </p>
                      <p className="text-sm text-gray-600">Avg Delivery</p>
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Main Categories</h4>
                    <div className="flex flex-wrap gap-2">
                      {wholesaler.categories.map((category) => (
                        <span
                          key={category}
                          className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Featured Products */}
                  <div>
                    <h4 className="font-medium mb-2">Featured Products</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {wholesaler.featuredProducts.map((product) => (
                        <div
                          key={product}
                          className="flex items-center text-gray-600">
                          <span className="mr-2">•</span>
                          {product}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 flex justify-end gap-4">
                    <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                      View Profile
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      Contact Supplier
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
