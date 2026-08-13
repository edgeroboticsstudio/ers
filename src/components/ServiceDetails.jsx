import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import React from 'react';
import { serviceData } from "../data/serviceData.jsx";
const ServiceDetails = () => {
    const { slug } = useParams();
    const service = serviceData.find(s => s.slug === slug);
    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background text-white">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
                    <Link to="/#services" className="text-primary hover:underline">Return to Services</Link>
                </div>
            </div>
        );
    }
    return (
        <div className="pt-32 pb-24 min-h-screen bg-slate-900 border-b border-slate-800 text-white relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none -z-0"></div>
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <Link
                    to="/#services"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Services
                </Link>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="flex items-center gap-6 mb-8 mt-4">
                        <div className="p-5 bg-surface/50 backdrop-blur-md rounded-2xl border border-slate-700/50 shadow-[0_0_30px_-5px_rgba(14,165,233,0.3)]">
                            {React.cloneElement(service.icon, { className: "w-12 h-12 text-primary" })}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 tracking-tight">
                            {service.title}
                        </h1>
                    </div>
                    <div className="h-px w-full bg-slate-800 mb-12"></div>
                    <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                        {service.content.split('\\n').map((paragraph, index) => {
                            if (!paragraph.trim()) return <br key={index} />;
                            return <p key={index} className="mb-6 leading-relaxed text-lg">{paragraph}</p>;
                        })}
                    </div>
                    <div className="mt-16 p-10 bg-gradient-to-br from-surface to-slate-800/50 rounded-3xl border border-slate-700 text-center relative overflow-hidden group shadow-2xl">
                        <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500 rounded-3xl pointer-events-none"></div>
                        <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Need help with {service.title}?</h3>
                        <p className="text-gray-400 mb-8 relative z-10 max-w-2xl mx-auto">Reach out to discuss your project requirements and see how Edge Robotics Studio's expertise can accelerate your timelines.</p>
                        <Link to="/contact/" className="relative z-10 inline-block bg-primary text-white font-medium px-10 py-4 rounded-xl hover:bg-primary-hover transition-all duration-300 shadow-[0_0_20px_-5px_rgba(14,165,233,0.4)] hover:shadow-[0_0_30px_-5px_rgba(14,165,233,0.6)] hover:-translate-y-1">
                            Contact Us
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
export default ServiceDetails;
