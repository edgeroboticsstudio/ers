import heroBg from "../assets/hero_background.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
const Hero = () => {
    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            {/* Background Image */}
            <motion.img
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src={heroBg}
                alt="Robotics Studio Background"
                fetchPriority="high"
                decoding="sync"
                className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark/Gradient Overlays */}
            <div className="absolute inset-0 bg-black/60 z-0"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-0"></div>
            {/* Glowing Effects */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
                className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full z-0 pointer-events-none"
            ></motion.div>
            {/* Content Container */}
            <div className="relative z-10 w-full h-full min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 pb-10 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
                        Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Discovery</span> <br />
                        Guiding Exploration
                    </h1>
                </motion.div>
                <div className="mb-12"></div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4"
                >
                    <Link
                        to="/contact/"
                        className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-hover text-slate-950 rounded-full font-semibold transition-all shadow-[0_0_30px_-5px_rgba(14,165,233,0.5)] hover:shadow-[0_0_40px_-5px_rgba(14,165,233,0.7)] flex items-center justify-center gap-2 group"
                    >
                        Start Your Project
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        to="/services/"
                        className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-full font-semibold transition-all flex items-center justify-center"
                    >
                        Explore Studio
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};
export default Hero;
