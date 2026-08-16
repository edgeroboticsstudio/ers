import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../data/blogData";
import { Calendar, ChevronLeft, User, Lightbulb, Heart, ExternalLink } from "lucide-react";
import Comments from "./Comments";
const BlogPost = () => {
    const { slug } = useParams();
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post || post.disableLink) {
        return (
            <div className="pt-32 pb-24 min-h-screen bg-background text-white flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold mb-4">
                    {post?.disableLink ? "Content Coming Soon" : "Post not found"}
                </h1>
                <Link to="/blog/" className="text-primary hover:underline flex items-center gap-2">
                    <ChevronLeft className="w-4 h-4" />
                    Back to Blog
                </Link>
            </div>
        );
    }
    return (
        <div className="pt-32 pb-24 min-h-screen bg-slate-900 border-b border-slate-800 text-white relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <Link
                        to="/blog/"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
                    >
                        <ChevronLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-black mb-12 leading-[1.1] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 pb-2">
                        {post.title}
                    </h1>
                    <div className="prose prose-invert max-w-none space-y-8">
                        {post.content.map((item, index) => {
                            if (item.type === "heading") {
                                return (
                                    <h2 key={index} className="text-2xl font-bold text-white mt-12 mb-6">
                                        {item.text}
                                    </h2>
                                );
                            }
                            if (item.type === "subheading") {
                                return (
                                    <h3 key={index} className="text-xl font-semibold text-gray-200 mt-8 mb-4">
                                        {item.text}
                                    </h3>
                                );
                            }
                            if (item.type === "image") {
                                return (
                                    <div key={index} className="my-12 flex justify-center">
                                        <img
                                            src={item.src}
                                            alt={item.alt || `Image from: ${post.title}`}
                                            className="max-h-[500px] w-auto rounded-3xl shadow-2xl border border-slate-700/50 object-cover"
                                        />
                                    </div>
                                );
                            }
                            if (item.type === "callout") {
                                return (
                                    <div key={index} className="my-8 p-6 rounded-2xl bg-sky-500/10 border border-sky-500/30 backdrop-blur-sm">
                                        <div className="flex items-start gap-3">
                                            <Lightbulb className="w-5 h-5 text-sky-400 mt-1 flex-shrink-0" />
                                            <p className={`text-sky-100 text-base leading-relaxed italic ${(post.category === 'Personal' || post.category === 'Technical') ? 'text-justify' : ''}`}>
                                                {item.text}
                                            </p>
                                        </div>
                                    </div>
                                );
                            }
                            if (item.type === "diagram") {
                                const DiagramComponent = item.component;
                                return (
                                    <div key={index} className="my-12 flex justify-center">
                                        <div className="w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-700/50 overflow-hidden bg-slate-800/60 backdrop-blur-sm">
                                            <DiagramComponent />
                                            {item.caption && (
                                                <p className="text-center text-sm text-gray-400 py-3 px-4 border-t border-slate-700/50">
                                                    {item.caption}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                );
                            }
                            return (
                                <p key={index} className={`text-gray-300 text-lg leading-relaxed ${(post.category === 'Personal' || post.category === 'Technical') ? 'text-justify' : ''}`}>
                                    {item.text}
                                </p>
                            );
                        })}
                    </div>

                    {/* Sponsorship and Comments Section (Only for non-personal posts) */}
                    {post.category !== 'Personal' && (
                        <>
                            <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent border border-primary/20 backdrop-blur-sm relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Heart className="w-24 h-24 text-primary fill-primary" />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                        <Heart className="w-6 h-6 text-primary fill-primary" />
                                        Like the work?
                                    </h3>
                                    <p className="text-gray-300 mb-6 max-w-xl">
                                        If you found this helpful, consider supporting the development and sharing of more robotics content.
                                    </p>
                                    <a
                                        href="https://github.com/n3orma/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-xl font-bold transition-all hover:scale-105 shadow-lg shadow-primary/25"
                                    >
                                        Sponsor this on GitHub
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                            <Comments />
                        </>
                    )}
                </motion.div>
            </div>
        </div>
    );
};
export default BlogPost;
