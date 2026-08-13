import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Tag, Clock, Settings, Briefcase, Home, Package, GraduationCap } from "lucide-react";
import { serviceData } from "../data/serviceData";
import { projectData } from "../data/projectData";

const Studio = () => {
    const tabs = [
        { id: "services", name: "Services", icon: <Settings size={18} /> },
        { id: "projects", name: "Projects", icon: <Briefcase size={18} /> },
        { id: "facility", name: "Facility", icon: <Home size={18} /> },
        { id: "product", name: "Product", icon: <Package size={18} /> },
        { id: "courses", name: "Courses", icon: <GraduationCap size={18} /> },
    ];

    const [activeTab, setActiveTab] = useState("services");

    const renderContent = () => {
        switch (activeTab) {
            case "services":
                return (
                    <motion.div
                        key="services"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {serviceData.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="relative bg-surface p-8 rounded-2xl border border-slate-700 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(14,165,233,0.15)] group flex flex-col h-full"
                            >
                                <Link to={`/services/${service.slug}/`} className="absolute inset-0 z-10">
                                    <span className="sr-only">View Service</span>
                                </Link>
                                <div className="mb-6 p-4 bg-slate-800 rounded-xl w-fit group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    {React.cloneElement(service.icon, { className: "w-8 h-8 text-primary group-hover:text-white transition-colors" })}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                                <p className="text-gray-400 leading-relaxed flex-grow mb-6">{service.description}</p>
                                <span className="inline-flex items-center gap-2 text-white font-medium mt-auto group-hover:text-primary transition-colors">
                                    Learn More
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                );
            case "projects":
                return (
                    <motion.div
                        key="projects"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {projectData.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="group relative bg-slate-800/50 rounded-3xl border border-slate-700 overflow-hidden hover:border-primary/50 transition-all duration-500 flex flex-col h-full"
                            >
                                <Link to={`/projects/${project.slug}/`} className="block h-full">
                                    <div className="relative h-[400px] sm:h-[500px] overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
                                        {project.isComingSoon && (
                                            <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg border border-white/10 uppercase tracking-widest">
                                                <Clock className="w-3 h-3" />
                                                Coming Soon
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                                            {project.excerpt}
                                        </p>
                                        <span className="inline-flex items-center gap-2 text-white font-semibold group/link mt-auto">
                                            {project.isComingSoon ? "Learn More" : "View Case Study"}
                                            <ArrowRight className="w-4 h-4 text-primary group-hover/link:translate-x-1 transition-transform" />
                                        </span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                );
            default:
                return (
                    <motion.div
                        key="coming-soon"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="flex flex-col items-center justify-center py-32 text-center"
                    >
                        <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mb-6 animate-pulse border border-slate-700">
                            <Clock className="w-10 h-10 text-primary" />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-4 uppercase tracking-widest">Coming Soon</h2>
                        <p className="text-gray-400 text-lg max-w-md">
                            We are currently refining the {activeTab} section. <br />
                            Check back soon for updates!
                        </p>
                    </motion.div>
                );
        }
    };

    return (
        <div className="pt-32 pb-24 min-h-screen bg-slate-900 text-white relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Centered Heading */}
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white"
                    >
                        Studio
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white text-lg max-w-2xl mx-auto"
                    >
                        Exploring the future of robotics through design, engineering, and education.
                    </motion.p>
                </div>

                {/* Centered Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-16 px-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 border ${
                                activeTab === tab.id
                                    ? "bg-primary border-primary text-slate-950 shadow-[0_0_20px_rgba(20,184,166,0.3)]"
                                    : "bg-slate-800/50 border-slate-700 text-gray-400 hover:bg-slate-700 hover:text-white"
                            }`}
                        >
                            {tab.icon}
                            <span className="hidden sm:inline uppercase tracking-wider text-xs">{tab.name}</span>
                            <span className="sm:hidden text-xs">{tab.name}</span>
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="max-w-7xl mx-auto">
                    <AnimatePresence mode="wait">
                        {renderContent()}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Studio;
