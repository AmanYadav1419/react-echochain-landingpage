import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-black via-blue-900 to-black px-4 pt-36">
      <motion.h1 className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
        Revolutionize Music Sharing
      </motion.h1>
      <motion.p className="text-gray-300 text-lg mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}>
        Built on Blockchain. Powered by Community.
      </motion.p>
      <div className="flex flex-wrap gap-4 justify-center">
        <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-xl font-semibold">
            Explore Marketplace
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full border border-black">Join DAO</button>
      </div>
    </section>
  );
};

export default Hero;
