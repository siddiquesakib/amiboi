import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center">
        <div className="stats-card max-w-2xl mx-auto p-12">
          {/* 404 Number */}
          <h1 className="stats-number text-8xl mb-4">404</h1>

          {/* Error Message */}
          <h2 className="card-title text-3xl mb-4">Page Not Found</h2>

          <p className="text-lg mb-8 text-gray-600">
            Oops! The page you're looking for doesn't exist. It might have been
            moved or deleted.
          </p>

          {/* Book Icon (using emoji) */}
          <div className="text-6xl mb-8">📚</div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/">
              <button className="btn-primary px-8">Go to Home</button>
            </Link>
            <Link href="/browse-books">
              <button className="btn-secondary px-8">Browse Books</button>
            </Link>
          </div>

          {/* Additional Links */}
          <div className="mt-8 pt-8 border-t border-gray-300">
            <p className="stats-label mb-4">Quick Links</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/login" className="navbar-link">
                Login
              </Link>
              <span className="text-gray-400">|</span>
              <Link href="/register" className="navbar-link">
                Register
              </Link>
              <span className="text-gray-400">|</span>
              <Link href="/tutorials" className="navbar-link">
                Tutorials
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
