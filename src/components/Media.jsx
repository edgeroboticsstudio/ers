import { useState, useRef, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Video, X, Play, Maximize2 } from "lucide-react";
import { FaYoutube } from "react-icons/fa";
import {
    workshopPhotos,
    projectVideos,
    youtubeVideos
} from "../data/mediaData";

function ProjectVideoCard({ video, idx, onPlay, onPause, onOpenModal }) {
    const videoRef = useRef(null);
    const [hasStarted, setHasStarted] = useState(false);

    const handlePlayClick = (e) => {
        e.stopPropagation();
        if (videoRef.current) {
            videoRef.current.play().then(() => {
                setHasStarted(true);
            }).catch(() => {
                // If autoplay prevented, set controls so user can tap native play
                setHasStarted(true);
            });
        }
    };

    const handleVideoPlay = () => {
        setHasStarted(true);
        if (onPlay && videoRef.current) {
            onPlay(videoRef.current);
        }
    };

    const handleVideoPause = () => {
        if (onPause) {
            onPause();
        }
    };

    const handleVideoEnded = () => {
        setHasStarted(false);
        if (onPause) {
            onPause();
        }
    };

    return (
        <div
            className="w-[300px] sm:w-[380px] md:w-[480px] shrink-0 aspect-video rounded-3xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-lg hover:border-primary/40 transition-all relative group"
        >
            {video.src ? (
                <>
                    <video
                        ref={videoRef}
                        src={`${video.src}#t=0.001`}
                        poster={video.poster || undefined}
                        controls={hasStarted}
                        preload="metadata"
                        playsInline
                        onPlay={handleVideoPlay}
                        onPause={handleVideoPause}
                        onEnded={handleVideoEnded}
                        className="w-full h-full object-cover bg-black"
                    />

                    {/* Pre-play overlay with thumbnail & play button for mobile and desktop */}
                    {!hasStarted && (
                        <div
                            onClick={handlePlayClick}
                            className="absolute inset-0 bg-slate-950/25 hover:bg-slate-950/10 flex items-center justify-center transition-all cursor-pointer"
                        >
                            {/* Expand button on top-right for theater view */}
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onOpenModal(video);
                                }}
                                aria-label="Watch in Theater Mode"
                                className="absolute top-3 right-3 p-2.5 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-white hover:border-primary/60 hover:bg-slate-800 transition-all z-10 cursor-pointer shadow-md"
                                title="Watch in Theater Mode"
                            >
                                <Maximize2 size={16} />
                            </button>

                            {/* Centered Glowing Branded Play Button */}
                            <button
                                type="button"
                                aria-label="Play Project Video"
                                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/90 hover:bg-primary text-slate-950 flex items-center justify-center shadow-[0_0_25px_rgba(14,165,233,0.5)] transform transition-transform group-hover:scale-110 active:scale-95 cursor-pointer"
                            >
                                <Play size={24} className="ml-1 fill-slate-950" />
                            </button>
                        </div>
                    )}
                </>
            ) : (
                <iframe
                    src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0`}
                    title={`Project Video ${idx + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="w-full h-full border-0"
                ></iframe>
            )}
        </div>
    );
}

