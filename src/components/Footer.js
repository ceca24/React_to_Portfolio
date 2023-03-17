import React from "react";
import { FaGithub, FaLinkedin, FaStackoverflow } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <ul className="grid grid-cols-3 gap-4">
          <li className="flex items-center">
            <FaGithub size={20} style={{ color: "#fff", marginRight: "0.5rem" }} />
            <a href="https://github.com/ceca24" className="text-white"><strong>GitHub:</strong>ceca24</a>
          </li>
          <li className="flex items-center">
            <FaLinkedin size={20} style={{ color: "#fff", marginRight: "0.5rem" }} />
            <a href="https://www.linkedin.com/in/ceca24/" className="text-white"><strong>Linkedin:</strong>ceca24</a>
          </li>
          <li className="flex items-center">
            <FaStackoverflow size={20} style={{ color: "#fff", marginRight: "0.5rem" }} />
            <a href="https://stackoverflow.com/users/21334484/cesar" className="text-white"><strong>Stackoverflow:</strong>cesar</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
