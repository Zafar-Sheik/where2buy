"use client";
import { useState } from "react";

export default function Page() {
  const [currentStep, setCurrentStep] = useState(1);
  const [cart, setCart] = useState([]);
  const [selectedWholesaler, setSelectedWholesaler] = useState(null);

  // Dummy data
  const wholesalers = [
    { id: 1, name: "Metro Wholesalers", distance: "2.5km" },
    { id: 2, name: "Truworth Foods", distance: "4.1km" },
  ];

  const products = [
    { id: 1, name: "Maize Meal 10kg", price: 125.99, category: "Staples" },
    {
      id: 2,
      name: "Baked Beans (410g)",
      price: 15.5,
      category: "Canned Goods",
    },
    { id: 3, name: "Sunlight Soap", price: 9.99, category: "Cleaning" },
  ];

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      return existing
        ? prev.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleOrder = () => {
    setCurrentStep(4); // Show confirmation
    // Reset after 3 seconds
    setTimeout(() => {
      setCurrentStep(1);
      setCart([]);
    }, 3000);
  };

  return (
    <div className="min-h-screen text-black bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <p className="text-gray-600 mt-2">Spaza Shop Management Demo</p>
        </header>

        {/* Progress Steps */}
        <div className="flex mb-8">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex-1">
              <div
                className={`h-2 ${
                  currentStep >= step ? "bg-blue-600" : "bg-gray-200"
                }`}></div>
              <p className="mt-2 text-sm text-gray-600">Step {step}</p>
            </div>
          ))}
        </div>

        {/* Step 1: Select Wholesaler */}
        {currentStep === 1 && (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Select Wholesaler</h2>
            <div className="grid gap-4">
              {wholesalers.map((wholesaler) => (
                <div
                  key={wholesaler.id}
                  onClick={() => {
                    setSelectedWholesaler(wholesaler);
                    setCurrentStep(2);
                  }}
                  className="p-4 border rounded-lg cursor-pointer hover:border-blue-400 transition">
                  <h3 className="font-semibold">{wholesaler.name}</h3>
                  <p className="text-gray-600">{wholesaler.distance} away</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Browse Products */}
        {currentStep === 2 && (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between mb-6">
              <h2 className="text-2xl font-semibold">
                Products from {selectedWholesaler?.name}
              </h2>
              <button
                onClick={() => setCurrentStep(3)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Review Order (
                {cart.reduce((sum, item) => sum + item.quantity, 0)})
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {products.map((product) => (
                <div key={product.id} className="border rounded-lg p-4">
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-gray-600">R{product.price.toFixed(2)}</p>
                  <button
                    onClick={() => addToCart(product)}
                    className="mt-2 w-full bg-green-100 text-green-700 px-3 py-1 rounded hover:bg-green-200">
                    Add to List
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Review Order */}
        {currentStep === 3 && (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Review Order</h2>

            <div className="mb-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b py-3">
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-gray-600">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-semibold">
                    R{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleOrder}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Confirm Order (R
                {cart
                  .reduce((sum, item) => sum + item.price * item.quantity, 0)
                  .toFixed(2)}
                )
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Confirmation */}
        {currentStep === 4 && (
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-green-600 text-6xl mb-4">✓</div>
            <h2 className="text-2xl font-semibold mb-4">
              Order Placed Successfully!
            </h2>
            <p className="text-gray-600">
              Your order has been sent to {selectedWholesaler?.name}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