export default function Media() {
    const { section } = useParams();

    // Workshop photo lightbox
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    // Project video modal (theater mode)
    const [selectedVideo, setSelectedVideo] = useState(null);

    // Project video horizontal auto-scroll
    const projectScrollRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);
    const activeVideoRef = useRef(null);

    // Duplicate project items for an uninterrupted seamless loop
    const loopedProjectVideos = projectVideos.length < 5
        ? [...projectVideos, ...projectVideos, ...projectVideos]
        : [...projectVideos, ...projectVideos];

    // Smooth horizontal marquee scroll
    useEffect(() => {
        const el = projectScrollRef.current;
        if (!el) return;

        let animationFrameId;
        const speed = 0.8; // Smooth auto-scroll speed

        const animateScroll = () => {
            if (!isPaused && el) {
                el.scrollLeft += speed;
                // Seamlessly wrap around when reached half width
                const maxScroll = (el.scrollWidth - el.clientWidth) / 2;
                if (el.scrollLeft >= maxScroll) {
                    el.scrollLeft -= maxScroll;
                }
            }
            animationFrameId = requestAnimationFrame(animateScroll);
        };

        animationFrameId = requestAnimationFrame(animateScroll);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused]);

    // Scroll to specific section if specified in route param (/media/:section)
    useEffect(() => {
        if (section) {
            const targetId = section.toLowerCase();
            const el = document.getElementById(targetId);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [section]);

    // Handle pausing when any video begins playback
    const handleVideoPlay = useCallback((currentVideoEl) => {
        activeVideoRef.current = currentVideoEl;
        setIsPaused(true);

        // Pause any other video element playing on the page
        document.querySelectorAll("video").forEach((v) => {
            if (v !== currentVideoEl && !v.paused) {
                v.pause();
            }
        });
    }, []);

    const handleVideoPause = useCallback(() => {
        activeVideoRef.current = null;
        setIsPaused(false);
    }, []);

    // Lightbox keyboard listener
    useEffect(() => {
        if (!selectedPhoto && !selectedVideo) return;
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setSelectedPhoto(null);
                setSelectedVideo(null);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedPhoto, selectedVideo]);

    return (
        <div className="pt-32 pb-24 min-h-screen bg-slate-900 border-b border-slate-800 text-white relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Media Title & Subtitle */}
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-white pb-2"
                    >
                        Media
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white text-lg max-w-2xl mx-auto"
                    >
                        A visual showcase of our workshops, project demonstrations, and video content.
                    </motion.p>
                </div>

                <div className="space-y-20">
                    {/* SECTION 1: WORKSHOP */}
                    <section id="workshop" className="space-y-8 scroll-mt-24">
                        <div className="flex items-center gap-3.5 pb-4 border-b border-slate-800">
                            <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                                <Camera size={22} />
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                                    Workshop
                                </h2>
                            </div>
                        </div>

                        {/* Cards: Photo and fully accommodated description */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {workshopPhotos.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    onClick={() => setSelectedPhoto(item)}
                                    className="relative bg-surface/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700/80 flex flex-col h-full transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_15px_40px_-15px_rgba(14,165,233,0.2)] hover:border-primary/40 cursor-pointer"
                                >
                                    <div className="relative overflow-hidden h-64 sm:h-72 w-full">
                                        <img
                                            src={item.image}
                                            alt={item.description}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 object-center"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col justify-center bg-slate-900/60">
                                        <p className="text-gray-200 text-sm md:text-base leading-relaxed" title={item.description}>
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* SECTION 2: PROJECT (Automatic Horizontal Scrolling, With Thumbnail Posters & Mobile Touch Support) */}
                    <section id="project" className="space-y-8 scroll-mt-24">
                        <div className="flex items-center gap-3.5 pb-4 border-b border-slate-800">
                            <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                                <Video size={22} />
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                                    Project
                                </h2>
                            </div>
                        </div>

                        {/* Auto-scrolling horizontal strip with desktop hover and mobile touch pause */}
                        <div
                            ref={projectScrollRef}
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => {
                                if (!activeVideoRef.current) setIsPaused(false);
                            }}
                            onTouchStart={() => setIsPaused(true)}
                            onTouchEnd={() => {
                                if (!activeVideoRef.current) setIsPaused(false);
                            }}
                            className="flex gap-6 overflow-x-auto py-2 select-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                        >
                            {loopedProjectVideos.map((video, idx) => (
                                <ProjectVideoCard
                                    key={`${video.id}-${idx}`}
                                    video={video}
                                    idx={idx}
                                    onPlay={handleVideoPlay}
                                    onPause={handleVideoPause}
                                    onOpenModal={(v) => {
                                        setIsPaused(true);
                                        setSelectedVideo(v);
                                    }}
                                />
                            ))}
                        </div>
                    </section>

                    {/* SECTION 3: YT (Direct YouTube Videos) */}
                    <section id="youtube" className="space-y-8 scroll-mt-24">
                        <div className="flex items-center gap-3.5 pb-4 border-b border-slate-800">
                            <div className="p-2.5 rounded-xl bg-red-600/10 border border-red-500/20 text-red-500">
                                <FaYoutube size={22} />
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                                    YouTube
                                </h2>
                            </div>
                        </div>

                        {/* Direct YouTube Video Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {youtubeVideos.map((video) => (
                                <div
                                    key={video.id}
                                    className="aspect-video w-full rounded-3xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-lg hover:border-red-500/40 transition-colors"
                                >
                                    <iframe
                                        src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0`}
                                        title="YouTube Video"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        loading="lazy"
                                        className="w-full h-full border-0"
                                    ></iframe>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>

            {/* LIGHTBOX FOR WORKSHOP PHOTOS */}
            <AnimatePresence>
                {selectedPhoto && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[120] bg-slate-950/90 backdrop-blur-xl flex flex-col items-center justify-center p-6"
                        onClick={() => setSelectedPhoto(null)}
                    >
                        <button
                            onClick={() => setSelectedPhoto(null)}
                            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
                            aria-label="Close"
                        >
                            <X size={20} />
                        </button>
                        <div
                            className="max-w-4xl max-h-[80vh] flex flex-col items-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedPhoto.image}
                                alt={selectedPhoto.description}
                                className="max-h-[70vh] w-auto max-w-full rounded-2xl shadow-2xl border border-white/10 object-contain"
                            />
                            <p className="text-white text-base md:text-lg font-medium mt-4 text-center max-w-2xl px-4 leading-relaxed">
                                {selectedPhoto.description}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* LIGHTBOX FOR PROJECT VIDEOS (THEATER MODE) */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[120] bg-slate-950/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-6"
                        onClick={() => {
                            setSelectedVideo(null);
                            if (!activeVideoRef.current) setIsPaused(false);
                        }}
                    >
                        <button
                            onClick={() => {
                                setSelectedVideo(null);
                                if (!activeVideoRef.current) setIsPaused(false);
                            }}
                            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer z-20"
                            aria-label="Close"
                        >
                            <X size={20} />
                        </button>
                        <div
                            className="w-full max-w-4xl max-h-[85vh] flex flex-col items-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {selectedVideo.src ? (
                                <video
                                    src={`${selectedVideo.src}#t=0.001`}
                                    poster={selectedVideo.poster || undefined}
                                    controls
                                    autoPlay
                                    playsInline
                                    className="w-full max-h-[75vh] rounded-2xl shadow-2xl border border-white/10 object-contain bg-black"
                                />
                            ) : (
                                <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                    <iframe
                                        src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                                        title="Project Video"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full border-0"
                                    ></iframe>
                                </div>
                            )}
                            <p className="text-slate-400 text-sm mt-3 text-center">
                                {selectedVideo.name || "Project Demonstration Video"}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
