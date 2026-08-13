import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Tag, Clock } from "lucide-react";
import { projectData } from "../data/projectData";

const Projects = () => {
    return (
        <section id="projects" className="pt-32 pb-24 min-h-screen bg-slate-900 border-b border-slate-800 relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black text-white mb-6"
                    >
                        Projects
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg"
                    >
                        Edge Robotics Studio is dedicated to pushing the boundaries of robotics and AI.
                        Explore the latest innovations and upcoming releases.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-slate-800/50 rounded-3xl border border-slate-700 overflow-hidden hover:border-primary/50 transition-all duration-500"
                        >
                            <Link to={`/projects/${project.slug}/`} className="block h-full">
                                {/* Project Image */}
                                <div className="relative h-[400px] sm:h-[500px] overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>

                                    {project.isComingSoon && (
                                        <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg border border-white/10 uppercase tracking-widest animate-pulse">
                                            <Clock className="w-3 h-3" />
                                            Coming Soon
                                        </div>
                                    )}
                                </div>

                                {/* Project Content */}
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                                        {project.excerpt}
                                    </p>

                                    {project.isComingSoon ? (
                                        <div className="flex items-center gap-2 text-primary font-medium text-sm">
                                            Initial prototyping in progress
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    ) : (
                                        <span className="inline-flex items-center gap-2 text-white font-semibold group/link">
                                            View Case Study
                                            <ArrowRight className="w-4 h-4 text-primary group-hover/link:translate-x-1 transition-transform group-hover:translate-x-1" />
                                        </span>
                                    )}
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
