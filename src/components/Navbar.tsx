"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl text-black font-bold">
              Mahmoud Abd Elaziz
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                href="/"
                className="text-black hover:text-blue-600 px-3 py-2"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-black hover:text-blue-600 px-3 py-2"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="text-black hover:text-blue-600 px-3 py-2"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="text-black hover:text-blue-600 px-3 py-2"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
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
              className="block text-slate-800 hover:text-blue-600 px-3 py-2"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-slate-800 hover:text-blue-600 px-3 py-2"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="block text-slate-800 hover:text-blue-600 px-3 py-2"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="block text-slate-800 hover:text-blue-600 px-3 py-2"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}