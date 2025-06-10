import React from "react";
import { motion } from "framer-motion";
import Sanuli from "../assets/sanuli.jpg"; 
import Aman from "../assets/aman.jpg";
import Shejal from "../assets/shejal.jpg";
import Unnati from "../assets/unnati.jpg";

const team = [
    {
        name: "Aman Yadav",
        role: "Blockchain + Full Stack Developer",
        img: Aman,
        desc: "Passionate about decentralized tech and building scalable apps.",
        socials: {
            github: "https://github.com/AmanYadav1419",
            linkedin: "https://linkedin.com/in/aman-yadav2003",
            twitter: "https://x.com/Aman_Yadav1419",
            portfolio: "https://aman-yadav1419-portfolio.vercel.app/",
        },
    },
    {
        name: "Shejal Thalkar",
        role: "Frontend Developer",
        img: Shejal,
        desc: "Designs intuitive and beautiful user experiences.",
        socials: {
            github: "https://github.com/Shejalthalkar",
            linkedin: "https://linkedin.com/in/shejal-thalkar-157743258",
        },
    },
    {
        name: "Unnati Warule",
        role: "Frontend Developer",
        img: Unnati,
        desc: "Loves crafting interactive and responsive interfaces.",
        socials: {
            github: "https://github.com/Unnati052003",
            linkedin: "https://linkedin.com/in/unnati-warule-31b37924b",
        },
    },
    {
        name: "Sanuli Vanjari",
        role: "Frontend Developer",
        img: Sanuli,
        desc: "Frontend enthusiast with a knack for clean code.",
        socials: {
            github: "https://github.com/sanuli2003",
            linkedin: "https://linkedin.com/in/sanuli-v-a29a81249",
            twitter: "https://x.com/SanuliVanjari",
        },
    },
];

const cardVariants = {
    offscreen: { opacity: 0, y: 40, scale: 0.95 },
    onscreen: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", bounce: 0.3, duration: 0.7 },
    },
};

// Helper to get initials for social names
const getInitial = (name) => name.charAt(0).toUpperCase();

const Team = () => {
    return (
        <section id="team" className="py-16 px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Meet the Team</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                {team.map((member, idx) => (
                    <motion.div
                        key={idx}
                        className="bg-gradient-to-br from-gray-800 via-gray-900 to-black p-6 rounded-2xl text-center shadow-lg hover:shadow-2xl transition-shadow group"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={cardVariants}
                        whileHover={{ scale: 1.07, rotate: -2 }}
                    >
                        <motion.img
                            src={member.img}
                            alt={member.name}
                            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500 shadow-lg group-hover:scale-110 transition-transform"
                            whileHover={{ scale: 1.15, rotate: 6 }}
                        />
                        <h4 className="text-lg font-semibold text-white">{member.name}</h4>
                        <p className="text-blue-400 mb-2">{member.role}</p>
                        <p className="text-gray-300 text-sm mb-4">{member.desc}</p>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {Object.entries(member.socials).map(([key, value]) =>
                                value ? (
                                    <a
                                        key={key}
                                        href={value}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 bg-gray-700 hover:bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold transition-colors"
                                    >
                                        <span className="bg-blue-400 text-black rounded-full w-6 h-6 flex items-center justify-center font-bold mr-1">
                                            {getInitial(key)}
                                        </span>
                                        {key.charAt(0).toUpperCase() + key.slice(1)}
                                    </a>
                                ) : null
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Team;