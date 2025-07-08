"use client"

import { projects } from '@/lib/data/projects'
import { personalData } from '@/lib/data/personal'
import Header from './components/Header';
import Footer from './components/Footer';
import Ballpit from './components/Ballpit';
import TypingAnimation from './components/TypingAnimation';
import SkillBar from './components/SkillBar';
import ScrollProgress from './components/ScrollProgress';
import ThemeToggle from './components/ThemeToggle';
import FloatingNav from './components/FloatingNav';
import ParticleSystem from './components/ParticleSystem';
import ContactForm from './components/ContactForm';
import PerformanceMonitor from './components/PerformanceMonitor';
import TestimonialsSection from './components/TestimonialsSection';
import MobileOptimizations from './components/MobileOptimizations';
import WelcomeToast from './components/WelcomeToast';
import { VscAccount, VscMail, VscArchive } from 'react-icons/vsc';
import { useState } from "react";
import Preloader from "./components/Preloader";
import { AnimatePresence, motion } from "framer-motion";
import SocialMedia from './components/SocialMedia';

import { FaGithub, FaBuilding, FaMicrochip } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.7, ease: [0.42, 0, 0.58, 1] as [number, number, number, number] } 
    }
};



const experiences = [
	{
		role: "Full Stack Developer",
		company: "enigmaatix",
		period: "2023 – Present",
		description:
			"Developing and maintaining modern web applications using the MERN stack, Next.js, and TypeScript. Collaborating with cross-functional teams to deliver scalable, high-performance solutions for diverse client requirements.",
	},
	{
		role: "IoT Developer",
		company: "Personal Projects",
		period: "2022 – Present",
		description:
			"Designing and implementing IoT solutions using Arduino and ESP32 microcontrollers. Creating smart home automation systems, sensor networks, and real-time monitoring applications with wireless connectivity.",
	},
	{
		role: "Frontend Developer Intern",
		company: "Tech Solutions",
		period: "2022 – 2023",
		description:
			"Developed responsive web interfaces using React and modern CSS frameworks. Optimized website performance, implemented user-friendly designs, and collaborated with backend teams for seamless integration.",
	},
	{
		role: "Open Source Contributor",
		company: "GitHub Community",
		period: "2021 – Present",
		description:
			"Actively contributing to open-source projects, focusing on web development tools and IoT libraries. Participating in code reviews, bug fixes, and feature enhancements to support the developer community.",
	},
];

const companyMeta: Record<string, { icon: React.ReactNode; color: string }> = {
  "enigmaatix": {
    icon: <SiMongodb size={48} className="text-green-400" />,
    color: "from-green-900 to-green-700",
  },
  "Personal Projects": {
    icon: <FaMicrochip size={48} className="text-blue-400" />,
    color: "from-blue-900 to-blue-700",
  },
  "Tech Solutions": {
    icon: <FaBuilding size={48} className="text-purple-400" />,
    color: "from-purple-900 to-purple-700",
  },
  "GitHub Community": {
    icon: <FaGithub size={48} className="text-gray-200" />,
    color: "from-gray-800 to-gray-600",
  },
};

