"use client";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import {
  FiChevronRight,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiExternalLink,
} from "react-icons/fi";

const Portfolio = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const motherboardRef = useRef(null);
  useGSAP(() => {
    gsap.from(motherboardRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 2,
      ease: "power4.out",
    });
  });

  const magnetic = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };

  const tiltVariants = {
    rest: { rotateX: 0, rotateY: 0 },
    hover: {
      rotateX: -5,
      rotateY: 5,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  const projects = [
    {
      title: "DOORS",
      description:
        "Translated DOORS from English to Bosnian, Serbian and Croatian",
      tech: ["6.1B"],
      demo: "https://www.roblox.com/games/6516141723/DOORS",
    },
    {
      title: "Clicker Simulator",
      description: "Translated to Bosnian",
      tech: ["600M"],
      demo: "https://www.roblox.com/games/7560156054/Clicker-Simulator",
    },
    {
      title: "Horrific Housing",
      description: "Translated to Bosnian",
      tech: ["600M"],
      demo: "https://www.roblox.com/games/263761432/Horrific-Housing",
    },
  ];
  return (
    <div className="min-h-screen bg-black text-gray-100 font-mono px-4 py-12 relative overflow-hidden">
      {/* Animated Motherboard Pattern Background */}
      <div ref={motherboardRef} className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-10 animate-pulse-slow" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_48%,_#ff002d20_50%,_transparent_52%)] bg-[size:20px_20px] hover:bg-[size:25px_25px] transition-all duration-1000" />
      </div>

      {/* Main Container */}
      <div className="min-h-screen bg-black text-gray-100 font-mono px-4 py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl mx-auto space-y-12 relative z-10"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="text-6xl font-bold text-red-500 hover:text-gradient-red transition-all duration-500"
            >
              admir_mahmutov
            </motion.h1>

            <motion.div
              {...magnetic}
              className="flex items-center gap-4 text-2xl group"
            >
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: 1, duration: 1.5 }}
              >
                <FiChevronRight className="text-red-500" />
              </motion.div>
              <motion.span className="group-hover:text-red-500 transition-colors">
                Student /
              </motion.span>
              <motion.span
                className="text-red-500 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent"
                animate={{
                  backgroundPositionX: ["0%", "100%"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% auto",
                }}
              >
                Front-End Developer /
              </motion.span>
              <motion.span className="group-hover:text-red-500 transition-colors">
                Translator /
              </motion.span>
              <motion.span
                className="text-red-500 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent"
                animate={{
                  backgroundPositionX: ["0%", "100%"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% auto",
                }}
              >
                ITS
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Quote Section */}
          <motion.div
            variants={itemVariants}
            className="border-l-4 border-red-500 pl-6 py-4 bg-black/50 backdrop-blur-sm"
          >
            <motion.blockquote
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-2xl italic"
            >
              &quot;The only way to do great work is to love what you do.&quot;
            </motion.blockquote>
          </motion.div>

          {/* Technologies Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.h2
              className="text-3xl text-red-500 border-b-2 border-red-500 pb-2"
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
            >
              Technologies
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Next.js",
                "TypeScript",
                "Node.js",
                "Prisma",
                "Tailwind",
                "GSAP",
                "Framer Motion",
                "Figma",
              ].map((tech) => (
                <motion.div
                  key={tech}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, backgroundColor: "#ff002d20" }}
                  className="p-4 border border-red-500 rounded-lg text-center cursor-default"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Projects Section */}
          <motion.h2
            className="text-3xl text-red-500 border-b-2 border-red-500 pb-2"
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
          >
            Notable Work Experience
          </motion.h2>

          <motion.div variants={itemVariants} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <motion.div
                  key={project.title}
                  variants={tiltVariants}
                  initial="rest"
                  whileHover="hover"
                  className="relative p-6 border-2 border-red-500/20 bg-gradient-to-br from-black to-black/50 group overflow-hidden min-h-[270px]"
                >
                  {/* Hover Gradient Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: -100, y: -100 }}
                    whileHover={{ x: 0, y: 0 }}
                  />

                  {/* Project Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Title and Description */}
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-red-500 mb-3">
                        <motion.span
                          className="inline-block pb-1 relative"
                          whileHover={{
                            backgroundSize: "100% 2px",
                          }}
                          style={{
                            backgroundImage:
                              "linear-gradient(to right, #ff002d 0%, #ff002d 100%)",
                            backgroundSize: "0% 2px",
                            backgroundPosition: "0 100%",
                            backgroundRepeat: "no-repeat",
                            transition: "background-size 0.3s ease",
                          }}
                        >
                          {project.title}
                        </motion.span>
                      </h3>
                      <p className="text-gray-300 mb-4 text-sm">
                        {project.description}
                      </p>
                    </div>

                    {/* Bottom Section */}
                    <div className="mt-auto pt-4 border-t border-red-500/20">
                      <div className="flex flex-row justify-between items-center gap-4">
                        {/* Demo Link */}
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          className="flex items-center gap-2 text-red-500 hover:text-red-400 relative flex-shrink-0"
                          whileHover={{ x: 5 }}
                        >
                          <FiExternalLink />
                          <span>Link</span>
                          <motion.div
                            className="absolute -bottom-1 left-0 w-0 h-px bg-red-500"
                            whileHover={{ width: "100%" }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.a>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 items-center">
                          {project.tech.map((tech) => (
                            <motion.span
                              key={tech}
                              whileHover={{
                                scale: 1.05,
                                backgroundColor: "#ff002d20",
                              }}
                              className="px-3 py-1 text-xs border border-red-500/30 cursor-default"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.h2
              className="text-3xl text-red-500 border-b-2 border-red-500 pb-2"
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
            >
              Education
            </motion.h2>

            <motion.div className="space-y-6">
              <div className="pl-4 border-l-4 border-red-500">
                <motion.p className="text-red-500">2024-Present</motion.p>
                <motion.h3 className="text-xl">MSST</motion.h3>
                <motion.p className="text-gray-400">
                  Computer Electrotechnician
                </motion.p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Section */}
          <motion.h2
            className="text-3xl text-red-500"
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
          >
            Get in touch
          </motion.h2>
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 border-2 border-red-500/20 rounded-xl bg-black/50 backdrop-blur-sm">
              {[
                { icon: FiMail, title: "Email", link: "peritopre@gmail.com" },
                {
                  icon: FiGithub,
                  title: "GitHub",
                  link: "https://github.com/nightmae",
                },
                {
                  icon: FiLinkedin,
                  title: "TalentHub",
                  link: "https://create.roblox.com/talent/creators/311742866",
                },
              ].map((contact, i) => (
                <motion.div
                  key={contact.title}
                  {...magnetic}
                  className="p-6 border-2 border-red-500/20 rounded-lg text-center relative overflow-hidden"
                  whileHover={{
                    boxShadow: "0 0 30px #ff002d30",
                  }}
                >
                  {/* Ripple Effect */}
                  <motion.div
                    className="absolute inset-0 bg-red-500/10 opacity-0 group-hover:opacity-100 rounded-lg"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />

                  <h3 className="text-lg text-red-500 mb-2">{contact.title}</h3>
                  <a
                    href={contact.link}
                    target="_blank"
                    className="text-gray-300 hover:text-red-500 relative"
                  >
                    <motion.span
                      whileHover={{ letterSpacing: "2px" }}
                      transition={{ duration: 0.3 }}
                    >
                      {contact.link.split("/").pop()}
                    </motion.span>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
