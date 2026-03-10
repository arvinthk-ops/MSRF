"use client";

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroSectionData {
    hero?: {
        tagline?: string;
        titlePart1?: string;
        titlePart2?: string;
        videoUrl?: string;
    };
}

export function HeroSection({ data }: { data?: HeroSectionData }) {
    const containerRef = useRef<HTMLDivElement>(null);

    const heroData = data?.hero || {};
    const videoUrl = heroData.videoUrl || "/To_discover_Maradona_s_of_India_1080P.webm";

    return (
        <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">

            {/* Video Background */}
            <video
                key={videoUrl}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-[1]"
            >
                <source src={videoUrl} type="video/webm" />
            </video>

            {/* Cinematic Overlays */}
            <div className="absolute inset-0 z-[2] bg-black/60" />

            {/* Top Protection (Nav) - Refined Cinematic Black */}
            <div className="absolute top-0 left-0 w-full h-64 z-[5] bg-gradient-to-b from-black via-black/40 to-transparent" />

            {/* Bottom Protection (Video Quality) - Fixed Black */}
            <div className="absolute bottom-0 left-0 w-full h-80 z-[5] bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Bottom Cinematic Gradient — Both Themes (always black) */}
            <div className="absolute bottom-0 left-0 w-full h-48 z-[6] pointer-events-none bg-gradient-to-t from-black via-black/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-96 z-[6] pointer-events-none bg-gradient-to-t from-black to-transparent opacity-40" />

            {/* Main Content Layer */}
            <div className="relative z-[10] container mx-auto px-8 md:px-24 h-full flex flex-col items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="relative text-center flex flex-col items-center gap-0"
                >
                    {/* Integrated Tagline */}
                    <motion.span
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="font-display font-black text-xl md:text-2xl lg:text-3xl text-primary uppercase tracking-[0.15em] mb-1 block drop-shadow-2xl z-20"
                    >
                        {heroData.tagline || "മലബാറിന്റെ സ്വന്തം"}
                    </motion.span>

                    <h1 className="relative font-display font-black text-[16vw] lg:text-[13rem] xl:text-[15rem] leading-[0.8] tracking-tighter uppercase text-white drop-shadow-[0_40px_40px_rgba(0,0,0,0.9)] z-10 transition-all duration-700 whitespace-nowrap">
                        {heroData.titlePart1 || "MALABAR"}<br />
                        <span className="text-outline-pitch italic relative inline-block">
                            {heroData.titlePart2 || "CHALLENGERS"}
                        </span>
                    </h1>
                </motion.div>
            </div>

            {/* Glass Pill Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[20] cursor-pointer group"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <div className="flex items-center gap-3 rounded-full border border-white/25 bg-white/5 px-6 py-3 backdrop-blur-xl transition-all duration-300 group-hover:border-primary group-hover:bg-primary/10 group-hover:shadow-[0_0_24px_rgba(250,188,8,0.25)]">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-white/80 group-hover:text-primary transition-colors duration-300">
                        Scroll Down
                    </span>
                    <motion.div
                        animate={{ y: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ArrowDown size={18} className="text-white/70 group-hover:text-primary transition-colors duration-300" />
                    </motion.div>
                </div>
            </motion.div>

        </section>
    );
}
