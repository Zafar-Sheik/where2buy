"use client";
import { useRouter } from "next/navigation";
import { FiArrowRight, FiPlus, FiShoppingCart } from "react-icons/fi";

export default function SpazaDashboardPage() {
  const router = useRouter();

  const mockData = {
    shopName: "Sipho's Spaza",
    nearbyWholesalers: 5,
    totalOrdersThisWeek: 12,
    pendingItems: 3,
    shoppingList: [
      { name: "Maize Meal 10kg", quantity: 2 },
      { name: "Baked Beans (410g)", quantity: 6 },
      { name: "Sunlight Soap", quantity: 4 },
    ],
  };

  return (
    <div className="min-h-screen text-black bg-gray-50 pt-16 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-blue-600">
              Where2Buy Africa
            </h1>
            <p className="text-2xl font-semibold text-gray-800 mt-2">
              Welcome back, {mockData.shopName} 👋
            </p>
          </div>
          <button
            onClick={() => router.push("/demo/spaza/list")}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center">
            <FiShoppingCart className="mr-2" />
            Manage Shopping List
          </button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Wholesalers Nearby</p>
                <p className="text-3xl font-bold text-blue-600 mt-2">
                  {mockData.nearbyWholesalers}
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <FiPlus className="text-blue-600 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Weekly Orders</p>
                <p className="text-3xl font-bold text-green-600 mt-2">
                  {mockData.totalOrdersThisWeek}
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <FiArrowRight className="text-green-600 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending Items</p>
                <p className="text-3xl font-bold text-red-600 mt-2">
                  {mockData.pendingItems}
                </p>
              </div>
              <div className="bg-red-100 p-3 rounded-lg">
                <FiShoppingCart className="text-red-600 text-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Shopping List Preview */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Quick Shopping List</h2>
            <button
              onClick={() => router.push("/demo/spaza/list")}
              className="text-blue-600 hover:text-blue-700 flex items-center">
              View All <FiArrowRight className="ml-2" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockData.shoppingList.map((item, i) => (
              <div
                key={i}
                className="border rounded-lg p-4 hover:bg-gray-50 transition">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{item.name}</span>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                    x{item.quantity}
                  </span>
                </div>
                <button
                  onClick={() => router.push("/demo/spaza/order")}
                  className="mt-3 w-full text-sm bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200">
                  Reorder Now
                </button>
              </div>
            ))}
            <div className="border-2 border-dashed rounded-lg p-4 flex items-center justify-center hover:bg-gray-50 cursor-pointer">
              <button
                onClick={() => router.push("/demo/spaza/list")}
                className="text-gray-600 flex items-center">
                <FiPlus className="mr-2" />
                Add Items
              </button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-600 text-white rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Need Supplies Fast?</h3>
            <p className="mb-6">
              Order from nearby wholesalers with same-day delivery
            </p>
            <button
              onClick={() => router.push("/demo/spaza/wholesalers")}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 flex items-center">
              Browse Wholesalers <FiArrowRight className="ml-2" />
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">Recent Orders</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">ORD-20240406-001</p>
                  <p className="text-sm text-gray-600">5 items • Processing</p>
                </div>
                <FiArrowRight className="text-gray-400 cursor-pointer hover:text-blue-600" />
              </div>
              {/* Add more recent orders here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
