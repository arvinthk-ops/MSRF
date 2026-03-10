"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, Play, Activity } from 'lucide-react';
import { AnimatedBorder } from '@/components/ui/animated-border';

interface Match {
    id: string;
    competition: string;
    home: string;
    away: string;
    time: string;
    date: string;
    venue: string;
    status: string;
    score: string;
    videoUrl: string | null;
    homeScorers?: string[];
    awayScorers?: string[];
}

// ─── Match Detail Modal ──────────────────────────────────────────────────────
function MatchDetailModal({ match, onClose }: { match: Match; onClose: () => void }) {
    const isFinished = match.status === "FINISHED";

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={onClose}
        >
            <div className="absolute inset-0 bg-background/90 backdrop-blur-3xl" />
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-[2rem] shadow-2xl custom-scrollbar"
            >
                <div className="sticky top-0 z-20 flex justify-between items-center p-6 bg-card/80 backdrop-blur-md border-b border-border/50">
                    <div className="flex items-center gap-4">
                        <span className="px-4 py-1.5 bg-primary/10 border border-primary/20 text-primary font-mono text-xs font-bold uppercase tracking-widest rounded-full flex items-center gap-2">
                            <Activity className="w-4 h-4" /> MATCH CENTER
                        </span>
                        <span className="font-mono text-foreground/50 text-xs hidden sm:block">{match.competition}</span>
                    </div>
                    <button onClick={onClose} className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-background transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-8 md:p-12 space-y-16">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24">
                        <div className="text-center w-full md:w-1/3 flex flex-col items-center">
                            <h2 className="font-display font-black text-5xl md:text-7xl uppercase mb-6">{match.home}</h2>
                            {isFinished && match.homeScorers && (
                                <div className="space-y-1">
                                    {match.homeScorers.map(s => <div key={s} className="text-foreground/80 font-mono text-xs uppercase tracking-widest">{s}</div>)}
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col items-center shrink-0">
                            <div className="px-6 py-2 bg-background border border-border rounded-full font-mono text-[10px] tracking-[0.2em] mb-6 uppercase">{match.date}</div>
                            <div className="font-display font-black text-7xl md:text-9xl text-primary tracking-tighter">{match.score}</div>
                            <div className="px-6 py-2 font-mono text-[10px] tracking-[0.2em] mt-6 uppercase text-foreground/40 border border-border/50 rounded-full">{match.status}</div>
                        </div>
                        <div className="text-center w-full md:w-1/3 flex flex-col items-center">
                            <h2 className="font-display font-black text-5xl md:text-7xl uppercase text-foreground/50 mb-6">{match.away}</h2>
                            {isFinished && match.awayScorers && (
                                <div className="space-y-1">
                                    {match.awayScorers.map(s => <div key={s} className="text-foreground/40 font-mono text-xs uppercase tracking-widest">{s}</div>)}
                                </div>
                            )}
                        </div>
                    </div>

                    {match.videoUrl && (
                        <div className="max-w-4xl mx-auto space-y-6">
                            <div className="flex items-center justify-center gap-3">
                                <span className="w-8 h-px bg-primary" />
                                <h3 className="font-display font-black text-xl uppercase tracking-widest flex items-center gap-3"><Play className="w-5 h-5" /> HIGHLIGHTS</h3>
                                <span className="w-8 h-px bg-primary" />
                            </div>
                            <div className="aspect-video bg-black rounded-[2rem] overflow-hidden border border-border/50">
                                <iframe width="100%" height="100%" src={match.videoUrl} frameBorder="0" allowFullScreen />
                            </div>
                        </div>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function MatchesClient({ initialMatches }: { initialMatches: Match[] }) {
    const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);

    return (
        <div className="min-h-screen">
            <AnimatePresence>
                {selectedMatch && <MatchDetailModal match={selectedMatch} onClose={() => setSelectedMatch(null)} />}
            </AnimatePresence>

            <section className="pt-48 pb-32 px-8 md:px-24">
                <div className="container mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="font-mono text-xs text-primary uppercase tracking-[0.6em] mb-4 block">Fixtures & Results</span>
                        <h1 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tighter mb-12">MATCH<br />CENTER</h1>
                    </motion.div>

                    <div className="space-y-6">
                        {initialMatches.map((match) => (
                            <div key={match.id} onClick={() => setSelectedMatch(match)} className="cursor-pointer group">
                                <AnimatedBorder containerClassName="w-full" className="bg-card">
                                    <div className="p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-12 h-full rounded-[calc(1.5rem-2px)] border border-border/50 relative overflow-hidden">
                                        <div className="flex-1 w-full text-center md:text-left">
                                            <span className="font-mono text-[10px] text-primary uppercase tracking-widest block mb-4">{match.competition}</span>
                                            <h4 className="font-display font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter flex flex-wrap items-center justify-center md:justify-start gap-4">
                                                {match.home} <span className="text-foreground/20 text-xl border border-border/30 px-3 py-1 rounded-full">VS</span> {match.away}
                                            </h4>
                                        </div>
                                        <div className="flex flex-col items-center md:items-end border-t md:border-t-0 md:border-l border-border/50 py-6 md:py-0 md:pl-12 w-full md:w-auto">
                                            <span className="font-mono text-3xl md:text-5xl font-black text-primary">{match.time}</span>
                                            <span className="font-mono text-[10px] text-foreground/40 uppercase tracking-widest mt-2">{match.date} • {match.venue}</span>
                                        </div>
                                        <button className="w-full md:w-auto px-10 py-5 bg-foreground text-background font-display font-bold text-xs uppercase tracking-widest group-hover:bg-primary transition-all rounded-xl">
                                            MATCH CENTER
                                        </button>
                                    </div>
                                </AnimatedBorder>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
