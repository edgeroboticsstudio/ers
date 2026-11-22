import { motion } from "framer-motion";
import { BookOpen, Target, Eye, ShieldCheck } from "lucide-react";
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
                    {/* Left Column: Unified Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6 sm:space-y-8"
                    >
                        {/* Our Story Card */}
                        <div className="relative bg-surface p-6 sm:p-8 rounded-2xl border border-slate-700 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(14,165,233,0.15)] group flex flex-col">
                            <div className="mb-6 p-4 bg-slate-800 rounded-xl w-fit group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <BookOpen className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                            </div>
                            <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                Our Story
                            </h2>
                            <p className="text-gray-400 leading-relaxed text-sm sm:text-base text-left sm:text-justify">
                                Edge Robotics Studio is a space built on the belief that access to technology and knowledge should be open to everyone who is curious to learn, build, and innovate.
                                Founded by Dharmesh Makvana, the studio focuses on making tools and learning accessible while empowering individuals to turn their ideas into creation.
                            </p>
                        </div>

                        {/* Mission Card */}
                        <div className="relative bg-surface p-6 sm:p-8 rounded-2xl border border-slate-700 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(14,165,233,0.15)] group flex flex-col">
                            <div className="mb-6 p-4 bg-slate-800 rounded-xl w-fit group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <Target className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                            </div>
                            <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                Mission
                            </h2>
                            <p className="text-gray-400 leading-relaxed text-sm sm:text-base text-left sm:text-justify">
                                To empower individuals to transform ideas into creation while fostering creativity, problem-solving, and continuous learning, enabling a new generation of self-reliant creators.
                            </p>
                        </div>

                        {/* Vision Card */}
                        <div className="relative bg-surface p-6 sm:p-8 rounded-2xl border border-slate-700 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(14,165,233,0.15)] group flex flex-col">
                            <div className="mb-6 p-4 bg-slate-800 rounded-xl w-fit group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <Eye className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                            </div>
                            <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                Vision
                            </h2>
                            <p className="text-gray-400 leading-relaxed text-sm sm:text-base text-left sm:text-justify">
                                To nurture a generation of thinkers and builders who are confident in exploring the future and turning their unique ideas into meaningful reality through technology and collaboration.
                            </p>
                        </div>

                        {/* MSME Registration Card */}
                        <div className="relative bg-surface p-6 sm:p-8 rounded-2xl border border-slate-700 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(14,165,233,0.15)] group flex flex-col">
                            <div className="mb-6 p-4 bg-slate-800 rounded-xl w-fit group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <ShieldCheck className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                            </div>
                            <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                MSME Registration
                            </h2>
                            <div className="flex items-start sm:items-center justify-between gap-4 sm:gap-6">
                                <div className="space-y-2 flex-1">
                                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                                        Registered Micro Enterprise under the Ministry of Micro, Small and Medium Enterprises (MoMSME), Government of India.
                                    </p>
                                    <p className="font-mono text-white text-sm sm:text-base font-semibold">
                                        UDYAM-GJ-02-0041992
                                    </p>
                                </div>
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

                    {/* Right Column: Founder Card (Sticky) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative sticky top-24 sm:top-28 lg:top-32 w-full max-w-md mx-auto"
                    >
                        <div className="bg-surface p-4 sm:p-5 rounded-2xl border border-slate-700 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(14,165,233,0.15)] group">
                            <div className="relative overflow-hidden rounded-xl">
                                <img
                                    src={aboutImage}
                                    alt="Dharmesh Makvana"
                                    className="w-full aspect-[3/4] object-cover rounded-xl group-hover:scale-[1.02] transition-transform duration-500 max-h-[460px] sm:max-h-[520px] lg:max-h-[560px]"
                                />
                            </div>
                            <div className="pt-4 text-center">
                                <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                                    Dharmesh Makvana
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-400">
                                    Founder & Lead Robotics Engineer
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
