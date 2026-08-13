import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100 && !mobileMenuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about/" },
    { name: "Studio", href: "/studio/" },
    { name: "Blog", href: "/blog/" },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 w-full flex justify-center z-[100] pointer-events-none p-4 md:p-6 transition-all">
        <motion.nav
          variants={{
            visible: { y: 0, opacity: 1 },
            hidden: { y: -100, opacity: 0 },
          }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-auto w-full max-w-6xl bg-slate-900/40 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/50 rounded-full h-16 md:h-[72px] flex items-center justify-between px-3 md:px-3 text-white overflow-visible relative"
        >
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 relative z-50 md:pl-5 group" onClick={() => setMobileMenuOpen(false)}>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-md rounded-full scale-110 group-hover:bg-primary/40 transition-colors"></div>
              <img src={logo} className="relative w-8 h-8 md:w-10 md:h-10 z-10" alt="Logo" />
            </div>
            <span className="font-medium tracking-wider text-sm lg:text-base hidden xl:block whitespace-nowrap">
              Edge Robotics Studio
            </span>
          </Link>

          {/* Center Pill Menu for Desktop */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 bg-slate-800/40 backdrop-blur-lg p-1.5 rounded-full border border-white/5 shadow-inner">
             {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <>
                    <button className="flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:bg-white/10 text-gray-300 hover:text-white">
                      {link.name}
                      <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                    </button>
                    
                    {/* Modern Floating Dropdown */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-60 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 -translate-y-4 group-hover:translate-y-0">
                      <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-3 shadow-2xl flex flex-col gap-1 relative overflow-hidden">
                        <div className="hidden md:block absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] -z-10 rounded-full"></div>
                        {link.dropdown.map(drop => (
                          <Link 
                            key={drop.name} 
                            to={drop.href}
                            className={`px-4 py-3 text-sm rounded-2xl transition-all flex items-center ${location.pathname === drop.href ? "bg-primary/20 text-primary font-semibold" : "text-gray-300 hover:bg-white/10 hover:text-white"}`}
                          >
                            <span className="relative z-10">{drop.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.href}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all block ${location.pathname === link.href ? "bg-white/10 text-white shadow-md border border-white/5" : "text-gray-300 hover:text-white hover:bg-white/5"}`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
          
          {/* Action Button & Hamburger */}
          <div className="flex items-center gap-3 relative z-50 md:pr-2">
            <Link
              to="/contact/"
              className="hidden md:flex items-center justify-center px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-slate-950 text-sm font-medium transition-all shadow-lg hover:-translate-y-0.5 whitespace-nowrap"
            >
              Contact Us
            </Link>
            
            <button 
               className="lg:hidden w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white transition-all hover:bg-white/10 active:scale-95"
               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
               aria-label="Toggle menu"
            >
               {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Fullscreen Blur Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-2xl lg:hidden overflow-y-auto text-white flex flex-col pt-32 pb-20"
          >
            {/* Ambient Background Glows */}
            <div className="hidden md:block absolute top-1/4 left-0 w-64 h-64 bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="hidden md:block absolute bottom-1/4 right-0 w-64 h-64 bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="absolute top-6 right-4 md:right-8 z-[100]">
                 <button 
                   className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white transition-all active:scale-95"
                   onClick={() => setMobileMenuOpen(false)}
                 >
                    <X size={24} />
                 </button>
            </div>

            <div className="flex flex-col items-center gap-10 w-full px-6 relative z-10 flex-1 justify-center">
              {navLinks.map((link, i) => (
                <motion.div 
                   key={link.name}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: i * 0.05 }}
                   className="w-full flex flex-col items-center"
                >
                  {link.dropdown ? (
                    <div className="flex flex-col items-center gap-6 w-full mt-4">
                      <span className="text-xs font-black text-primary/80 uppercase tracking-[0.3em]">{link.name}</span>
                      <div className="flex flex-wrap justify-center gap-3 w-full max-w-sm">
                        {link.dropdown.map(drop => (
                          <Link
                            key={drop.name}
                            to={drop.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`px-5 py-3 rounded-2xl text-base font-medium transition-all shadow-md ${
                              location.pathname === drop.href ? "bg-primary text-slate-950 font-bold" : "bg-slate-800/80 border border-white/5 text-gray-300 hover:bg-slate-700 hover:text-white"
                            }`}
                          >
                            {drop.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-4xl md:text-5xl font-black tracking-tight transition-all ${
                        location.pathname === link.href ? "text-white" : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Mobile Contact Button fixed at bottom */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4 }}
               className="mt-16 px-6 w-full flex justify-center"
            >
              <Link
                to="/contact/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center w-full max-w-xs px-8 py-4 bg-primary text-slate-950 rounded-full font-medium text-lg shadow-[0_0_30px_rgba(30,144,255,0.4)] hover:scale-[1.02] transition-all"
              >
                Contact Us
              </Link>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
