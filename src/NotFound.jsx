// src/pages/NotFound.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import Layout from "./components/shared/Layout";

function NotFound() {
  const navigate = useNavigate();

  const headerContent = (
    <button
      onClick={() => navigate(-1)}
      className="text-gray-500 hover:text-gray-700"
    >
      <AiOutlineLeft className="mr-1" />
    </button>
  );

  const mainContent = (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-4xl font-bold text-gray-700">404</h1>
      <p className="text-gray-500">This page could not be found.</p>
    </div>
  );

  return (
    <Layout
      header={headerContent}
      main={mainContent}
    />
  );
}

export default NotFound;
