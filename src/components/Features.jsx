import React from "react";
import { motion } from "framer-motion";

const features = [
  { title: "🎧 Direct-to-Fan", desc: "Artists publish music directly to their fans." },
  { title: "💸 Smart Contracts", desc: "Automated, secure royalty distribution." },
  { title: "🧑‍🤝‍🧑 DAO Governance", desc: "Fans vote on platform upgrades and artist support." },
  { title: "🖼️ NFT Music Drops", desc: "Own, collect, and trade rare music NFTs." },
  { title: "🔐 Transparent Royalties", desc: "View royalty flow directly on blockchain." },
  { title: "🌍 Global Access", desc: "Decentralized access to music worldwide." },
];

const Features = () => {
  return (
    <section id="features" className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Platform Features</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((item, idx) => (
          <motion.div key={idx} className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
