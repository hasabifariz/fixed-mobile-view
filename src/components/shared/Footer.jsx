// src/components/Footer.jsx
import React from "react";
import { AiOutlineMessage, AiOutlineBell, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

function Footer({ activeTab, onTabClick }) {
  const tabs = [
    { name: "Chat", icon: <AiOutlineMessage size={24} />, id: "chat", path: "/" },
    { name: "Updates", icon: <AiOutlineBell size={24} />, id: "updates", path: "/updates" },
    { name: "Profile", icon: <AiOutlineUser size={24} />, id: "profile", path: "/profile" },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 p-2 flex justify-around">
      {tabs.map((tab) => (
        <Link
          to={tab.path}
          key={tab.id}
          className={`flex flex-col items-center text-gray-500 hover:text-primary focus:text-primary ${activeTab === tab.id ? "text-primary" : ""
            }`}
          onClick={() => onTabClick(tab.id)} // Optional: Update active tab on click
        >
          {tab.icon}
          <span className="text-xs">{tab.name}</span>
        </Link>
      ))}
    </footer>
  );
}

export default Footer;
