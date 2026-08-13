import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, TerminalSquare } from "lucide-react";
const Cta = () => {
    return (
        <section className="py-32 bg-slate-900 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-surface/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-12 md:p-16 text-center shadow-2xl"
                >
                    <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-primary/30">
                        <TerminalSquare className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Ready to turn your <br className="hidden md:block" /> ideas into reality?
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-[720px] mx-auto text-justify" style={{ textAlignLast: 'center' }}>
                        Whatever you’re looking to explore or build, we’re here to support you with our courses, services, products, and facilities. At Edge Robotics Studio, we empower you with the right tools, technology, knowledge, and guidance for your journey from idea to creation.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/contact/"
                            className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-hover text-slate-950 font-semibold rounded-xl transition-all shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2"
                        >
                            Start a Project
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            to="/services/"
                            className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl transition-all border border-slate-700 flex items-center justify-center"
                        >
                            Explore Studio
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
export default Cta;
