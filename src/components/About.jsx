import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section id="about" className="py-16 px-4 max-w-4xl mx-auto text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}>
      <h2 className="text-3xl font-bold mb-6">About the Platform</h2>
      <p className="text-gray-400">
        We empower artists by removing middlemen, offering direct revenue through smart contracts,
        NFT music drops, and DAO governance. Fans support artists transparently and globally.
      </p>
    </motion.section>
  );
};

export default About;
