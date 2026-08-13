import { motion } from "framer-motion";

const Facility = () => {
    return (
        <div className="pt-32 pb-24 min-h-[calc(100vh-80px)] bg-slate-900 flex flex-col items-center justify-center relative overflow-hidden text-white">
            {/* Background Orbs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                >
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Facility</span>
                    </h1>
                    
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-block mt-4 px-8 py-3 rounded-full border border-primary/30 bg-primary/10 text-primary text-xl font-semibold tracking-wide shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.2)]"
                    >
                        Coming Soon
                    </motion.div>
                    
                    <p className="text-xl text-gray-400 mt-8 max-w-2xl mx-auto leading-relaxed">
                        Edge Robotics Studio is currently building something amazing. Stay tuned for a detailed look at the state-of-the-art facility and infrastructure!
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Facility;
