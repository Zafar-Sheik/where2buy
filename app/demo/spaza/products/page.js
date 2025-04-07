"use client";
import { useState } from "react";
import { FiSearch, FiArrowRight, FiStar } from "react-icons/fi";

export default function CompareProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Dummy data
  const specialProducts = [
    {
      id: 1,
      name: "Maize Meal 10kg",
      price: 119.99,
      wholesaler: "Metro Wholesalers",
      delivery: "Same Day Delivery",
      rating: 4.8,
      image: "/placeholder-maize.jpg",
      special: "15% OFF",
    },
    {
      id: 2,
      name: "Sunlight Soap 1kg",
      price: 8.99,
      wholesaler: "Truworth Foods",
      delivery: "Next Day Delivery",
      rating: 4.5,
      image: "/placeholder-soap.jpg",
      special: "Lowest Price",
    },
    {
      id: 3,
      name: "Baked Beans 410g",
      price: 13.99,
      wholesaler: "FoodLovers Market",
      delivery: "2-Hour Express",
      rating: 4.7,
      image: "/placeholder-beans.jpg",
      special: "Bulk Deal",
    },
  ];

  const wholesalers = [
    {
      id: 1,
      name: "Metro Wholesalers",
      rating: 4.8,
      products: 1200,
      minOrder: 500,
      deliveryTime: "2h",
      location: "3.2km away",
    },
    {
      id: 2,
      name: "Truworth Foods",
      rating: 4.6,
      products: 850,
      minOrder: 300,
      deliveryTime: "4h",
      location: "5.1km away",
    },
    {
      id: 3,
      name: "FoodLovers Market",
      rating: 4.7,
      products: 1500,
      minOrder: 200,
      deliveryTime: "1.5h",
      location: "2.8km away",
    },
  ];

  const filteredWholesalers = wholesalers.filter((wholesaler) =>
    wholesaler.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen text-black bg-gray-50 pt-16 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-blue-600 mb-2">
            Compare Market Prices
          </h1>
          <p className="text-gray-600">
            Find the best deals from trusted wholesalers
          </p>
        </div>

        {/* Special Offers Carousel */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Today&apos;s Hot Deals</h2>
            <button className="flex items-center text-blue-600 hover:text-blue-700">
              View All <FiArrowRight className="ml-2" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specialProducts.map((product, index) => (
              <div
                key={product.id}
                className="relative bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                {index === 0 && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                    Best Deal 🔥
                  </div>
                )}
                <div className="h-48 bg-gray-100 rounded-t-xl"></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md text-sm">
                      {product.special}
                    </span>
                  </div>
                  <div className="flex items-center mb-4">
                    <FiStar className="text-yellow-400 mr-1" />
                    <span className="font-medium">{product.rating}</span>
                    <span className="text-gray-500 ml-2">
                      {product.wholesaler}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-bold text-blue-600">
                        R{product.price}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {product.delivery}
                      </p>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wholesaler Search */}
        <div className="mb-8">
          <div className="relative">
            <FiSearch className="absolute left-4 top-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search wholesalers..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Wholesaler List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWholesalers.map((wholesaler) => (
            <div
              key={wholesaler.id}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{wholesaler.name}</h3>
                  <p className="text-gray-500">{wholesaler.location}</p>
                </div>
                <span className="flex items-center bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                  <FiStar className="mr-1" /> {wholesaler.rating}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-gray-500 text-sm">Min Order</p>
                  <p className="font-medium">R{wholesaler.minOrder}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Avg Delivery</p>
                  <p className="font-medium">{wholesaler.deliveryTime}</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-gray-600">{wholesaler.products}+ products</p>
                <button className="flex items-center text-blue-600 hover:text-blue-700">
                  View Products <FiArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
