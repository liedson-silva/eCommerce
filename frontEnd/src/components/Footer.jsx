import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto py-5 flex flex-col items-center gap-1">
        <p>© TODOS OS DIREITOS RESERVADOS | LIEDSON SILVA</p>
        <div className="flex items-center gap-4 justify-center text-2xl">
          <a href="" className="hover:text-secondary-100">
            <FaGithub />
          </a>
          <a href="" className="hover:text-secondary-100">
            <FaLinkedin />
          </a>
          <a href="" className="hover:text-secondary-100">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
