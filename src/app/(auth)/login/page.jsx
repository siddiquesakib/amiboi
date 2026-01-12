import React from "react";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="card w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold card-title mb-2">Welcome Back</h1>
          <p className="stats-label">Login to your BookWorm account</p>
        </div>

        <form className="space-y-6">
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
              placeholder="Enter your password"
              className="input"
              required
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm">Remember me</span>
            </label>
            <Link href="/forgot-password" className="text-sm navbar-link">
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <button type="submit" className="btn-primary w-full">
            Login
          </button>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button type="button" className="btn-secondary">
              Google
            </button>
            <button type="button" className="btn-secondary">
              Facebook
            </button>
          </div>
        </form>

        {/* Sign Up Link */}
        <p className="text-center mt-6 text-sm">
          Don't have an account?{" "}
          <Link href="/register" className="navbar-link font-semibold">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
