import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck } from "lucide-react";
import aboutImage from "../assets/about.jpg";
import UdyamQr from "./UdyamQr";

const About = () => {
    return (
        <div className="pt-28 sm:pt-32 pb-16 sm:pb-24 bg-background relative overflow-hidden text-white">
            {/* Background Orbs */}
            <div className="hidden md:block absolute top-20 left-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Centered Heading */}
                <div className="text-center mb-10 sm:mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black mb-4 tracking-tight text-white"
                    >
                        About
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-base sm:text-xl text-gray-300 font-normal tracking-wide"
                    >
                        Bridging the gap between idea and creation
                    </motion.p>
                </div>

                {/* Founder Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="max-w-sm mx-auto mb-12 sm:mb-16"
                >
                    <div className="relative bg-surface/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700/80 flex flex-col transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_15px_40px_-15px_rgba(14,165,233,0.2)] hover:border-primary/40">
                        <div className="relative overflow-hidden h-80 sm:h-96 w-full bg-slate-900/90">
                            <img
                                src={aboutImage}
                                alt="Dharmesh Makvana"
                                className="w-full h-full object-cover object-[50%_55%] transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors pointer-events-none"></div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col justify-center bg-slate-900/60 text-center">
                            <h2 className="text-xl font-bold text-white group-hover:text-primary transition-colors mb-1">
                                Dharmesh Makvana
                            </h2>
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                Founder & Lead Robotics Engineer
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Horizontal Row: Mission, Vision & MSME Registration */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
                >
                    {/* Mission Card */}
                    <div className="relative bg-surface p-6 sm:p-8 rounded-2xl border border-slate-700 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(14,165,233,0.15)] group flex flex-col h-full">
                        <div className="mb-6 p-4 bg-slate-800 rounded-xl w-fit group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <Target className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                        </div>
                        <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                            Mission
                        </h2>
                        <p className="text-gray-400 leading-relaxed text-sm sm:text-base text-left">
                            To empower individuals to transform ideas into creation while fostering creativity, problem-solving, and continuous learning, enabling a new generation of self-reliant creators.
                        </p>
                    </div>

                    {/* Vision Card */}
                    <div className="relative bg-surface p-6 sm:p-8 rounded-2xl border border-slate-700 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(14,165,233,0.15)] group flex flex-col h-full">
                        <div className="mb-6 p-4 bg-slate-800 rounded-xl w-fit group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <Eye className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                        </div>
                        <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                            Vision
                        </h2>
                        <p className="text-gray-400 leading-relaxed text-sm sm:text-base text-left">
                            To nurture a generation of thinkers and builders who are confident in exploring the future and turning their unique ideas into meaningful reality through technology and collaboration.
                        </p>
                    </div>

                    {/* MSME Registration Card */}
                    <div className="relative bg-surface p-6 sm:p-8 rounded-2xl border border-slate-700 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(14,165,233,0.15)] group flex flex-col h-full">
                        <div className="mb-6 p-4 bg-slate-800 rounded-xl w-fit group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <ShieldCheck className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                        </div>
                        <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                            MSME Registration
                        </h2>
                        <div className="flex items-center justify-between gap-4 mt-auto">
                            <p className="text-gray-400 leading-relaxed text-sm sm:text-base flex-1">
                                Registered Micro Enterprise under the Ministry of Micro, Small and Medium Enterprises (MoMSME), Government of India.
                            </p>
                            <a
                                href="https://udyamregistration.gov.in/verifyudyambarcode.aspx?verifyudrn=L/MGzLOFkS8cDE+s71QjD94Wf6tOM5b13OT/jWWYf+w="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="shrink-0 text-gray-400 group-hover:text-white hover:!text-white transition-colors duration-300"
                                title="Scan or click to verify Udyam Certificate"
                            >
                                <UdyamQr className="w-20 h-20 sm:w-24 sm:h-24 transition-colors duration-300" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
