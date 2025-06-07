import React from "react";
import { motion } from "framer-motion";

const team = [
  { name: "Aman Yadav", role: "Blockchain + Full Stack Developer" },
  { name: "Shejal", role: "UI/UX Designer" },
  { name: "Unnati", role: "Frontend Developer" },
  { name: "Sanuli", role: "Frontend Developer" },
];

const Team = () => {
  return (
    <section id="team" className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Meet the Team</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {team.map((member, idx) => (
          <motion.div key={idx} className="bg-gray-800 p-6 rounded-xl text-center hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}>
            <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto mb-4"></div>
            <h4 className="text-lg font-semibold">{member.name}</h4>
            <p className="text-gray-400">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Team;
