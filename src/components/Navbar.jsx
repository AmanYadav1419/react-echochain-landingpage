import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black bg-opacity-60 backdrop-blur-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">EchoChain</h1>
      <ul className="hidden md:flex gap-6">
        <li><a href="#about" className="hover:text-blue-400">About</a></li>
        <li><a href="#features" className="hover:text-blue-400">Features</a></li>
        <li><a href="#team" className="hover:text-blue-400">Team</a></li>
        <li><a href="#footer" className="hover:text-blue-400">Contact</a></li>
      </ul>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-full border border-black hover:bg-blue-600">Connect Wallet</button>
    </nav>
  );
};

export default Navbar;