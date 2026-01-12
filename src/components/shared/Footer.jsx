import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="navbar mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">📚</span>
              <span className="text-xl font-bold">BookWorm</span>
            </div>
            <p className="text-sm text-gray-600">
              Your ultimate destination for discovering, tracking, and enjoying
              books. Join our community of passionate readers today.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/browse-books" className="navbar-link text-sm">
                  Browse Books
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="navbar-link text-sm">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="/my-library" className="navbar-link text-sm">
                  My Library
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="navbar-link text-sm">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="navbar-link text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="navbar-link text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="navbar-link text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/support" className="navbar-link text-sm">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="navbar-link text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="navbar-link text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="navbar-link text-sm">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/guidelines" className="navbar-link text-sm">
                  Community Guidelines
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © {currentYear} BookWorm. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-link text-sm hover:scale-110 transition-transform"
                aria-label="Facebook"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-link text-sm hover:scale-110 transition-transform"
                aria-label="Twitter"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-link text-sm hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-link text-sm hover:scale-110 transition-transform"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
