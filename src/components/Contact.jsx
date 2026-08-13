import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const Contact = () => {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzoks8UttUXSqevKvMW9B7V9L12NbwjTz4syrPrFxAflAoO9gMkjEDmMGzsfz9Z7jI6/exec"; // We set this up next

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        botField: ""
    });
    const [status, setStatus] = useState("idle"); // 'idle' | 'submitting' | 'success' | 'error'

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

            // We use URLSearchParams to send data as 'application/x-www-form-urlencoded'
            // This makes it a "Simple Request" and avoids CORS preflight issues with Google Apps Script
            const params = new URLSearchParams();
            params.append('name', formData.name);
            params.append('email', formData.email);
            params.append('subject', formData.subject);
            params.append('message', formData.message);
            params.append('token', token);

            const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors", // Use no-cors to bypass the redirect issues
                body: params,
            });

            console.log("Fetch call completed:", response);

            // Note: With no-cors, we cannot read the response body.
            // We assume success if the fetch doesn't throw.
            setStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "", botField: "" });

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
            {/* Background Decorative Element */}
            <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
            <div className="hidden md:block absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -ml-48 -mb-48"></div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
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
                        Have a project in mind or want to learn more about the services? Edge Robotics Studio would love to hear from you.
                    </motion.p>
                </div>
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Contact Information */}
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
                            <p className="text-gray-300">
                                Edge Robotics Studio empowers your journey from idea to creation.
                            </p>
                        </div>
                    </motion.div>
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-surface p-6 sm:p-8 rounded-2xl border border-slate-700/50"
                    >
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                                <label htmlFor="botField">Don't fill this out if you're human:</label>
                                <input type="text" id="botField" name="botField" tabIndex="-1" autoComplete="off" value={formData.botField} onChange={handleChange} />
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-300">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-300">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                    placeholder="How can Edge Robotics Studio help?"
                                />
                            </div>
                            <textarea
                                id="message"
                                name="message"
                                required
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                                placeholder="Describe your project and goals..."
                            ></textarea>
                            {/* reCAPTCHA v3 badge is typically invisible and handled automatically by the provider */}


                            {status === "success" && (
                                <div className="p-4 bg-emerald-500/10 border border-emerald-500/50 rounded-lg flex items-center gap-3 text-emerald-400">
                                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                    <p className="text-sm font-medium">Message sent successfully! Edge Robotics Studio will get back to you soon.</p>
                                </div>
                            )}

                            {status === "error" && (
                                <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg flex items-center gap-3 text-red-400">
                                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                    <p className="text-sm font-medium">Something went wrong. Please try again later.</p>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className="w-full bg-primary hover:bg-primary-hover disabled:bg-slate-700 disabled:cursor-not-allowed text-slate-950 font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_-5px_rgba(14,165,233,0.4)] hover:shadow-[0_0_30px_-5px_rgba(14,165,233,0.6)] group"
                            >
                                {status === "submitting" ? "Sending..." : "Send Message"}
                                {status !== "submitting" && <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                            </button>

                            <p className="text-xs text-gray-400 text-center mt-4">
                                This site is protected by reCAPTCHA and the Google{' '}
                                <a href="https://policies.google.com/privacy" className="underline hover:text-primary transition-colors">Privacy Policy</a> and{' '}
                                <a href="https://policies.google.com/terms" className="underline hover:text-primary transition-colors">Terms of Service</a> apply.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
export default Contact;
