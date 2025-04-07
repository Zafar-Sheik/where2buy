"use client";
import { useState } from "react";
import {
  FiPlus,
  FiTrash2,
  FiCheckCircle,
  FiClock,
  FiShoppingCart,
} from "react-icons/fi";

export default function ShoppingListPage() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Maize Meal 10kg",
      quantity: 5,
      category: "Staples",
      completed: false,
    },
    {
      id: 2,
      name: "Baked Beans (410g)",
      quantity: 12,
      category: "Canned Goods",
      completed: true,
    },
    {
      id: 3,
      name: "Sunlight Soap",
      quantity: 3,
      category: "Cleaning",
      completed: false,
    },
  ]);

  const frequentItems = [
    "Cooking Oil 5L",
    "Rice 5kg",
    "Sugar 2kg",
    "Tea Bags 100pk",
    "Toilet Paper 12pk",
  ];

  const recentOrders = [
    { id: "ORD-001", date: "2024-04-05", items: 8, status: "Delivered" },
    { id: "ORD-002", date: "2024-04-03", items: 5, status: "In Transit" },
    { id: "ORD-003", date: "2024-04-01", items: 10, status: "Processing" },
  ];

  const addItem = () => {
    if (newItem.trim()) {
      setItems([
        ...items,
        {
          id: Date.now(),
          name: newItem.trim(),
          quantity: 1,
          category: "Other",
          completed: false,
        },
      ]);
      setNewItem("");
    }
  };

  const toggleItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen text-black bg-gray-50 pt-16 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-blue-600">Shopping List</h1>
            <p className="text-gray-600 mt-2">
              Manage your pending purchase items
            </p>
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center">
            <FiShoppingCart className="mr-2" /> Place Order (
            {items.filter((i) => !i.completed).length})
          </button>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Shopping List Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              {/* Add Item Input */}
              <div className="flex gap-4 mb-6">
                <input
                  type="text"
                  placeholder="Add new item..."
                  className="flex-1 p-3 border rounded-lg"
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && addItem()}
                />
                <button
                  onClick={addItem}
                  className="bg-green-100 text-green-700 px-6 py-3 rounded-lg hover:bg-green-200 flex items-center">
                  <FiPlus className="mr-2" /> Add Item
                </button>
              </div>

              {/* Items List */}
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className={`flex items-center justify-between p-4 border rounded-lg ${
                      item.completed
                        ? "bg-green-50 border-green-200"
                        : "bg-white"
                    }`}>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => toggleItem(item.id)}
                        className={`p-2 rounded-full ${
                          item.completed
                            ? "text-green-600 bg-green-100"
                            : "text-gray-400 hover:bg-gray-100"
                        }`}>
                        <FiCheckCircle className="text-xl" />
                      </button>
                      <div>
                        <h3
                          className={`font-medium ${
                            item.completed ? "text-gray-500 line-through" : ""
                          }`}>
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md">
                            Qty: {item.quantity}
                          </span>
                          <span className="bg-gray-100 px-2 py-1 rounded-md">
                            {item.category}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => deleteItem(item.id)}
                      className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-100">
                      <FiTrash2 className="text-xl" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions Sidebar */}
          <div className="space-y-8">
            {/* Frequent Items */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Frequent Items</h2>
              <div className="space-y-3">
                {frequentItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => setNewItem(item)}
                    className="w-full text-left p-3 rounded-lg hover:bg-gray-50 flex items-center justify-between">
                    <span>{item}</span>
                    <FiPlus className="text-gray-400" />
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">{order.id}</p>
                      <p className="text-sm text-gray-600">{order.date}</p>
                    </div>
                    <div className="text-right">
                      <span
                        className={`px-2 py-1 rounded-full text-sm ${
                          order.status === "Delivered"
                            ? "bg-green-100 text-green-600"
                            : order.status === "In Transit"
                            ? "bg-blue-100 text-blue-600"
                            : "bg-yellow-100 text-yellow-600"
                        }`}>
                        {order.status}
                      </span>
                      <p className="text-sm text-gray-600 mt-1">
                        {order.items} items
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
