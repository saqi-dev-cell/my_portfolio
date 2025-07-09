"use client"

import { motion } from 'framer-motion';
import { VscArrowLeft, VscCalendar, VscLocation, VscMail, VscGlobe, VscCode, VscGear, VscRocket } from 'react-icons/vsc';
import { FaGraduationCap, FaAward, FaHeart, FaLightbulb } from 'react-icons/fa';
import Link from 'next/link';
import ScrollProgress from '../components/ScrollProgress';
import ParticleSystem from '../components/ParticleSystem';
import MobileOptimizations from '../components/MobileOptimizations';

const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.7, ease: [0.42, 0, 0.58, 1] as [number, number, number, number] } 
    }
};

const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] as [number, number, number, number] } 
    }
};

export default function AboutPage() {
    return (
        <>
            <ScrollProgress />
            <MobileOptimizations />
            
            <div className="relative min-h-screen bg-black">
                {/* Particle System Background */}
                <ParticleSystem />
                
                {/* Gradient overlay */}
                <div className="pointer-events-none fixed inset-0 z-0 bg-gradient-to-br from-blue-900/20 via-black/40 to-black/60" />

                <div className="relative z-10 container mx-auto px-6 py-8">
                    {/* Back Button */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <Link 
                            href="/"
                            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            <VscArrowLeft size={20} />
                            Back to Home
                        </Link>
                    </motion.div>

                    {/* Header */}
                    <motion.section
                        className="text-center mb-16"
                        variants={sectionVariant}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white">
                            About <span className="text-blue-400">Me</span>
                        </h1>
                        <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                            Get to know more about my journey, passion, and the story behind the code.
                        </p>
                    </motion.section>

                    {/* Personal Info */}
                    <motion.section
                        className="max-w-4xl mx-auto mb-16 bg-neutral-900/30 backdrop-blur-sm border border-neutral-800/50 rounded-2xl shadow-xl p-10"
                        variants={sectionVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <img
                                    src="/profile.jpeg"
                                    alt="Saqlain Kharal"
                                    className="w-64 h-64 rounded-2xl object-cover border-4 border-blue-400 shadow-lg mx-auto"
                                />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-blue-400 mb-6">Personal Information</h2>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <VscMail className="text-blue-400" size={20} />
                                        <span className="text-neutral-200">saqlainkharal39@gmail.com</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <VscLocation className="text-blue-400" size={20} />
                                        <span className="text-neutral-200">Pakistan</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <VscCalendar className="text-blue-400" size={20} />
                                        <span className="text-neutral-200">Student (2021-2025)</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <VscGlobe className="text-blue-400" size={20} />
                                        <span className="text-neutral-200">Available for Remote Work</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* My Story */}
                    <motion.section
                        className="max-w-4xl mx-auto mb-16 bg-neutral-900/30 backdrop-blur-sm border border-neutral-800/50 rounded-2xl shadow-xl p-10"
                        variants={sectionVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h2 className="text-3xl font-bold text-blue-400 mb-8 flex items-center gap-3">
                            <FaLightbulb size={28} />
                            My Story
                        </h2>
                        <div className="space-y-6 text-neutral-200 leading-relaxed">
                            <p className="text-lg">
                                My journey into technology began during my Information Technology studies in 2021. What started as curiosity about how websites work quickly evolved into a passionate pursuit of full-stack development and IoT innovation.
                            </p>
                            <p className="text-lg">
                                I discovered my love for problem-solving through code when I built my first Arduino project - a simple LED controller. That moment of seeing hardware respond to my code sparked an obsession with bridging the digital and physical worlds.
                            </p>
                            <p className="text-lg">
                                Today, I specialize in the MERN stack and modern web technologies, while maintaining my passion for embedded systems. I believe in creating solutions that are not just functional, but elegant and user-friendly.
                            </p>
                        </div>
                    </motion.section>

                    {/* Education & Achievements */}
                    <motion.section
                        className="max-w-4xl mx-auto mb-16 bg-neutral-900/30 backdrop-blur-sm border border-neutral-800/50 rounded-2xl shadow-xl p-10"
                        variants={sectionVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h2 className="text-3xl font-bold text-blue-400 mb-8 flex items-center gap-3">
                            <FaGraduationCap size={28} />
                            Education & Achievements
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="border-l-4 border-blue-400 pl-6">
                                    <h3 className="text-xl font-semibold text-blue-300 mb-2">Bachelor of Information Technology</h3>
                                    <p className="text-neutral-300 mb-1">University (2021-2025)</p>
                                    <p className="text-neutral-400 text-sm">Specializing in Software Development and System Design</p>
                                </div>
                                <div className="border-l-4 border-green-400 pl-6">
                                    <h3 className="text-xl font-semibold text-green-300 mb-2">Full Stack Development</h3>
                                    <p className="text-neutral-300 mb-1">Self-taught & Online Courses</p>
                                    <p className="text-neutral-400 text-sm">MERN Stack, Next.js, TypeScript</p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="border-l-4 border-purple-400 pl-6">
                                    <h3 className="text-xl font-semibold text-purple-300 mb-2">IoT & Embedded Systems</h3>
                                    <p className="text-neutral-300 mb-1">Hands-on Projects</p>
                                    <p className="text-neutral-400 text-sm">Arduino, ESP32, Sensor Integration</p>
                                </div>
                                <div className="border-l-4 border-yellow-400 pl-6">
                                    <h3 className="text-xl font-semibold text-yellow-300 mb-2">Continuous Learning</h3>
                                    <p className="text-neutral-300 mb-1">Always Evolving</p>
                                    <p className="text-neutral-400 text-sm">New technologies, best practices, industry trends</p>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* What Drives Me */}
                    <motion.section
                        className="max-w-4xl mx-auto mb-16 bg-neutral-900/30 backdrop-blur-sm border border-neutral-800/50 rounded-2xl shadow-xl p-10"
                        variants={sectionVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h2 className="text-3xl font-bold text-blue-400 mb-8 flex items-center gap-3">
                            <FaHeart size={28} />
                            What Drives Me
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <motion.div
                                className="text-center"
                                variants={cardVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <VscCode className="text-blue-400 text-4xl mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-blue-300 mb-3">Clean Code</h3>
                                <p className="text-neutral-300">I believe in writing code that is not just functional, but readable, maintainable, and elegant.</p>
                            </motion.div>
                            <motion.div
                                className="text-center"
                                variants={cardVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                <VscGear className="text-green-400 text-4xl mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-green-300 mb-3">Problem Solving</h3>
                                <p className="text-neutral-300">Every challenge is an opportunity to learn and create innovative solutions that make a difference.</p>
                            </motion.div>
                            <motion.div
                                className="text-center"
                                variants={cardVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <VscRocket className="text-purple-400 text-4xl mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-purple-300 mb-3">Innovation</h3>
                                <p className="text-neutral-300">Pushing boundaries and exploring new technologies to create solutions for tomorrow's challenges.</p>
                            </motion.div>
                        </div>
                    </motion.section>

                    {/* Call to Action */}
                    <motion.section
                        className="text-center mb-16"
                        variants={sectionVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">Let's Build Something Amazing Together</h2>
                        <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
                            I'm always excited to work on new projects and collaborate with fellow developers and innovators.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/#contact"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-3 rounded-full shadow-xl hover:scale-105 hover:from-blue-700 hover:to-blue-500 transition-all duration-300 font-semibold text-lg border border-blue-500/30 focus:outline-none focus:ring-4 focus:ring-blue-400/40"
                            >
                                <VscMail size={22} />
                                Get In Touch
                            </Link>
                            <Link
                                href="/#projects"
                                className="inline-flex items-center gap-2 border border-blue-400 text-blue-400 px-8 py-3 rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300 font-semibold text-lg focus:outline-none focus:ring-4 focus:ring-blue-400/40"
                            >
                                <VscCode size={22} />
                                View My Work
                            </Link>
                        </div>
                    </motion.section>
                </div>
            </div>
        </>
    );
}
