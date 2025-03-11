"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-500 shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          MyBrand
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="text-white text-2xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop & Mobile Menu */}
        <div
          className={`absolute top-16 left-0 w-full bg-white shadow-md p-4 md:p-0 md:bg-transparent md:static md:flex md:items-center md:gap-6 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <Link
            href="/auth/login"
            className="block md:inline px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </Link>
          <Link
            href="/auth/signup"
            className="block md:inline px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
