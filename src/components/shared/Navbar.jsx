"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Change based on auth state
  const [isAdmin, setIsAdmin] = useState(false); // Change based on user role

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">📚</span>
            <span className="text-xl font-bold navbar-link">BookWorm</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/browse-books" className="navbar-link">
              Browse Books
            </Link>
            <Link href="/tutorials" className="navbar-link">
              Tutorials
            </Link>

            {isLoggedIn ? (
              <>
                <Link href="/my-library" className="navbar-link">
                  My Library
                </Link>
                <Link href="/dashboard" className="navbar-link">
                  Dashboard
                </Link>
                {isAdmin && (
                  <Link href="/admin/dashboard" className="navbar-link">
                    Admin Panel
                  </Link>
                )}
                <button className="btn-secondary px-4 py-2">Logout</button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <button className="btn-secondary px-4 py-2">Login</button>
                </Link>
                <Link href="/register">
                  <button className="btn-primary px-4 py-2">Sign Up</button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-gray-200 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-300">
            <div className="flex flex-col gap-4">
              <Link href="/browse-books" className="navbar-link py-2">
                Browse Books
              </Link>
              <Link href="/tutorials" className="navbar-link py-2">
                Tutorials
              </Link>

              {isLoggedIn ? (
                <>
                  <Link href="/my-library" className="navbar-link py-2">
                    My Library
                  </Link>
                  <Link href="/dashboard" className="navbar-link py-2">
                    Dashboard
                  </Link>
                  {isAdmin && (
                    <Link href="/admin/dashboard" className="navbar-link py-2">
                      Admin Panel
                    </Link>
                  )}
                  <button className="btn-secondary px-4 py-2 w-full">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login">
                    <button className="btn-secondary px-4 py-2 w-full">
                      Login
                    </button>
                  </Link>
                  <Link href="/register">
                    <button className="btn-primary px-4 py-2 w-full">
                      Sign Up
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
