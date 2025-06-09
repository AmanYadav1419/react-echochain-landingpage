import React from "react";
import { motion } from "framer-motion";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { SiGithub, SiLinkedin } from "react-icons/si";

const team = [
    {
        name: "Aman Yadav",
        role: "Blockchain + Full Stack Developer",
        img: "https://randomuser.me/api/portraits/men/32.jpg",
        desc: "Passionate about decentralized tech and building scalable apps.",
        socials: {
            github: "https://github.com/amanyadavdev",
            linkedin: "https://linkedin.com/in/amanyadavdev",
        },
    },
    {
        name: "Shejal",
        role: "Frontend Developer",
        img: "https://randomuser.me/api/portraits/women/44.jpg",
        desc: "Designs intuitive and beautiful user experiences.",
        socials: {
            github: "https://github.com/shejal",
            linkedin: "https://linkedin.com/in/shejal",
        },
    },
    {
        name: "Unnati",
        role: "Frontend Developer",
        img: "https://randomuser.me/api/portraits/women/68.jpg",
        desc: "Loves crafting interactive and responsive interfaces.",
        socials: {
            github: "https://github.com/unnati",
            linkedin: "https://linkedin.com/in/unnati",
        },
    },
    {
        name: "Sanuli",
        role: "Frontend Developer",
        img: "https://randomuser.me/api/portraits/women/65.jpg",
        desc: "Frontend enthusiast with a knack for clean code.",
        socials: {
            github: "https://github.com/sanuli",
            linkedin: "https://linkedin.com/in/sanuli",
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
                        <div className="flex flex-col gap-2 items-center">
                            <a
                                href={member.socials.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white text-sm underline transition-colors"
                            >
                                GitHub: {member.socials.github}
                            </a>
                            <a
                                href={member.socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-400 text-sm underline transition-colors"
                            >
                                LinkedIn: {member.socials.linkedin}
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Team;