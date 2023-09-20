import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          404 Not Found
        </h1>
        <p className="text-gray-600 mb-4">
          The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-full transition duration-300 ease-in-out"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
