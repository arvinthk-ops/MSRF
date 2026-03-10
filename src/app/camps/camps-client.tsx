"use client";
/* eslint-disable @next/next/no-img-element */

import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, Users, Check, ArrowRight, X } from "lucide-react";
import { useState, useEffect } from "react";

interface Camp {
    id: string;
    name: string;
    code: string;
    tagline: string;
    description: string;
    ageGroup: string;
    timing: string;
    location: string;
    address: string;
    contact: string;
    features: string[];
    image: string;
    mapEmbed: string;
}

// ─── Camp Detail Modal ───────────────────────────────────────────────────────
function CampDetailModal({ camp, onClose }: { camp: Camp; onClose: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 lg:p-12"
            onClick={onClose}
        >
            <div className="absolute inset-0 bg-background/90 backdrop-blur-2xl" />
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative bg-card border border-border rounded-3xl md:rounded-[2.5rem] overflow-hidden w-full max-w-6xl max-h-[90vh] overflow-y-auto flex flex-col"
            >
                <button onClick={onClose} className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                    <X className="w-5 h-5" />
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]">
                    <div className="relative bg-background flex flex-col min-h-[40vh] lg:min-h-0 border-r border-border/30">
                        <div className="h-64 lg:h-1/2 w-full relative">
                            <img src={camp.image} alt={camp.name} className="absolute inset-0 w-full h-full object-cover" />
                        </div>
                        <div className="h-64 lg:h-1/2 w-full relative bg-foreground/5 p-4 md:p-8 flex flex-col">
                            <h3 className="font-mono text-xs text-primary uppercase tracking-widest mb-4 flex items-center gap-2"><MapPin className="w-4 h-4" /> Location View</h3>
                            <div className="flex-1 rounded-2xl overflow-hidden border border-border/50 relative shadow-inner">
                                {camp.mapEmbed && <iframe src={camp.mapEmbed} className="absolute inset-0 w-full h-full grayscale opacity-80" allowFullScreen loading="lazy" />}
                            </div>
                        </div>
                    </div>

                    <div className="p-8 md:p-12 flex flex-col">
                        <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-mono text-[10px] font-bold tracking-widest uppercase rounded-full w-fit mb-6">{camp.code} | {camp.tagline}</span>
                        <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter mb-6">{camp.name}</h2>
                        <p className="text-foreground/70 text-base md:text-lg leading-relaxed mb-8">{camp.description}</p>
                        <div className="space-y-8 mb-8 flex-1">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-background/50 rounded-2xl p-4 border border-border/30">
                                    <div className="flex items-center gap-3 mb-1"><Users className="w-4 h-4 text-primary" /><span className="font-mono text-[10px] text-foreground/50 uppercase">Age Group</span></div>
                                    <div className="font-medium">{camp.ageGroup}</div>
                                </div>
                                <div className="bg-background/50 rounded-2xl p-4 border border-border/30">
                                    <div className="flex items-center gap-3 mb-1"><Clock className="w-4 h-4 text-primary" /><span className="font-mono text-[10px] text-foreground/50 uppercase">Schedule</span></div>
                                    <div className="font-medium">{camp.timing}</div>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-mono text-xs text-foreground/40 uppercase mb-4">Features</h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {camp.features.map((f, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-sm"><Check className="w-3 h-3 text-primary" /> {f}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function CampsClient({ initialCamps }: { initialCamps: Camp[] }) {
    const [selectedCamp, setSelectedCamp] = useState<Camp | null>(null);

    useEffect(() => {
        if (selectedCamp) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = '';
    }, [selectedCamp]);

    return (
        <div className="min-h-screen">
            <AnimatePresence>
                {selectedCamp && <CampDetailModal camp={selectedCamp} onClose={() => setSelectedCamp(null)} />}
            </AnimatePresence>

            <section className="pt-40 pb-20 px-6 md:px-12 lg:px-24">
                <div className="container mx-auto">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="font-mono text-xs text-primary uppercase tracking-[0.6em] block mb-6">Training Operations</span>
                        <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-[0.85] mb-6">The <span className="text-outline-brand italic">Camps</span></h1>
                    </motion.div>

                    <div className="mt-20 space-y-6">
                        {initialCamps.map((camp, i) => (
                            <motion.div
                                key={camp.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                onClick={() => setSelectedCamp(camp)}
                                className="group flex flex-col md:flex-row bg-card border border-border/50 hover:border-primary/50 rounded-3xl overflow-hidden cursor-pointer"
                            >
                                <div className="w-full md:w-1/3 lg:w-1/4 h-56 md:h-auto relative">
                                    <img src={camp.image} alt={camp.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute top-4 left-4 z-10 bg-background/90 px-3 py-1 rounded-full border border-border font-mono text-[10px] text-primary uppercase font-bold tracking-widest">{camp.code}</div>
                                </div>
                                <div className="flex-1 p-8 flex flex-col justify-center">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                        <div>
                                            <h2 className="font-display font-black text-3xl md:text-4xl uppercase tracking-tighter group-hover:text-primary transition-colors">{camp.name}</h2>
                                            <p className="font-display text-lg text-foreground/60 italic mb-6">{camp.tagline}</p>
                                            <div className="flex flex-wrap gap-8">
                                                <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /><span className="text-sm font-medium">{camp.location}</span></div>
                                                <div className="flex items-center gap-2"><Users className="w-4 h-4 text-primary" /><span className="text-sm font-medium">{camp.ageGroup}</span></div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 text-primary font-mono text-sm uppercase font-bold group-hover:gap-5 transition-all">
                                            View Details <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:text-background"><ArrowRight className="w-4 h-4" /></div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
