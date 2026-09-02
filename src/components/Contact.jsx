import { useState, useEffect, useMemo, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
    Mail, 
    Phone, 
    MapPin, 
    Send, 
    CheckCircle, 
    AlertCircle, 
    ChevronDown, 
    Check, 
    X, 
    RotateCcw,
    CheckCheck
} from "lucide-react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const CATEGORIES = [
    {
        id: "service",
        label: "Service",
        options: [
            "Embedded System Software",
            "Robotics Software (ROS2)",
            "Simulation & Digital Twin",
            "Computer Vision & AI",
            "Navigation & Control",
            "System Integration",
            "PCB Design & Hardware",
            "Mechanical Design & CAD",
            "Testing & Validation",
            "DevOps for Robotics",
            "Rapid Prototyping",
            "Technical Documentation",
            "Education & Training",
            "Custom / Other Service"
        ]
    },
    {
        id: "project",
        label: "Project",
        options: [
            "Edge AI Manipulator",
            "Autonomous Mobile Robot (AMR)",
            "Custom Robotic Arm",
            "Vision & Perception Pipeline",
            "Turnkey R&D Development",
            "Custom Robotics Project",
            "Other Project Collaboration"
        ]
    },
    {
        id: "facility",
        label: "Facility",
        options: [
            "Prototyping & 3D Fabrication Lab",
            "Hardware & PCB Bring-up Bench",
            "Robotics Testing Arena",
            "High-Performance Simulation Cluster",
            "Lab Visit / Facility Tour",
            "Equipment & Tool Access",
            "Other Facility Inquiry"
        ]
    },
    {
        id: "product",
        label: "Product",
        options: [
            "Edge Robotics Controllers",
            "Embedded AI & Vision Modules",
            "Autonomous Development Kits",
            "Custom Sensor Assemblies",
            "Pre-order / Catalog Inquiry",
            "Other Product Inquiry"
        ]
    },
    {
        id: "course",
        label: "Course",
        options: [
            "ROS2 & Robotics Software Mastery",
            "Embedded Firmware & RTOS",
            "Computer Vision & AI for Robotics",
            "PCB Design & Hardware Prototyping",
            "Autonomous Navigation (SLAM & Nav2)",
            "Corporate / Academic Workshop",
            "Other Course Inquiry"
        ]
    }
];

