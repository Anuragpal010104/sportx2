"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const sports = [
    { name: "Football", href: "/sports/football" },
    { name: "Basketball", href: "/sports/basketball" },
    { name: "Tennis", href: "/sports/tennis" },
    { name: "Soccer", href: "/sports/soccer" },
  ];

  return (
    <nav className="bg-white shadow-lg p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
          SportsHub
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="text-gray-600 hover:text-blue-600 text-2xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Sports Links */}
          <div className="flex space-x-6">
            {sports.map((sport) => (
              <Link
                key={sport.name}
                href={sport.href}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {sport.name}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link
              href="/auth/login"
              className="px-6 py-2  text-blue-500 rounded-full hover:bg-blue-700 hover:text-white hover:shadow-md transition-all duration-200"
            >
              Login
            </Link>
            <Link
              href="/auth/signup"
              className="px-6 py-2 text-blue-500 rounded-full hover:bg-blue-700 hover:text-white hover:shadow-md transition-all duration-200"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-white shadow-lg p-6 transition-all duration-300`}
      >
        {/* Sports Links for Mobile */}
        <div className="flex flex-col space-y-4">
          {sports.map((sport) => (
            <Link
              key={sport.name}
              href={sport.href}
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {sport.name}
            </Link>
          ))}
        </div>

        {/* Auth Buttons for Mobile */}
        <div className="mt-6 space-y-4">
          <Link
            href="/auth/login"
            className="block w-full text-center px-4 py-2  text-blue-500 rounded-full hover:bg-blue-700  hover:text-white hover:shadow-md transition-all duration-200"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
          <Link
            href="/auth/signup"
            className="block w-full text-center px-4 py-2  text-blue-500 rounded-full hover:bg-blue-700  hover:text-white hover:shadow-md transition-all duration-200"
            onClick={() => setIsOpen(false)}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}