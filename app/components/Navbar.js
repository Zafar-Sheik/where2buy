"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-orange-600">
              Where2Buy Africa
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link
                href="/"
                className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link
                href="/mission"
                className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium">
                Mission
              </Link>
              <Link
                href="/demo/spaza"
                className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium">
                App Demo
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-700 hover:text-orange-600 focus:outline-none focus:text-orange-600">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              onClick={toggleMenu}
              className="block text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link
              href="/mission"
              onClick={toggleMenu}
              className="block text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-base font-medium">
              Mission
            </Link>
            <Link
              href="/demo/spaza"
              className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium">
              App Demo
            </Link>
            <Link
              href="/contact"
              onClick={toggleMenu}
              className="block text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
