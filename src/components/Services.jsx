import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { serviceData } from '../data/serviceData.jsx';
const Services = () => {
    return (
        <section id="services" className="py-24 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                    >
                        Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-300 text-lg"
                    >
                        Comprehensive robotics solutions from low-level firmware to high-level system integration.
                    </motion.p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {serviceData.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
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
                </div>
            </div>
        </section>
    );
};
export default Services;
