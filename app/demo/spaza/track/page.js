"use client";
import { useState } from "react";

export default function TrackOrderPage() {
  const [trackingId, setTrackingId] = useState("");
  const [currentOrder] = useState({
    id: "ORD-20240406-001",
    status: "in-transit",
    items: [
      { name: "Maize Meal 10kg", quantity: 2, price: 125.99 },
      { name: "Baked Beans (410g)", quantity: 5, price: 15.5 },
      { name: "Sunlight Soap", quantity: 10, price: 9.99 },
    ],
    wholesaler: "Metro Wholesalers",
    deliveryAddress: "Sipho's Spaza, 42 Market St, Johannesburg",
    timeline: [
      {
        status: "ordered",
        title: "Order Placed",
        description: "Your order has been received",
        timestamp: "2024-04-06 10:00 AM",
        completed: true,
      },
      {
        status: "confirmed",
        title: "Order Confirmed",
        description: "Wholesaler has confirmed your order",
        timestamp: "2024-04-06 10:30 AM",
        completed: true,
      },
      {
        status: "packed",
        title: "Order Packed",
        description: "Items are being prepared for dispatch",
        timestamp: "2024-04-06 1:15 PM",
        completed: true,
      },
      {
        status: "in-transit",
        title: "Out for Delivery",
        description: "Your order is on the way",
        timestamp: "2024-04-06 2:30 PM",
        completed: true,
      },
      {
        status: "delivered",
        title: "Delivered",
        description: "Order received at your location",
        timestamp: "",
        completed: false,
      },
    ],
  });

  return (
    <div className="min-h-screen text-black bg-gray-50 pt-16 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Tracking Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600">Track Your Order</h1>
          <div className="mt-4 flex gap-4">
            <input
              type="text"
              placeholder="Enter Tracking ID"
              className="p-2 border rounded-lg w-64"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Track
            </button>
          </div>
        </div>

        {/* Order Status Timeline */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-2xl font-semibold mb-6">
            Order Status:{" "}
            <span className="capitalize text-green-600">
              {currentOrder.status}
            </span>
          </h2>

          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200" />
            {currentOrder.timeline.map((step, index) => (
              <div key={step.status} className="flex items-start mb-8">
                <div className="relative z-10">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center 
                    ${
                      step.completed ? "bg-blue-600 text-white" : "bg-gray-200"
                    }`}>
                    {step.completed ? "✓" : index + 1}
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  {step.timestamp && (
                    <p className="text-sm text-gray-500 mt-1">
                      {step.timestamp}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Details */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              {currentOrder.items.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between border-b pb-2">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-gray-600">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-semibold">
                    R{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
              <div className="flex justify-between pt-4">
                <p className="font-semibold">Total</p>
                <p className="font-bold text-blue-600">
                  R
                  {currentOrder.items
                    .reduce((sum, item) => sum + item.price * item.quantity, 0)
                    .toFixed(2)}
                </p>
              </div>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Delivery Information</h2>
            <div className="space-y-4">
              <div>
                <p className="font-medium">Wholesaler</p>
                <p className="text-gray-600">{currentOrder.wholesaler}</p>
              </div>
              <div>
                <p className="font-medium">Delivery Address</p>
                <p className="text-gray-600">{currentOrder.deliveryAddress}</p>
              </div>
              <div className="mt-4 aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Delivery Map Preview</span>
              </div>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-8 bg-blue-50 p-6 rounded-lg text-center">
          <h3 className="text-lg font-semibold mb-2">
            Need Help With Your Order?
          </h3>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
