import { motion } from "framer-motion";
import aboutImage from "../assets/about.jpg";
const About = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-slate-900 border-b border-slate-800 relative overflow-hidden text-white">
            {/* Background Orbs */}
            <div className="hidden md:block absolute top-20 left-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Centered Heading */}
                <div className="text-center mb-20">
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
                        className="text-xl text-white font-normal tracking-wide"
                    >
                        Bridging the gap between idea and creation
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-12"
                    >
                        <div className="space-y-10 text-gray-300 text-lg leading-relaxed text-justify">
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="w-8 h-px bg-primary"></span>
                                    Our Story
                                </h2>
                                <p>
                                    Edge Robotics Studio is a space built on the belief that access to technology and knowledge should be open to everyone who is curious to learn, build, and innovate.
                                    Founded by Dharmesh Makvana, the studio focuses on making tools and learning accessible while empowering individuals to turn their ideas into creation.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="w-8 h-px bg-primary"></span>
                                    Mission
                                </h2>
                                <p className="text-white font-semibold italic border-l-2 border-primary pl-6 py-2">
                                    "Our mission is to empower individuals to transform ideas into creation while fostering creativity, problem-solving, and continuous learning, enabling a new generation of self-reliant creators."
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="w-8 h-px bg-primary"></span>
                                    Vision
                                </h2>
                                <p>
                                    To nurture a generation of thinkers and builders who are confident in exploring the future and turning their unique ideas into meaningful reality through technology and collaboration.
                                </p>
                            </section>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative lg:sticky lg:top-32"
                    >
                        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-90"></div>
                        <img
                            src={aboutImage}
                            alt="Dharmesh Makvana"
                            className="relative rounded-3xl shadow-2xl border border-slate-700/50 object-cover w-full h-[500px] lg:h-[700px]"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
export default About;
