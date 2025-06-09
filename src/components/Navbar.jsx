import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black bg-opacity-60 backdrop-blur-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <a href="#hero" className="text-white hover:text-blue-400 transition-colors">
        EchoChain
        </a>
        </h1>
      <ul className="hidden md:flex gap-6">
        <li>
          <a href="#about" className="hover:text-blue-400">
            About
          </a>
        </li>
        <li>
          <a href="#features" className="hover:text-blue-400">
            Features
          </a>
        </li>
        <li>
          <a href="#team" className="hover:text-blue-400">
            Team
          </a>
        </li>
        <li>
          <a href="#footer" className="hover:text-blue-400">
            Contact
          </a>
        </li>
      </ul>
      {/* <button className="bg-slate-800 text-white px-4 py-2 rounded-full border border-black hover:bg-blue-600 transition-all">
        Get Started
      </button> */}
      <button className="shadow-[inset_0_0_0_2px_#616467] text-white px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200 text-sm sm:text-base md:text-lg">
        <a
          href="https://echo-chain-next-js-m22x.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Started
        </a>
      </button>
    </nav>
  );
};

export default Navbar;