export default function Home() {
    const [showPreloader, setShowPreloader] = useState(true);

    return (
        <>
            <ScrollProgress />
            <ThemeToggle />
            <FloatingNav />
            <PerformanceMonitor />
            <MobileOptimizations />
            <WelcomeToast />
            <AnimatePresence>
                {showPreloader && (
                    <Preloader onFinish={() => setShowPreloader(false)} />
                )}
            </AnimatePresence>
            {!showPreloader && (
                <div className="relative min-h-screen bg-black">
                    {/* Particle System Background */}
                    <ParticleSystem />

                    {/* Optional: Subtle gradient overlay */}
                    <div className="pointer-events-none fixed inset-0 z-0 bg-gradient-to-br from-blue-900/20 via-black/40 to-black/60" />

                    <Header />
                    <div className="fixed top-4 right-6 z-50">
                      <SocialMedia />
                    </div>

                    {/* Ballpit background */}
                    <div style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 0,
                        overflow: 'hidden',
                        minHeight: '100vh',
                        width: '100vw',
                        pointerEvents: 'none'
                    }}>
                        <Ballpit
                            count={200}
                            gravity={0.7}
                            friction={0.8}
                            wallBounce={0.95}
                            followCursor={false}
                            style={{ width: '100vw', height: '100vh' }}
                        />
                    </div>

                    <main className="relative z-10 min-h-screen px-2 md:px-8 py-16">
                        {/* Hero Section */}
                        <motion.section
                            id="home"
                            className="flex flex-col md:flex-row items-center justify-center mb-16 gap-8"
                            variants={sectionVariant}
                            initial="hidden"
                            animate="visible"
                        >
                          {/* Profile Picture with Animation */}
                          <motion.div
                            className="flex-shrink-0 mb-6 md:mb-0 md:mr-8"
                            initial={{ opacity: 0, scale: 0.8, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 4.8, type: "spring" }}
                            whileHover={{ scale: 1.08, rotate: -2, boxShadow: "0 8px 32px 0 rgba(0, 123, 255, 0.25)" }}
                          >
                            <img
                              src="/profile.jpeg"
                              alt="Saqlain Kharal"
                              className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-blue-400 shadow-lg"
                            />
                          </motion.div>
                          {/* Hero Content */}
                          <div className="flex flex-col items-center md:items-start">
                            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-center md:text-left tracking-tight text-white drop-shadow-lg">
                                Hi, I'm <span className="text-blue-400">Saqlain Kharal</span>
                            </h1>
                            <div className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left text-blue-300">
                                <TypingAnimation
                                    texts={[
                                        "Full Stack Developer",
                                        "IoT Enthusiast",
                                        "MERN Stack Expert",
                                        "Problem Solver"
                                    ]}
                                />
                            </div>
                            <p className="text-lg md:text-xl text-neutral-300 text-center md:text-left max-w-2xl mb-8">
                                Passionate about creating innovative solutions with modern web technologies and embedded systems.
                            </p>
                            <button
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="inline-flex items-center gap-2 border border-blue-400 text-blue-400 px-8 py-3 rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300 font-semibold text-lg focus:outline-none focus:ring-4 focus:ring-blue-400/40 mt-4"
                            >
                                <VscMail size={22} />
                                Get In Touch
                            </button>
                          </div>
                        </motion.section>

                        {/* About Me Section */}
                        <motion.section
                            id="about"
                            className="max-w-3xl mx-auto mb-16 bg-neutral-900/30 backdrop-blur-sm border border-neutral-800/50 rounded-2xl shadow-xl p-10 transition-all duration-300 hover:shadow-blue-400/20"
                            variants={sectionVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <h2 className="text-3xl font-bold mb-4 text-blue-400 flex items-center gap-2">
                                <VscAccount size={28} /> About Me
                            </h2>
                            <p className="text-neutral-200 leading-relaxed text-lg">
                                I am an Information & Technology student (2021–2025) with a passion for full-stack development and IoT innovation. I specialize in the <span className="font-semibold text-blue-400">MERN stack</span>, <span className="font-semibold text-blue-400">Next.js</span>, and modern <span className="font-semibold text-blue-400">React</span> development. My expertise extends to embedded systems with <span className="font-semibold text-blue-400">Arduino</span> and <span className="font-semibold text-blue-400">ESP32</span>, and I'm proficient in <span className="font-semibold text-blue-400">Docker</span>, database technologies including <span className="font-semibold text-blue-400">MongoDB</span> and <span className="font-semibold text-blue-400">SQL</span>. I thrive on learning cutting-edge technologies and creating efficient, scalable solutions that bridge the gap between innovative concepts and real-world applications.
                            </p>
                            <a
                                href="/about"
                                className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-400 text-white px-8 py-3 rounded-lg shadow-lg hover:scale-105 hover:from-blue-600 hover:to-blue-500 transition-all duration-300 font-medium border border-blue-400/40 focus:outline-none focus:ring-4 focus:ring-blue-400/40"
                            >
                                <VscAccount size={20} />
                                Learn More
                            </a>

                        </motion.section>

                        {/* Skills Section */}
                        <motion.section
                            className="max-w-3xl mx-auto mb-16 bg-neutral-900/30 backdrop-blur-sm border border-neutral-800/50 rounded-2xl shadow-xl p-10 transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-400/20 hover:border-blue-400/40"
                            variants={sectionVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <h2 className="text-3xl font-bold mb-4 text-blue-400 flex items-center gap-2">
                                <VscArchive size={28} /> Skills
                            </h2>
                            <p className="text-blue-200 mb-6">
                                Here are some of the technologies and tools I work with regularly:
                            </p>
                            <div className="space-y-4">
                                <SkillBar skill="React & Next.js" percentage={95} color="bg-blue-500" delay={0} />
                                <SkillBar skill="JavaScript/TypeScript" percentage={90} color="bg-yellow-500" delay={0.1} />
                                <SkillBar skill="Node.js & Express" percentage={85} color="bg-green-500" delay={0.2} />
                                <SkillBar skill="MongoDB & SQL" percentage={80} color="bg-emerald-500" delay={0.3} />
                                <SkillBar skill="Arduino & ESP32" percentage={75} color="bg-red-500" delay={0.4} />
                                <SkillBar skill="Docker & DevOps" percentage={70} color="bg-purple-500" delay={0.5} />
                                <SkillBar skill="Python" percentage={65} color="bg-indigo-500" delay={0.6} />
                                <SkillBar skill="AWS & Cloud" percentage={60} color="bg-orange-500" delay={0.7} />
                            </div>
                        </motion.section>

                        {/* Experience Section */}
                        <motion.section
                            className="max-w-3xl mx-auto mb-16 bg-neutral-900/30 backdrop-blur-sm border border-neutral-800/50 rounded-2xl shadow-xl p-10 transition-all duration-300"
                            variants={sectionVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <h2 className="text-3xl font-bold mb-8 text-blue-400 flex items-center gap-2">
                                <VscArchive size={28} /> Experience
                            </h2>
                            <div className="overflow-x-auto">
                                <motion.div
                                    className="flex gap-8"
                                    drag="x"
                                    dragConstraints={{ left: -320 * (experiences.length - 1), right: 0 }}
                                    whileTap={{ cursor: "grabbing" }}
                                    style={{ cursor: "grab" }}
                                >
                                    {experiences.map((exp, idx) => (
                                        <motion.div
                                            key={idx}
                                            className="min-w-[320px] max-w-xs min-h-[260px] bg-blue-900/20 rounded-xl p-6 border border-blue-400/20 shadow hover:shadow-lg hover:scale-[1.03] transition-all duration-300 flex-shrink-0"
                                            whileHover={{ scale: 1.05, boxShadow: "0 8px 32px 0 rgba(0, 123, 255, 0.25)" }}
                                        >
                                            <h3 className="text-xl font-bold text-blue-200">
                                                {exp.role} <span className="font-normal text-blue-400">@ {exp.company}</span>
                                            </h3>
                                            <p className="text-sm text-blue-300">{exp.period}</p>
                                            <p className="mt-2 text-neutral-200">{exp.description}</p>
                                        </motion.div>
                                    ))}
                                </motion.div>
                                <div className="text-center text-xs text-blue-300 mt-4">Swipe or drag to see more</div>
                            </div>
                        </motion.section>

                        {/* Projects Section */}
                        <motion.section
                            id="projects"
                            className="max-w-6xl mx-auto mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                            variants={sectionVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {projects.map((project, i) => (
                                <div
                                    key={i}
                                    className="group bg-neutral-900/40 backdrop-blur-sm border border-neutral-800/50 rounded-2xl shadow-xl p-6 flex flex-col transition-transform duration-300 hover:scale-[1.02] hover:shadow-blue-400/20 relative overflow-hidden"
                                >
                                    {/* Project image */}
                                    {project.image && (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="rounded-lg mb-4 w-full h-40 object-cover border border-neutral-800 group-hover:opacity-90 transition"
                                        />
                                    )}

                                    {/* Title & Description */}
                                    <h3 className="text-xl font-bold text-blue-300 mb-2">{project.title}</h3>
                                    <p className="text-neutral-300 mb-4">{project.description}</p>

                                    {/* Tech stack */}
                                    {project.tech && (
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech.map((tech: string, idx: number) => (
                                                <span
                                                    key={idx}
                                                    className="bg-blue-800/40 text-blue-200 px-3 py-1 rounded-full text-xs font-semibold"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Links */}
                                    <div className="mt-auto flex gap-3">
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold text-sm shadow hover:from-blue-700 hover:to-blue-500 transition"
                                            >
                                                Live Demo
                                            </a>
                                        )}
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-block px-4 py-2 rounded-lg border border-blue-400 text-blue-300 font-semibold text-sm hover:bg-blue-900/30 transition"
                                            >
                                                GitHub
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </motion.section>

                        {/* Testimonials Section */}
                        <TestimonialsSection />

                        {/* Contact Section */}
                        <motion.section
                            id="contact"
                            className="max-w-3xl mx-auto mb-16 bg-neutral-900/30 backdrop-blur-sm border border-neutral-800/50 rounded-2xl shadow-xl p-10 transition-all duration-300 hover:shadow-blue-400/20"
                            variants={sectionVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <h2 className="text-3xl font-bold mb-4 text-blue-400 flex items-center gap-2">
                                <VscMail size={28} /> Let's Connect!
                            </h2>
                            <div className="mb-6">
                                <p className="text-blue-200 text-lg mb-4">
                                    I'm always excited to connect with fellow developers, potential collaborators, and anyone interested in technology!
                                </p>
                                <div className="bg-blue-900/20 border border-blue-400/30 rounded-lg p-4 mb-4">
                                    <p className="text-blue-100 text-sm">
                                        💡 <strong>Quick Response:</strong> I typically respond to messages within 24 hours
                                    </p>
                                    <p className="text-blue-100 text-sm mt-2">
                                        📧 <strong>Direct Email:</strong> <a href="mailto:saqlainkharal39@gmail.com" className="text-blue-400 underline hover:text-blue-300 transition">saqlainkharal39@gmail.com</a>
                                    </p>
                                </div>
                                <p className="text-neutral-300">
                                    Whether you have a project idea, want to collaborate, or just want to say hello - I'd love to hear from you!
                                </p>
                            </div>
                            <ContactForm />
                        </motion.section>

                        <div className="flex justify-center my-12">
                            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 rounded-full animate-pulse shadow-lg" />
                        </div>
                    </main>
                </div>
            )}
        </>
    )
}
