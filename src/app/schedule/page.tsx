"use client";

import { motion } from 'framer-motion';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { MagneticWrapper } from '@/components/ui/magnetic-wrapper';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

const matches = [
    {
        id: 'M_01',
        status: 'UPCOMING',
        date: 'MAR 24, 2026',
        time: '19:30 IST',
        opponent: 'KOCHI WHALES',
        logo: 'KW',
        venue: 'EMS STADIUM, KOZHIKODE',
        vibe: 'STADIUM PULSE'
    },
    {
        id: 'M_02',
        status: 'FRIENDLY',
        date: 'APR 02, 2026',
        time: '20:15 IST',
        opponent: 'ARG JUN_B',
        logo: 'AJ',
        venue: 'SOUTH BEACH ARENA',
        vibe: 'GLOBAL BRIDGE'
    }
];

export default function SchedulePage() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-background overflow-x-hidden">
            <Header />

            <section className="pt-48 pb-32 px-8 md:px-24">
                <div className="container mx-auto">

                    {/* Header Strategy */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 border-b border-border pb-24">
                        <div className="lg:col-span-8 space-y-12">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="font-mono text-xs text-primary uppercase tracking-[0.5em]"
                            >
                                SECTOR_V4 // OPERATION CALENDAR
                            </motion.span>
                            <h1 className="font-display font-black text-8xl md:text-[12rem] uppercase tracking-tighter leading-[0.75]">
                                MATCH <br /> <span className="text-outline-brand italic">PULSE</span>
                            </h1>
                        </div>
                        <div className="lg:col-span-4 flex flex-col justify-end">
                            <p className="font-sans text-lg text-foreground/40 leading-relaxed mb-12">
                                Tactical synchronization of the first team and academy across domestic and international fixtures.
                                <span className="text-primary block mt-4 font-bold font-mono text-xs underline tracking-widest">GET TICKETS</span>
                            </p>
                        </div>
                    </div>

                    {/* Timeline Grid (High-Energy Editorial) */}
                    <div className="mt-24 space-y-0">
                        {matches.map((match, i) => (
                            <motion.div
                                key={match.id}
                                initial={{ opacity: 0, scaleY: 0 }}
                                whileInView={{ opacity: 1, scaleY: 1 }}
                                transition={{ delay: i * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="group relative border-b border-border py-16 hover:bg-card transition-colors origin-top"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                                    {/* Status & ID */}
                                    <div className="lg:col-span-2 space-y-2">
                                        <div className="flex items-center gap-4">
                                            <div className="w-2 h-2 bg-primary animate-pulse" />
                                            <span className="font-mono text-xs font-black uppercase tracking-widest text-primary">{match.status}</span>
                                        </div>
                                        <span className="font-mono text-[11px] text-foreground/20 uppercase tracking-[0.3em] block">{match.id}</span>
                                    </div>

                                    {/* Date & Time Cluster */}
                                    <div className="lg:col-span-3">
                                        <div className="flex flex-col gap-1">
                                            <span className="font-display font-black text-4xl uppercase tracking-tighter">{match.date}</span>
                                            <div className="flex items-center gap-4 text-foreground/40 font-mono text-xs uppercase">
                                                <Clock className="w-3 h-3" />
                                                {match.time}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Opponent Cluster */}
                                    <div className="lg:col-span-4 border-l border-border/50 lg:pl-12">
                                        <div className="flex items-center gap-8">
                                            <div className="w-16 h-16 bg-foreground text-background flex items-center justify-center font-display font-black text-2xl p-4 rotate-3 group-hover:rotate-0 transition-transform">
                                                {match.logo}
                                            </div>
                                            <div>
                                                <span className="font-mono text-xs text-foreground/40 uppercase block mb-1">STADIUM_RIVAL</span>
                                                <h3 className="font-display font-black text-4xl uppercase tracking-tighter">VS {match.opponent}</h3>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Venue & Action */}
                                    <div className="lg:col-span-3 flex justify-between items-center bg-primary/0 group-hover:bg-primary/5 p-6 transition-colors">
                                        <div className="space-y-1">
                                            <span className="font-mono text-xs text-foreground/40 uppercase flex items-center gap-2">
                                                <MapPin className="w-3 h-3" />
                                                {match.venue}
                                            </span>
                                            <span className="font-mono text-xs font-bold text-primary italic uppercase tracking-widest">{match.vibe}</span>
                                        </div>
                                        <MagneticWrapper strength={0.3}>
                                            <div className="w-14 h-14 bg-foreground text-background group-hover:bg-primary group-hover:shadow-2xl transition-all flex items-center justify-center cursor-pointer">
                                                <ArrowRight className="w-6 h-6" />
                                            </div>
                                        </MagneticWrapper>
                                    </div>
                                </div>

                                {/* Technical Scaffolding (Background Lines) */}
                                <div className="absolute bottom-0 right-0 w-1/4 h-[1px] bg-primary/20" />
                            </motion.div>
                        ))}
                    </div>

                    {/* Technical Footer Message */}
                    <div className="mt-32 p-12 bg-card border border-border flex flex-col md:flex-row justify-between items-center gap-12">
                        <div className="flex items-center gap-8">
                            <div className="p-4 bg-primary text-background">
                                <Calendar className="w-8 h-8" />
                            </div>
                            <div className="space-y-1">
                                <h4 className="font-display font-black text-2xl uppercase tracking-tighter leading-none">SYNC_YOUR_CALENDAR</h4>
                                <p className="font-mono text-xs text-foreground/40 uppercase tracking-widest">Automatic fixture updates for season 25/26 now available.</p>
                            </div>
                        </div>
                        <MagneticWrapper>
                            <button className="px-12 py-5 bg-foreground text-background font-black uppercase text-xs tracking-[0.3em] hover:bg-primary transition-colors">
                                DOWNLOAD SCHEDULE
                            </button>
                        </MagneticWrapper>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
