// src/App.jsx
import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ header, main }) {

  const [activeTab, setActiveTab] = useState("chat");

  // Function to handle tab click
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="bg-gray-100 h-screen w-full flex justify-center items-center">
      <div className="bg-white w-full max-w-md h-screen fixed overflow-hidden shadow-lg flex flex-col">
        <Header>{header}</Header>

        <main className="flex-grow p-4 overflow-y-auto">
          {main}
        </main>

        {/* Footer Bottom Navigation */}
        <Footer activeTab={activeTab} onTabClick={handleTabClick} />
      </div>
    </div>
  );
}

export default Layout;
