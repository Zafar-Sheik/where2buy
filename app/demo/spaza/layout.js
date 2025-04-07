"use client";
import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  Home,
  Search,
  List,
  ShoppingCart,
  Truck,
  BarChart,
} from "lucide-react";
import { usePathname } from "next/navigation";

export default function SpazaDemoLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", path: "/demo/spaza", icon: Home },
    {
      name: "Browse Wholesalers",
      path: "/demo/spaza/wholesalers",
      icon: Search,
    },
    { name: "Compare Products", path: "/demo/spaza/products", icon: BarChart },
    { name: "Shopping List", path: "/demo/spaza/list", icon: List },
    { name: "Place Order", path: "/demo/spaza/order", icon: ShoppingCart },
    { name: "Track Order", path: "/demo/spaza/track", icon: Truck },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Demo-Specific Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white border-r border-gray-100 z-30
          w-64 transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0`}>
        <div className="flex flex-col h-full">
          {/* Demo Header */}
          <div className="px-6 py-5 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <ShoppingCart className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-gray-900">
                Demo Mode
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-6 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-lg
                    ${
                      isActive
                        ? "bg-blue-50 text-blue-600 font-medium"
                        : "text-gray-600 hover:bg-gray-50"
                    }
                    transition-colors duration-200`}
                  onClick={() => setSidebarOpen(false)}>
                  <item.icon
                    className={`h-5 w-5 ${
                      isActive ? "text-blue-600" : "text-gray-400"
                    }`}
                  />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Demo Footer */}
          <div className="px-4 py-3 border-t border-gray-100">
            <p className="text-xs text-gray-500">
              Demo session expires in 24 hours
            </p>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content Area */}
      <div className="flex-1 md:ml-64">
        {/* Demo Top Bar */}
        <header className="sticky top-0 bg-white border-b border-gray-100 z-10">
          <div className="flex items-center justify-between px-6 h-14">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100">
              {sidebarOpen ? (
                <X className="h-5 w-5 text-gray-700" />
              ) : (
                <Menu className="h-5 w-5 text-gray-700" />
              )}
            </button>
            <div className="flex-1" />
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Sipho's Spaza</span>
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600 font-medium">SS</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6 bg-gray-50 min-h-[calc(100vh-56px)]">
          <div className="max-w-6xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}
