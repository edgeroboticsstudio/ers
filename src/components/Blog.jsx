import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogData";
import { Calendar, ArrowRight, Cpu, Code, UserCircle } from "lucide-react";

const Blog = () => {
    const categories = [
        { name: "Edge Robotics Studio", icon: <Cpu size={18} /> },
        { name: "Technical", icon: <Code size={18} /> },
        { name: "Personal", icon: <UserCircle size={18} /> }
    ];
    const [activeCategory, setActiveCategory] = useState("Edge Robotics Studio");
    const categoryPosts = blogPosts
        .filter(post => post.category === activeCategory);
    return (
        <div className="pt-32 pb-24 min-h-screen bg-slate-900 border-b border-slate-800 text-white relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-white pb-2"
                    >
                        Blog
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white text-lg max-w-2xl mx-auto"
                    >
                        Insights, experiences, and reflections from the world of robotics and beyond.
                    </motion.p>
                </div>
                <div className="flex flex-wrap gap-4 mb-12 justify-center">
                    {categories.map((category) => (
                        <button
                            key={category.name}
                            onClick={() => setActiveCategory(category.name)}
                            className={`flex items-center gap-2 px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeCategory === category.name
                                    ? "bg-primary text-white shadow-[0_0_15px_rgba(14,165,233,0.5)] border-primary"
                                    : "bg-slate-800/50 text-gray-400 hover:bg-slate-700 hover:text-white border border-slate-700/50"
                                } border`}
                        >
                            {category.icon}
                            <span className="uppercase tracking-wider text-xs">{category.name}</span>
                        </button>
                    ))}
                </div>

                <div className="min-h-[400px]">
                    {categoryPosts.length > 0 && (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {categoryPosts.map((post, index) => (
                                <motion.div
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: (index * 0.1) }}
                                    className={`relative bg-surface/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700/80 flex flex-col h-full transition-all duration-300 group ${!post.disableLink
                                        ? "hover:-translate-y-2 hover:shadow-[0_15px_40px_-15px_rgba(14,165,233,0.2)] hover:border-primary/40"
                                        : "cursor-default hover:-translate-y-1 hover:border-slate-600"
                                        }`}
                                >
                                    {post.disableLink && !post.hideComingSoon && (
                                        <div className="absolute top-4 right-4 z-20 bg-slate-800/90 backdrop-blur-md px-3 py-1 rounded-full border border-slate-700 text-[10px] font-bold uppercase tracking-widest text-primary shadow-lg">
                                            Coming Soon
                                        </div>
                                    )}
                                    {!post.disableLink && (
                                        <Link to={`/blog/${post.slug}/`} className="absolute inset-0 z-10">
                                            <span className="sr-only">Read Post</span>
                                        </Link>
                                    )}
                                    <div className={`relative overflow-hidden ${post.imageAspectRatio || 'h-64'}`}>
                                        <img
                                            src={post.coverImage}
                                            alt={post.title}
                                            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${post.imagePosition || 'object-center'}`}
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex items-center gap-2 text-primary text-sm mb-2">
                                            <Calendar className="w-4 h-4" />
                                            <span>{post.date}</span>
                                        </div>
                                        <h2 className="text-xl font-bold mb-2 transition-colors group-hover:text-primary text-white line-clamp-2 min-h-[3.5rem]">
                                            {post.title}
                                        </h2>
                                        <p className="text-gray-400 text-sm mb-4 text-justify line-clamp-3 min-h-[3.75rem]">
                                            {post.excerpt}
                                        </p>
                                        {!post.disableLink && (
                                            <span className="inline-flex items-center gap-2 text-white font-medium group-hover:text-primary transition-colors mt-auto">
                                                Read More
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        )}
                                        {post.disableLink && !post.hideComingSoon && (
                                            <span className="inline-flex items-center gap-2 text-gray-500 font-medium mt-auto">
                                                Coming Soon
                                                <ArrowRight className="w-4 h-4 opacity-50" />
                                            </span>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Blog;
