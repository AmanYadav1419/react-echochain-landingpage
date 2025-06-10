import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 py-8 text-center">
      <div className="flex justify-center gap-6 mb-4">
        <a href="#about" className="text-blue-400 hover:text-white hover:underline transition-all duration-300">
          About
        </a>
        <a href="#features" className="text-blue-400 hover:text-white hover:underline transition-all duration-300">
          Features
        </a>
        <a href="#team" className="text-blue-400 hover:text-white hover:underline transition-all duration-300">
          Team
        </a>
        <a href="#hero" className="text-blue-400 hover:text-white hover:underline transition-all duration-300">
          Header
        </a>
      </div>
      <p className="text-gray-500 text-sm hover:text-gray-700">
        <a
          href="https://aman-yadav1419-portfolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 hover:underline transition-all duration-300"
        >
          © 2025 EchoChain | Built By G27 💙
        </a>
      </p>
    </footer>
  );
};

export default Footer;
