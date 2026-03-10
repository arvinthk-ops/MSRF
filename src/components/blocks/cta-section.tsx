"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { MagneticWrapper } from "@/components/ui/magnetic-wrapper";

type CTAData = {
    badge?: string;
    heading?: string;
    description?: string;
    buttonText?: string;
    buttonLink?: string;
    stats?: Array<{ value: string; label: string }>;
};

const fallbackCTA: Required<CTAData> = {
    badge: "GET IN TOUCH",
    heading: "READY TO TRANSFORM YOUR GAME?",
    description: "Join the premier football academy in Kerala. Our expert coaches are ready to help you achieve your full potential through world-class training methodologies.",
    buttonText: "Enquire Now",
    buttonLink: "/contact",
    stats: [
        { value: "500+", label: "Players Trained" },
        { value: "50+", label: "Expert Coaches" },
        { value: "10+", label: "Tournament Wins" },
        { value: "100%", label: "Player Satisfaction" }
    ],
};

export function CTASection({ data }: { data?: CTAData }) {
    const cta = {
        ...fallbackCTA,
        ...(data || {}),
        stats: data?.stats && data.stats.length > 0 ? data.stats : fallbackCTA.stats,
    };

    const headingParts = cta.heading.split('TRANSFORM');

    return (
        <section className="relative py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.1, 0.15, 0.1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px]"
                />
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative max-w-4xl mx-auto"
                >
                    <GlowingEffect
                        spread={50}
                        glow={true}
                        disabled={false}
                        proximity={64}
                        inactiveZone={0.01}
                    />

                    <div className="relative bg-card border border-border rounded-[2.5rem] p-12 md:p-16 overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/10 opacity-60 pointer-events-none" />

                        <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-500">
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                            <div className="absolute inset-0" style={{
                                backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                                backgroundSize: '32px 32px',
                            }} />
                        </div>

                        <div className="relative z-10 text-center space-y-8">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 text-[10px] font-mono font-bold uppercase tracking-[0.3em] border border-primary/20"
                            >
                                <MessageCircle className="w-3 h-3" />
                                {cta.badge}
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-4xl md:text-6xl lg:text-7xl font-display font-black uppercase tracking-tighter leading-none"
                            >
                                {headingParts[0] || 'READY TO'}
                                <span className="italic text-outline-pitch">TRANSFORM</span>
                                {headingParts[1] || ' YOUR GAME?'}
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed"
                            >
                                {cta.description}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                            >
                                <MagneticWrapper>
                                    <a
                                        href={cta.buttonLink}
                                        className="group relative inline-flex items-center gap-3 bg-primary text-background px-12 py-5 rounded-full font-display font-black uppercase tracking-wider text-sm hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(var(--primary),0.5)]"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        {cta.buttonText}
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </MagneticWrapper>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
                >
                    {cta.stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl md:text-4xl font-display font-black text-primary">
                                {stat.value}
                            </div>
                            <div className="text-xs md:text-sm text-foreground/50 uppercase tracking-wider mt-1">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