const Contact = () => {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [searchParams] = useSearchParams();
    const dropdownRef = useRef(null);
    const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzoks8UttUXSqevKvMW9B7V9L12NbwjTz4syrPrFxAflAoO9gMkjEDmMGzsfz9Z7jI6/exec";

    // Initialize Category & Sub-options from URL query params or defaults
    const initialCategory = useMemo(() => {
        const typeParam = searchParams.get("type")?.toLowerCase();
        const matched = CATEGORIES.find(c => c.id === typeParam || c.label.toLowerCase() === typeParam);
        return matched ? matched.id : "service";
    }, [searchParams]);

    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        botField: ""
    });
    const [status, setStatus] = useState("idle"); // 'idle' | 'submitting' | 'success' | 'error'

    // Close sub-dropdown on click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsSubDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Handle initial preselected option from query params (e.g., ?selected=Robotics+Software)
    useEffect(() => {
        const selectedParam = searchParams.get("selected");
        if (selectedParam) {
            const currentCat = CATEGORIES.find(c => c.id === selectedCategory);
            if (currentCat) {
                const found = currentCat.options.find(
                    opt => opt.toLowerCase().includes(selectedParam.toLowerCase()) || 
                           selectedParam.toLowerCase().includes(opt.toLowerCase())
                );
                if (found) {
                    setSelectedOptions([found]);
                }
            }
        }
    }, [selectedCategory, searchParams]);

    const currentCategoryData = useMemo(() => {
        return CATEGORIES.find(c => c.id === selectedCategory) || CATEGORIES[0];
    }, [selectedCategory]);

    const handleCategorySelect = (categoryId) => {
        setSelectedCategory(categoryId);
        setSelectedOptions([]); // Reset sub-options when switching category
        setIsSubDropdownOpen(false);
    };

    const toggleOption = (option) => {
        setSelectedOptions(prev => 
            prev.includes(option)
                ? prev.filter(item => item !== option)
                : [...prev, option]
        );
    };

    const handleSelectAll = () => {
        setSelectedOptions([...currentCategoryData.options]);
    };

    const handleClearAll = () => {
        setSelectedOptions([]);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id || e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Spam Protection 1: Honeypot check
        if (formData.botField !== "") {
            console.log("Bot detected via honeypot.");
            return;
        }

        // Spam Protection 2: Google reCAPTCHA v3 check
        if (!executeRecaptcha) {
            alert("Security check is not ready. Please try again in a few seconds.");
            return;
        }

        if (!GOOGLE_APPS_SCRIPT_URL.startsWith("http")) {
            alert("Error: Google Apps Script URL is not set up yet.");
            return;
        }

        setStatus("submitting");

        try {
            const token = await executeRecaptcha('contact_form');
            const categoryLabel = currentCategoryData.label;
            const optionsString = selectedOptions.length > 0 ? selectedOptions.join(", ") : "None specified";

            // Format message body to embed category details cleanly for email/backend compatibility
            const formattedMessage = `[Category: ${categoryLabel}]\n[Selected Options: ${optionsString}]\n\n${formData.message}`;

            const params = new URLSearchParams();
            params.append('name', formData.name);
            params.append('email', formData.email);
            params.append('subject', formData.subject || `Inquiry: ${categoryLabel} - ${optionsString}`);
            params.append('category', categoryLabel);
            params.append('inquiryType', categoryLabel);
            params.append('selectedOptions', optionsString);
            params.append('message', formattedMessage);
            params.append('token', token);

            const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                body: params,
            });

            console.log("Fetch call completed:", response);

            setStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "", botField: "" });
            setSelectedOptions([]);

        } catch (error) {
            setStatus("error");
            console.error("Submission failed at:", new Date().toLocaleTimeString());
            console.error("Error details:", error);
            if (error.message) console.error("Error message:", error.message);
        }
    };

    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6 text-primary" />,
            label: "Email",
            value: "edgeroboticsstudio@gmail.com",
            href: "mailto:edgeroboticsstudio@gmail.com",
        },
        {
            icon: <Phone className="w-6 h-6 text-primary" />,
            label: "Phone",
            value: "+91 6352453903",
            href: "tel:+91 6352453903",
        },
        {
            icon: <MapPin className="w-6 h-6 text-primary" />,
            label: "Address",
            value: "Ahmedabad, India",
        },
    ];

    return (
        <section id="contact" className="pt-32 pb-24 min-h-screen bg-background relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none"></div>
            <div className="hidden md:block absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -ml-48 -mb-48 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-6 tracking-tight"
                    >
                        Get in Touch
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white text-lg"
                    >
                        Have a project in mind or want to learn more about our services, facilities, or courses? Edge Robotics Studio would love to hear from you.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Contact Information Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-surface/50 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-slate-700/50 shadow-xl hover:border-primary/30 transition-colors">
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <a
                                        key={index}
                                        href={info.href}
                                        className="flex items-center gap-4 group transition-all duration-300 hover:-translate-y-1 bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:border-primary/50 hover:shadow-[0_10px_20px_-10px_rgba(14,165,233,0.15)]"
                                    >
                                        <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-primary/10 transition-colors">
                                            {info.icon}
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="text-sm text-gray-400">{info.label}</p>
                                            <p className="text-white font-medium group-hover:text-primary transition-colors break-all">
                                                {info.value}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-primary/20 via-primary/5 to-transparent p-6 sm:p-8 rounded-3xl border border-primary/20 backdrop-blur-md shadow-[0_0_30px_-10px_rgba(14,165,233,0.2)]">
                            <h3 className="text-xl font-bold text-white mb-4">Let's Build the Future</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Edge Robotics Studio empowers your journey from idea to creation. We deliver full-stack robotics, embedded systems, custom PCB hardware, and AI perception pipelines.
                            </p>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-surface p-6 sm:p-8 rounded-3xl border border-slate-700/50 shadow-2xl"
                    >
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            {/* Honeypot anti-spam */}
                            <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                                <label htmlFor="botField">Don't fill this out if you're human:</label>
                                <input 
                                    type="text" 
                                    id="botField" 
                                    name="botField" 
                                    tabIndex="-1" 
                                    autoComplete="off" 
                                    value={formData.botField} 
                                    onChange={handleChange} 
                                />
                            </div>

                            {/* Section 1: User Details (Name & Email) */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-300">
                                        Full Name <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-300">
                                        Email Address <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            {/* Section 2: 2-Step Dropdowns (Main Category + Sub Category) */}
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Step 1: Main Category Dropdown */}
                                <div className="space-y-2">
                                    <label htmlFor="category" className="text-sm font-medium text-gray-300">
                                        Category <span className="text-red-400">*</span>
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="category"
                                            value={selectedCategory}
                                            onChange={(e) => handleCategorySelect(e.target.value)}
                                            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer pr-10 text-sm"
                                        >
                                            {CATEGORIES.map((cat) => (
                                                <option key={cat.id} value={cat.id} className="bg-slate-900 text-white">
                                                    {cat.label}
                                                </option>
                                            ))}
                                        </select>
                                        <ChevronDown className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                                    </div>
                                </div>

                                {/* Step 2: Sub-Category / Requirement Multi-Select Dropdown */}
                                <div className="space-y-2 relative" ref={dropdownRef}>
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm font-medium text-gray-300">
                                            {currentCategoryData.label} Requirement(s)
                                        </label>
                                        {selectedOptions.length > 0 && (
                                            <span className="text-xs text-primary font-medium">
                                                {selectedOptions.length} selected
                                            </span>
                                        )}
                                    </div>

                                    {/* Dropdown Trigger Button */}
                                    <button
                                        type="button"
                                        onClick={() => setIsSubDropdownOpen(prev => !prev)}
                                        className={`w-full bg-slate-800 border rounded-lg px-4 py-3 text-left flex items-center justify-between cursor-pointer transition-all ${
                                            isSubDropdownOpen 
                                                ? "border-primary ring-2 ring-primary/50 text-white" 
                                                : "border-slate-700 hover:border-slate-500 text-gray-300"
                                        }`}
                                    >
                                        <span className="truncate pr-2 text-sm">
                                            {selectedOptions.length === 0 
                                                ? `Select ${currentCategoryData.label} options...` 
                                                : selectedOptions.length === 1 
                                                    ? selectedOptions[0] 
                                                    : `${selectedOptions.length} options selected`
                                            }
                                        </span>
                                        <ChevronDown className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${isSubDropdownOpen ? "rotate-180 text-primary" : ""}`} />
                                    </button>

                                    {/* Multi-Select Dropdown Popup */}
                                    <AnimatePresence>
                                        {isSubDropdownOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -6, scale: 0.98 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: -6, scale: 0.98 }}
                                                transition={{ duration: 0.15 }}
                                                className="absolute top-full left-0 right-0 mt-2 z-40 bg-slate-900/95 backdrop-blur-xl border border-slate-700 rounded-xl shadow-2xl p-3 space-y-2.5 max-h-64 flex flex-col"
                                            >
                                                {/* Header Controls */}
                                                <div className="flex items-center justify-between px-1 text-xs border-b border-slate-800 pb-2 shrink-0">
                                                    <span className="text-gray-400 font-medium">Choose one or multiple:</span>
                                                    <div className="flex items-center gap-3">
                                                        <button
                                                            type="button"
                                                            onClick={handleSelectAll}
                                                            className="text-primary hover:underline flex items-center gap-1 cursor-pointer font-medium"
                                                        >
                                                            <CheckCheck className="w-3.5 h-3.5" />
                                                            <span>Select All</span>
                                                        </button>
                                                        {selectedOptions.length > 0 && (
                                                            <button
                                                                type="button"
                                                                onClick={handleClearAll}
                                                                className="text-gray-400 hover:text-red-400 flex items-center gap-1 cursor-pointer font-medium"
                                                            >
                                                                <RotateCcw className="w-3.5 h-3.5" />
                                                                <span>Clear</span>
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Options list with custom checkboxes */}
                                                <div className="overflow-y-auto space-y-1 pr-1 flex-1 max-h-44">
                                                    {currentCategoryData.options.map((option) => {
                                                        const isSelected = selectedOptions.includes(option);
                                                        return (
                                                            <button
                                                                key={option}
                                                                type="button"
                                                                onClick={() => toggleOption(option)}
                                                                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs sm:text-sm text-left transition-colors cursor-pointer ${
                                                                    isSelected
                                                                        ? "bg-primary/20 text-white font-medium"
                                                                        : "text-gray-300 hover:bg-slate-800 hover:text-white"
                                                                }`}
                                                            >
                                                                <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${
                                                                    isSelected 
                                                                        ? "bg-primary border-primary text-slate-950" 
                                                                        : "border-slate-600 bg-slate-800/60"
                                                                }`}>
                                                                    {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                                                                </div>
                                                                <span className="truncate">{option}</span>
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                            {/* Selected Sub-options Tags Preview */}
                            {selectedOptions.length > 0 && (
                                <div className="flex flex-wrap gap-2 pt-1">
                                    {selectedOptions.map((opt) => (
                                        <span
                                            key={opt}
                                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-primary/15 border border-primary/30 text-primary text-xs font-medium"
                                        >
                                            <span className="truncate max-w-[220px]">{opt}</span>
                                            <button
                                                type="button"
                                                onClick={() => toggleOption(opt)}
                                                className="hover:text-white cursor-pointer ml-0.5 text-primary/70 hover:text-white"
                                            >
                                                <X className="w-3.5 h-3.5" />
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Section 3: Subject */}
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                                    Subject <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                                    placeholder={
                                        selectedCategory === "service" 
                                            ? "e.g., ROS2 Robotics Software & Embedded Development"
                                            : `e.g., Inquiry regarding ${currentCategoryData.label}`
                                    }
                                />
                            </div>

                            {/* Section 4: Description / Message */}
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-300 flex items-center justify-between">
                                    <span>Project Description / Message <span className="text-red-400">*</span></span>
                                    <span className="text-xs text-gray-400 font-normal">Tell us about your requirements</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none text-sm leading-relaxed"
                                    placeholder="Describe your project, timeline, deliverables, and specific goals..."
                                ></textarea>
                            </div>

                            {/* Feedback messages */}
                            {status === "success" && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-emerald-500/10 border border-emerald-500/50 rounded-xl flex items-center gap-3 text-emerald-400"
                                >
                                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                    <p className="text-sm font-medium">Message sent successfully! Edge Robotics Studio will get back to you soon.</p>
                                </motion.div>
                            )}

                            {status === "error" && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-red-500/10 border border-red-500/50 rounded-xl flex items-center gap-3 text-red-400"
                                >
                                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                    <p className="text-sm font-medium">Something went wrong. Please try again or reach us via email.</p>
                                </motion.div>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className="w-full bg-primary hover:bg-primary-hover disabled:bg-slate-700 disabled:cursor-not-allowed text-slate-950 font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_-5px_rgba(14,165,233,0.4)] hover:shadow-[0_0_30px_-5px_rgba(14,165,233,0.6)] cursor-pointer group"
                            >
                                {status === "submitting" ? (
                                    <span>Sending Message...</span>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </button>

                            <p className="text-xs text-gray-400 text-center mt-4">
                                This site is protected by reCAPTCHA and the Google{' '}
                                <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="underline hover:text-primary transition-colors">Privacy Policy</a> and{' '}
                                <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer" className="underline hover:text-primary transition-colors">Terms of Service</a> apply.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;




