import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Tag } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import { projectData } from "../data/projectData";
const ProjectDetails = () => {
    const { slug } = useParams();
    const project = projectData.find(p => p.slug === slug);
    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background text-white">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
                    <Link to="/#projects" className="text-primary hover:underline">Return to Projects</Link>
                </div>
            </div>
        );
    }
    return (
        <div className="pt-32 pb-24 min-h-screen bg-slate-900 border-b border-slate-800 text-white relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none -z-0"></div>
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <Link
                    to="/#projects"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Projects
                </Link>
                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="mb-12">
                        <div className="mb-2"></div>
                        <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-6 tracking-tight pb-2">
                            {project.title}
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            {project.description}
                        </p>
                    </div>
                    <div className="relative w-full mb-16 group">
                        <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-3xl -z-10 group-hover:bg-primary/30 transition-colors duration-500"></div>
                        <div className="w-full rounded-3xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-900/50">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                    <div className="prose prose-invert prose-primary prose-lg max-w-none text-gray-300">
                        <ReactMarkdown>{project.content}</ReactMarkdown>
                    </div>
                    <div className="mt-20 p-10 bg-gradient-to-br from-surface to-slate-800/50 rounded-3xl border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500 rounded-3xl pointer-events-none"></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-2">Build your next project with Edge Robotics Studio</h3>
                            <p className="text-gray-400">Edge Robotics Studio is ready to tackle your hardest robotics challenges.</p>
                        </div>
                        <Link to="/contact/" className="relative z-10 whitespace-nowrap bg-primary text-white font-medium px-8 py-4 rounded-xl hover:bg-primary-hover transition-all duration-300 shadow-[0_0_20px_-5px_rgba(14,165,233,0.4)] hover:shadow-[0_0_30px_-5px_rgba(14,165,233,0.6)] hover:-translate-y-1">
                            Start a Conversation
                        </Link>
                    </div>
                </motion.article>
            </div>
        </div>
    );
};
export default ProjectDetails;
