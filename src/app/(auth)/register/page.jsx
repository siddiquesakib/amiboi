import React from "react";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="card w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold card-title mb-2">Create Account</h1>
          <p className="stats-label">Join BookWorm today</p>
        </div>

        <form className="space-y-6">
          {/* Full Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              className="input"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              className="input"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Create a strong password"
              className="input"
              required
            />
          </div>

          {/* Confirm Password Field */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium mb-2"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Re-enter your password"
              className="input"
              required
            />
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-start gap-2">
            <input type="checkbox" className="w-4 h-4 mt-1" required />
            <label className="text-sm">
              I agree to the{" "}
              <Link href="/terms" className="navbar-link">
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="navbar-link">
                Privacy Policy
              </Link>
            </label>
          </div>

          {/* Register Button */}
          <button type="submit" className="btn-primary w-full">
            Create Account
          </button>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or sign up with
              </span>
            </div>
          </div>

          {/* Social Sign Up Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button type="button" className="btn-secondary">
              Google
            </button>
            <button type="button" className="btn-secondary">
              Facebook
            </button>
          </div>
        </form>

        {/* Login Link */}
        <p className="text-center mt-6 text-sm">
          Already have an account?{" "}
          <Link href="/login" className="navbar-link font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
