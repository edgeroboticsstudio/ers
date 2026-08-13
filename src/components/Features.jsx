import { motion } from "framer-motion";
import { BookOpen, Layers, Zap, Globe } from "lucide-react";
const features = [
    {
        title: "Hands-on Learning",
        description: "Activity-based education programs designed to bridge the gap between theoretical concepts and real-world application.",
        icon: <BookOpen className="w-8 h-8 text-primary" />
    },
    {
        title: "End-to-End Solutions",
        description: "Bringing together mechanical design, electronics, software, and AI to build practical, intelligent machines.",
        icon: <Layers className="w-8 h-8 text-primary" />
    },
    {
        title: "Accessible Technology",
        description: "Providing the tools, resources, and knowledge necessary to empower anyone to become a self-reliant creator.",
        icon: <Globe className="w-8 h-8 text-primary" />
    },
    {
        title: "Real-world Innovation",
        description: "Focusing on transforming raw ideas into impactful, deployable systems that drive meaningful progress.",
        icon: <Zap className="w-8 h-8 text-primary" />
    }
];
const Features = () => {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white mb-6"
                    >
                        Built For The Edge
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg leading-relaxed"
                    >
                        We empower individuals to transform ideas into creation while fostering creativity, problem-solving, and continuous learning, enabling a new generation of self-reliant creators.
                    </motion.p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-surface p-8 rounded-2xl border border-slate-700 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(14,165,233,0.15)] group"
                        >
                            <div className="mb-6 p-4 bg-slate-800 rounded-xl w-fit group-hover:bg-primary/20 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Features;
