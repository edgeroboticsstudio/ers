import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogData";
import { Calendar, ArrowRight, Cpu, Code, UserCircle, Sparkles } from "lucide-react";

const categoryDefinitions = [
    {
        name: "Edge Robotics Studio",
        description: "Milestones, updates, and reflections from the studio journey.",
        icon: Cpu,
    },
    {
        name: "Technical",
        description: "In-depth explorations of robotics, drone dynamics, and embedded systems.",
        icon: Code,
    },
    {
        name: "Personal",
        description: "Stories, life lessons, and personal perspectives behind the work.",
        icon: UserCircle,
    },
];

const BlogPostCard = ({ post, index }) => (
    <motion.div
        key={post.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.08 }}
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
                <span className="sr-only">{post.title}</span>
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
);

const Blog = () => {
    const definedNames = categoryDefinitions.map((c) => c.name);
    const postCategories = Array.from(new Set(blogPosts.map((p) => p.category))).filter(Boolean);
    const extraCategories = postCategories
        .filter((cat) => !definedNames.includes(cat))
        .map((cat) => ({
            name: cat,
            description: "",
            icon: Sparkles,
        }));

    const allCategories = [...categoryDefinitions, ...extraCategories];

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

                <div className="space-y-20">
                    {allCategories.map((category) => {
                        const posts = blogPosts.filter((post) => post.category === category.name);
                        if (posts.length === 0) return null;

                        const IconComponent = category.icon;

                        return (
                            <section key={category.name} className="space-y-8">
                                <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 border-b border-slate-800 gap-4">
                                    <div className="flex items-center gap-3.5">
                                        <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                                            <IconComponent size={22} />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                                                {category.name}
                                            </h2>
                                            {category.description && (
                                                <p className="text-sm text-gray-400 mt-1">
                                                    {category.description}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest bg-slate-800/60 px-3 py-1.5 rounded-full border border-slate-700/50 self-start sm:self-auto">
                                        {posts.length} {posts.length === 1 ? "Post" : "Posts"}
                                    </span>
                                </div>

                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {posts.map((post, index) => (
                                        <BlogPostCard key={post.id} post={post} index={index} />
                                    ))}
                                </div>
                            </section>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Blog;
