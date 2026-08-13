import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope, FaDiscord } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className="bg-secondary text-slate-300 py-24 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-24">
                <div className="flex flex-col items-start lg:col-span-5 lg:pr-12">
                    <h3 className="text-2xl font-bold text-white mb-6">Edge Robotics Studio</h3>
                    <p className="text-sm text-slate-400 leading-relaxed text-justify max-w-[350px]" style={{ textAlignLast: 'justify' }}>
                        Bridging the gap between knowledge and creation by making technology, tools, and learning accessible to anyone who wants to learn, build, and innovate.
                    </p>
                </div>
                <div className="lg:col-span-3">
                    <h4 className="text-white font-semibold mb-8 uppercase tracking-wider text-xs">Company</h4>
                    <ul className="space-y-4 text-sm">
                        <li><Link to="/about/" className="hover:text-primary transition-colors">About</Link></li>
                        <li><Link to="/blog/" className="hover:text-primary transition-colors">Blog</Link></li>
                        <li><Link to="/contact/" className="hover:text-primary transition-colors">Contact</Link></li>
                    </ul>
                </div>
                <div className="lg:col-span-4">
                    <h4 className="text-white font-semibold mb-8 uppercase tracking-wider text-xs">Connect</h4>
                    <div className="flex gap-4">
                        <a href="https://github.com/edgeroboticsstudio" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-lg hover:bg-primary hover:text-slate-950 transition-all">
                            <FaGithub size={20} />
                        </a>
                        <a href="https://www.linkedin.com/company/edgeroboticsstudio" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-lg hover:bg-primary hover:text-slate-950 transition-all">
                            <FaLinkedin size={20} />
                        </a>
                        <a href="https://www.youtube.com/@edge_robotics_studio" aria-label="YouTube" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-lg hover:bg-primary hover:text-slate-950 transition-all">
                            <FaYoutube size={20} />
                        </a>
                        <a href="https://discord.gg/xDAVq85zfX" aria-label="Discord" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-lg hover:bg-primary hover:text-slate-950 transition-all">
                            <FaDiscord size={20} />
                        </a>

                        <a href="mailto:edgeroboticsstudio@gmail.com" aria-label="Email" className="p-2 bg-slate-800 rounded-lg hover:bg-primary hover:text-slate-950 transition-all">
                            <FaEnvelope size={20} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-400">
                © {new Date().getFullYear()} Edge Robotics Studio. All rights reserved.
            </div>
        </footer>
    );
};
export default Footer;
