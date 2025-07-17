"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ThemeToggle } from "@/app/theme-toggle";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaWhatsapp, FaTelegram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import TechMarquee from "@/components/TechMarquee";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Page() {
  const [mounted, setMounted] = useState(false);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleProjectExpand = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  if (!mounted) return null;

  const projects = [
    {
      title: "AgriBloom",
      emoji: "🌾",
      description:
        "Agricultural intelligence platform with comprehensive crop information and management tools.",
      details: [
        "A fully authenticated agricultural intelligence platform built using Next.js 15.",
        "Users can search any crop to view complete information.",
        "Includes data on water, sunlight, flowering/harvest timing, and shelf life.",
        "Insect/pest management with crop-wise solutions.",
        "Nutritional and health benefits of various crops included.",
        "Repository of fertilizers, poisonous plants, medicinal trees, soil types, and farming methods.",
        "Secure user authentication with email verification and JWT tokens.",
        "Designed to simplify decision-making for farmers using structured knowledge.",
      ],
      technologies: ["Next.js", "MongoDB", "Tailwind CSS", "JWT Auth"],
      sourceLink: "https://github.com/waseem-akram-123/AgriBloom",
      visitLink: "/",
    },
    {
      title: "Music Studio",
      emoji: "🎧",
      description:
        "Premium UI music-focused experience built with the Aceternity UI system.",
      details: [
        "Music Studio is a premium UI project developed with Next.js 15.",
        "Built using the high-end Aceternity UI design system for a visually rich experience.",
        "The interface supports both light and dark modes for seamless theme switching.",
        "Focused primarily on frontend design with minimal backend functionality.",
        "Showcases advanced UI principles, including responsive layouts and smooth transitions.",
        "Demonstrates expertise in modern UI development and theme control.",
        "Designed to offer a clean, polished, and immersive music-focused user experience.",
      ],
      technologies: ["Next.js", "Tailwind CSS", "Aceternity UI"],
      sourceLink: "https://github.com/waseem-akram-123/music-studio",
      visitLink: "https://music-studio-chi.vercel.app/",
    },
    {
      title: "Blogging Platform",
      emoji: "📝",
      description:
        "A full-stack blogging app for content creation, sharing, and interaction.",
      details: [
        "A fully authenticated blogging platform built using Node.js, Express.js, and MongoDB.",
        "Users can sign up, log in, and create their own blogs.",
        "Blogs are stored in MongoDB and displayed dynamically.",
        "Other authenticated users can comment on any blog post.",
        "Implements secure user authentication using sessions or JWT (as per your setup).",
        "Backend handles routing, blog storage, and comment management efficiently.",
        "Designed with a clean and user-friendly interface for reading and writing content.",
        "Focuses on content creation, interaction, and community engagement.",
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT Auth"],
      sourceLink: "https://github.com/waseem-akram-123/Nodejs-Blogging",
      visitLink: "https://nodejs-blogging.onrender.com",
    },
    {
      title: "URL Shortener",
      emoji: "🔗",
      description:
        "Compact, secure URL shortening service with user authentication.",
      details: [
        "A fully functional URL shortener application built using Node.js, Express.js, and MongoDB.",
        "Implements secure user authentication using JWT.",
        "Authenticated users can shorten long URLs into compact, shareable links.",
        "Each shortened URL redirects to the original full URL when accessed.",
        "Tracks and stores URL data in MongoDB for efficient management.",
        "Users can view and manage their previously shortened URLs.",
        "Designed with a simple and intuitive interface for ease of use.",
        "Focused on utility, speed, and secure access to user-specific URL data.",
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT Auth"],
      sourceLink: "https://github.com/waseem-akram-123/Nodejs-URL-SHORTNER",
      visitLink: "https://nodejs-url-shortner-tqrl.onrender.com",
    },
    {
      title: "Restaurant Manager",
      emoji: "🍽️",
      description:
        "JWT-secured restaurant system for managing menu, orders, and roles.",
      details: [
        "A restaurant management system built using Node.js, Express.js, and MongoDB.",
        "Implements JWT-based user authentication and role-based access control.",
        "Only authorized managers can add, update, or delete dishes.",
        "All users can view available dishes and place orders.",
        "Order data is stored securely in MongoDB.",
        "Integrated with Twilio to send order confirmation messages to users.",
        "Clean and responsive UI for browsing the menu and ordering food.",
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT Auth", "Twilio"],
      sourceLink: "https://github.com/waseem-akram-123/NodeJS-Restaurant",
      visitLink: "https://nodejs-restaurant-1.onrender.com",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Navigation */}
      <header className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => scrollTo("home")}
                className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent"
              >
                Waseem Akram
              </button>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollTo("home")}
                className="text-base font-medium hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollTo("about")}
                className="text-base font-medium hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollTo("skills")}
                className="text-base font-medium hover:text-primary transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollTo("projects")}
                className="text-base font-medium hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="text-base font-medium hover:text-primary transition-colors"
              >
                Contact
              </button>
              <ThemeToggle />
            </nav>
            <div className="md:hidden flex items-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center"
        style={{ minHeight: "60vh" }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="relative w-40 h-40 mx-auto mb-8">
            <Image
              src="/waseem.png"
              alt="Waseem Akram"
              fill
              className="rounded-full object-cover border-4 border-primary shadow-lg"
              priority
            />
          </div>
          <motion.h1
            variants={fadeIn}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          >
            Waseem Akram
          </motion.h1>
          <motion.p
            variants={fadeIn}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Full-stack developer passionate about building responsive,
            accessible, and performant web applications with modern
            technologies.
          </motion.p>
          <motion.div
            variants={fadeIn}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button onClick={() => scrollTo("projects")} size="lg">
              View My Work
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollTo("contact")}
              size="lg"
            >
              Contact
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-4">
                I&apos;m a passionate full-stack developer... web technologies.
                My journey in software development began with a curiosity for
                building things, which has evolved into a professional career
                creating robust web applications.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                I specialize in JavaScript ecosystems, particularly Next.js and
                React for frontend development, and Node.js with Express for
                backend services. I&apos;m also proficient in database design
                with both SQL and NoSQL solutions.
              </p>
              <p className="text-lg text-muted-foreground">
                When I&apos;m not coding, you can find me contributing to open
                source projects, learning new technologies, or sharing knowledge
                with the developer community.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "Tailwind CSS",
            "Java & DSA",
            "Next.js",
            "Express.js",
            "MongoDB",
            "SQL",
            "Render",
            "Vercel",
            "Git & Github",
          ].map((skill) => (
            <li
              key={skill}
              className="rounded-xl py-4 px-2 font-medium text-sm shadow-md transition-all duration-300 hover:scale-105
          bg-zinc-100 text-zinc-800
          dark:bg-zinc-800 dark:text-white
          hover:bg-blue-400 hover:text-white
          dark:hover:bg-blue-300 dark:hover:text-black"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <TechMarquee />

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
              My <span className="text-primary">Projects</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  transition={{ delay: index * 0.2 }}
                  className="bg-background border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold flex items-center gap-2">
                        {project.title}
                        <span className="text-primary">{project.emoji}</span>
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-secondary px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {expandedProject === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mb-4 overflow-hidden"
                      >
                        <ul className="list-disc pl-5 space-y-2">
                          {project.details.map((detail, i) => (
                            <li
                              key={i}
                              className="text-sm text-muted-foreground"
                            >
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}

                    <div className="flex gap-2 flex-wrap">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleProjectExpand(index)}
                      >
                        {expandedProject === index
                          ? "Show Less"
                          : "View Details"}
                      </Button>

                      <a
                        href={project.visitLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md border border-input bg-primary text-white shadow-sm hover:bg-primary/90 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                      >
                        Visit Project
                        <FiExternalLink className="ml-2 w-3 h-3" />
                      </a>

                      <a
                        href={project.sourceLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground"
                      >
                        Source Code
                        <FiExternalLink className="ml-2 w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
              Get into Touch
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              <a
                href="mailto:waseemakram8660@gmail.com"
                className="flex flex-col items-center p-6 bg-background rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow w-full sm:w-auto"
              >
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <HiOutlineMail className="w-8 h-8 text-primary" />
                </div>
                <span className="font-medium">Email</span>
                <span className="text-muted-foreground text-sm mt-1">
                  waseemakram8660@gmail.com
                </span>
              </a>

              <a
                href="https://wa.me/918660930380"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-background rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow w-full sm:w-auto"
              >
                <div className="bg-green-500/10 p-4 rounded-full mb-4">
                  <FaWhatsapp className="w-8 h-8 text-green-500" />
                </div>
                <span className="font-medium">WhatsApp</span>
                <span className="text-muted-foreground text-sm mt-1">
                  +91 86609 30380
                </span>
              </a>

              <a
                href="https://t.me/dev_waseem"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-background rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow w-full sm:w-auto"
              >
                <div className="bg-blue-500/10 p-4 rounded-full mb-4">
                  <FaTelegram className="w-8 h-8 text-blue-500" />
                </div>
                <span className="font-medium">Telegram</span>
                <span className="text-muted-foreground text-sm mt-1">
                  @dev_waseem
                </span>
              </a>

              <a
                href="https://linkedin.com/in/waseem-akram-wa123/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-background rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow w-full sm:w-auto"
              >
                <div className="bg-blue-600/10 p-4 rounded-full mb-4">
                  <FaLinkedin className="w-8 h-8 text-blue-600" />
                </div>
                <span className="font-medium">LinkedIn</span>
                <span className="text-muted-foreground text-sm mt-1">
                  waseem-akram-wa123
                </span>
              </a>

              <a
                href="https://github.com/waseem-akram-123"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-background rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow w-full sm:w-auto"
              >
                <div className="bg-gray-800/10 p-4 rounded-full mb-4 dark:bg-gray-200/10">
                  <FaGithub className="w-8 h-8 text-gray-800 dark:text-gray-200" />
                </div>
                <span className="font-medium">GitHub</span>
                <span className="text-muted-foreground text-sm mt-1">
                  @waseem-akram-123
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <button
                onClick={() => scrollTo("home")}
                className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent"
              >
                Waseem Akram
              </button>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/waseem-akram-123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#0A66C2] transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5 text-[#0A66C2]" />
              </a>
              <a
                href="https://wa.me/918660930380"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5 text-[#25D366]" />
              </a>
              <a
                href="https://t.me/dev_waseem"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#0088CC] transition-colors"
                aria-label="Telegram"
              >
                <FaTelegram className="w-5 h-5 text-[#0088CC]" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Waseem Akram. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
