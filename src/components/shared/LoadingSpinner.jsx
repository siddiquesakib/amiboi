import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-16 h-16 border-4 border-gray-300 border-t-[#615550] rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
