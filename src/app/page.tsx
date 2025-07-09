"use client"

import { projects } from '@/lib/data/projects'
import { personalData } from '@/lib/data/personal'
import Header from './components/Header';
import Footer from './components/Footer';
// import Ballpit from './components/Ballpit';
import TypingAnimation from './components/TypingAnimation';
import SkillBar from './components/SkillBar';
import ScrollProgress from './components/ScrollProgress';

import FloatingNav from './components/FloatingNav';
import ParticleSystem from './components/ParticleSystem';
import ContactForm from './components/ContactForm';
import PerformanceMonitor from './components/PerformanceMonitor';
import TestimonialsSection from './components/TestimonialsSection';
import MobileOptimizations from './components/MobileOptimizations';
import WelcomeToast from './components/WelcomeToast';
import { VscAccount, VscMail, VscArchive, VscCalendar, VscGlobe, VscCode } from 'react-icons/vsc';
import { VscGithub } from 'react-icons/vsc';
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
		technologies: ["React", "Node.js", "MongoDB", "TypeScript", "Next.js", "Express.js"]
	},
	{
		role: "IoT Developer",
		company: "Personal Projects",
		period: "2022 – Present",
		description:
			"Designing and implementing IoT solutions using Arduino and ESP32 microcontrollers. Creating smart home automation systems, sensor networks, and real-time monitoring applications with wireless connectivity.",
		technologies: ["Arduino", "ESP32", "C++", "Python", "MQTT", "WiFi"]
	},
	{
		role: "Frontend Developer Intern",
		company: "Tech Solutions",
		period: "2022 – 2023",
		description:
			"Developed responsive web interfaces using React and modern CSS frameworks. Optimized website performance, implemented user-friendly designs, and collaborated with backend teams for seamless integration.",
		technologies: ["React", "JavaScript", "CSS3", "HTML5", "Tailwind CSS", "Git"]
	},
	{
		role: "Open Source Contributor",
		company: "GitHub Community",
		period: "2021 – Present",
		description:
			"Actively contributing to open-source projects, focusing on web development tools and IoT libraries. Participating in code reviews, bug fixes, and feature enhancements to support the developer community.",
		technologies: ["JavaScript", "Python", "Git", "GitHub Actions", "Documentation", "Testing"]
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

                    {/* Ballpit background
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
                    </div> */}

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
                            className="max-w-5xl mx-auto mb-16"
                            variants={sectionVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <div className="text-center mb-12">
                                <h2 className="text-4xl font-bold text-white mb-4">
                                    Professional <span className="text-blue-400">Experience</span>
                                </h2>
                                <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
                                    My journey through various roles and projects that have shaped my expertise
                                </p>
                            </div>

                            <div className="relative">
                                {/* Timeline line */}
                                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-blue-400 via-blue-500 to-transparent"></div>

                                <div className="space-y-12">
                                    {experiences.map((exp, idx) => (
                                        <motion.div
                                            key={idx}
                                            className={`relative flex items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                                            viewport={{ once: true }}
                                        >
                                            {/* Timeline dot */}
                                            <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-black shadow-lg z-10"></div>

                                            {/* Content card */}
                                            <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${idx % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                                                <motion.div
                                                    className="bg-gradient-to-br from-neutral-900/80 to-neutral-800/60 backdrop-blur-sm border border-neutral-700/50 rounded-2xl p-8 shadow-2xl hover:shadow-blue-400/10 transition-all duration-300"
                                                    whileHover={{ scale: 1.02, y: -5 }}
                                                >
                                                    {/* Company badge */}
                                                    <div className="flex items-center justify-center gap-3 mb-4">
                                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                                                            <VscArchive className="text-white" size={24} />
                                                        </div>
                                                        <div className="text-center">
                                                            <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                                            <p className="text-blue-400 font-semibold">{exp.company}</p>
                                                        </div>
                                                    </div>

                                                    {/* Period */}
                                                    <div className="flex justify-center mb-4">
                                                        <div className="inline-flex items-center gap-2 bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                                                            <VscCalendar size={14} />
                                                            {exp.period}
                                                        </div>
                                                    </div>

                                                    {/* Description */}
                                                    <p className="text-neutral-200 leading-relaxed mb-4 text-center">{exp.description}</p>

                                                    {/* Skills/Technologies */}
                                                    <div className="flex flex-wrap gap-2">
                                                        {exp.technologies?.map((tech, techIdx) => (
                                                            <span
                                                                key={techIdx}
                                                                className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium border border-blue-500/30"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.section>

                        {/* Projects Section */}
                        <motion.section
                            id="projects"
                            className="max-w-7xl mx-auto mb-16"
                            variants={sectionVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {/* Section Header */}
                            <div className="text-center mb-16">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <h2 className="text-5xl font-bold text-white mb-6">
                                        Featured <span className="text-blue-400">Projects</span>
                                    </h2>
                                    <p className="text-neutral-300 text-xl max-w-3xl mx-auto leading-relaxed">
                                        A showcase of my latest work, demonstrating expertise in full-stack development,
                                        IoT solutions, and modern web technologies
                                    </p>
                                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mt-6 rounded-full"></div>
                                </motion.div>
                            </div>

                            {/* Projects Grid */}
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {projects.map((project, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                        className="group relative"
                                    >
                                        <div className="bg-gradient-to-br from-neutral-900/90 to-neutral-800/70 backdrop-blur-sm border border-neutral-700/50 rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-blue-400/20 hover:border-blue-400/30 hover:-translate-y-2">
                                            {/* Project Image with Overlay */}
                                            <div className="relative overflow-hidden">
                                                {project.image && (
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                )}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                                {/* Floating Action Buttons */}
                                                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                                    {project.demo && (
                                                        <a
                                                            href={project.demo}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110"
                                                            title="Live Demo"
                                                        >
                                                            <VscGlobe size={18} />
                                                        </a>
                                                    )}
                                                    {project.github && (
                                                        <a
                                                            href={project.github}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="w-10 h-10 bg-neutral-800 hover:bg-neutral-700 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110"
                                                            title="GitHub Repository"
                                                        >
                                                            <VscGithub size={18} />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="p-8">
                                                {/* Project Category Badge */}
                                                <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-medium mb-4 border border-blue-500/30">
                                                    <VscCode size={12} />
                                                    Web Development
                                                </div>

                                                {/* Title & Description */}
                                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                                                    {project.title}
                                                </h3>
                                                <p className="text-neutral-300 mb-6 leading-relaxed line-clamp-3">
                                                    {project.description}
                                                </p>

                                                {/* Tech Stack */}
                                                {project.tech && (
                                                    <div className="flex flex-wrap gap-2 mb-6">
                                                        {project.tech.map((tech: string, idx: number) => (
                                                            <span
                                                                key={idx}
                                                                className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200 rounded-full text-xs font-medium border border-blue-500/20 hover:border-blue-400/40 transition-colors duration-300"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}

                                                {/* Action Buttons */}
                                                <div className="flex gap-3">
                                                    {project.demo && (
                                                        <a
                                                            href={project.demo}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold text-sm shadow-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 hover:shadow-blue-400/30 hover:scale-105"
                                                        >
                                                            <VscGlobe size={16} />
                                                            Live Demo
                                                        </a>
                                                    )}
                                                    {project.github && (
                                                        <a
                                                            href={project.github}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-blue-400/50 text-blue-300 font-semibold text-sm hover:bg-blue-400/10 hover:border-blue-400 transition-all duration-300 hover:scale-105"
                                                        >
                                                            <VscGithub size={16} />
                                                            Code
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
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
