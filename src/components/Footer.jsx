import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 py-8 text-center">
      <div className="flex justify-center gap-6 mb-4">
        <a href="#" className="text-blue-400 hover:underline">Privacy</a>
        <a href="#" className="text-blue-400 hover:underline">Terms</a>
        <a href="#" className="text-blue-400 hover:underline">Contact</a>
      </div>
      <p className="text-gray-500 text-sm">© 2025 EchoChain | Built By G27 💙</p>
    </footer>
  );
};

export default Footer;
