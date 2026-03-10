"use client";
/* eslint-disable @next/next/no-img-element */

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Search, ChevronRight, Activity, X, Award, Trophy, Target, Star, MapPin } from 'lucide-react';

interface Player {
    id: string;
    name: string;
    pos: string;
    age: number;
    height: string;
    weight: string;
    hometown: string;
    achievements: string[];
    stats: {
        pace: number;
        shot: number;
        tac: number;
    };
    bio: string;
    img: string;
}

function PlayerDetailModal({ player, onClose }: { player: Player; onClose: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div className="absolute inset-0 bg-background/90 backdrop-blur-2xl" />
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative bg-card border border-border rounded-[3rem] overflow-hidden max-w-5xl w-full max-h-[85vh] md:max-h-[90vh] overflow-y-auto scroll-smooth scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent touch-pan-y"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

                <button
                    onClick={onClose}
                    className="absolute top-4 md:top-8 right-4 md:right-8 z-50 w-14 h-14 md:w-12 md:h-12 rounded-full bg-card/80 border border-border flex items-center justify-center hover:bg-primary hover:text-background hover:border-primary transition-all duration-300 touch-manipulation"
                    aria-label="Close"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    <div className="lg:col-span-5 relative bg-gradient-to-br from-primary/10 via-background to-background p-8 lg:p-12 flex flex-col">
                        <div className="absolute top-8 left-4">
                            <span className="font-display font-black text-[15rem] text-primary/5 leading-none">#{player.id}</span>
                        </div>

                        <div className="relative z-10 flex-1 flex items-center justify-center py-8">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent rounded-3xl blur-2xl transform scale-110" />
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent rounded-3xl z-10" />
                                    <img
                                        src={player.img}
                                        alt={player.name}
                                        className="w-56 h-72 lg:w-64 lg:h-80 object-cover rounded-3xl shadow-2xl border border-border/50"
                                    />
                                </div>
                                <div className="absolute -bottom-4 -right-4 z-20">
                                    <div className="bg-primary text-background px-6 py-3 rounded-full shadow-lg">
                                        <span className="font-display font-black text-xl tracking-wider">{player.pos}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mt-8">
                            <div className="text-center p-4 bg-background/50 rounded-2xl border border-border/30">
                                <div className="font-display font-black text-2xl text-primary">{player.age}</div>
                                <div className="font-mono text-xs text-foreground/40 uppercase tracking-wider">AGE</div>
                            </div>
                            <div className="text-center p-4 bg-background/50 rounded-2xl border border-border/30">
                                <div className="font-display font-black text-2xl text-primary">{player.height}</div>
                                <div className="font-mono text-xs text-foreground/40 uppercase tracking-wider">HEIGHT</div>
                            </div>
                            <div className="text-center p-4 bg-background/50 rounded-2xl border border-border/30">
                                <div className="font-display font-black text-2xl text-primary">{player.weight}</div>
                                <div className="font-mono text-xs text-foreground/40 uppercase tracking-wider">WEIGHT</div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 p-8 lg:p-12 space-y-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="px-4 py-1 bg-primary/10 border border-primary/20 rounded-full">
                                    <span className="font-mono text-xs text-primary uppercase tracking-widest">PLAYER PROFILE</span>
                                </span>
                            </div>
                            <h2 className="font-display font-black text-4xl lg:text-6xl uppercase tracking-tight">{player.name}</h2>
                            <div className="flex items-center gap-2 text-foreground/50">
                                <MapPin className="w-4 h-4" />
                                <span className="font-mono text-sm">{player.hometown}</span>
                            </div>
                        </div>

                        <div className="relative p-6 bg-background/50 rounded-2xl border border-border/30">
                            <div className="absolute -top-3 left-6 px-3 bg-card">
                                <span className="font-mono text-xs text-primary uppercase tracking-widest flex items-center gap-2">
                                    <Target className="w-3 h-3" />
                                    SCOUT REPORT
                                </span>
                            </div>
                            <p className="text-foreground/70 leading-relaxed pt-2">{player.bio}</p>
                        </div>

                        <div className="space-y-4">
                            <span className="font-mono text-xs text-foreground/40 uppercase tracking-widest flex items-center gap-2">
                                <Trophy className="w-4 h-4 text-primary" />
                                HONORS & ACHIEVEMENTS
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {player.achievements.map((achievement, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 bg-gradient-to-r from-primary/5 to-transparent border-l-2 border-primary rounded-r-lg">
                                        <Award className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span className="font-medium text-sm">{achievement}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6 pt-6 border-t border-border/30">
                            <div className="flex items-center justify-between">
                                <span className="font-mono text-xs text-foreground/40 uppercase tracking-widest flex items-center gap-2">
                                    <Activity className="w-4 h-4 text-primary" />
                                    PERFORMANCE METRICS
                                </span>
                                <div className="flex items-center gap-2">
                                    <Star className="w-4 h-4 text-primary fill-primary" />
                                    <span className="font-mono text-xs text-primary uppercase">Elite Level</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-6">
                                {Object.entries(player.stats).map(([stat, val]) => (
                                    <div key={stat} className="space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className="font-mono text-xs uppercase opacity-50">{stat}</span>
                                            <span className="font-display font-black text-2xl">{val}</span>
                                        </div>
                                        <div className="h-3 bg-background rounded-full overflow-hidden border border-border/20">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${val}%` }}
                                                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                                                className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export function PlayersClient({ initialPlayers }: { initialPlayers: Player[] }) {
    const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPlayers = initialPlayers.filter(player =>
        player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        player.pos.toLowerCase().includes(searchQuery.toLowerCase()) ||
        player.hometown.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Lock body scroll when modal is open
    useEffect(() => {
        if (!selectedPlayer) return;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, [selectedPlayer]);

    return (
        <>
            <AnimatePresence>
                {selectedPlayer && (
                    <PlayerDetailModal
                        player={selectedPlayer}
                        onClose={() => setSelectedPlayer(null)}
                    />
                )}
            </AnimatePresence>

            <div className="mb-16">
                <div className="relative w-full lg:w-80 group mt-8">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30 group-hover:text-primary transition-colors" />
                    <input
                        type="text"
                        placeholder="SEARCH PLAYERS…"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-card/50 border border-border pl-12 pr-4 py-4 font-mono text-xs uppercase tracking-wider rounded-full focus:outline-none focus:border-primary transition-colors backdrop-blur-sm"
                    />
                </div>
            </div>

            {/* Player Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {filteredPlayers.length === 0 ? (
                    <div className="col-span-full py-12 text-center text-foreground/50 font-mono text-sm uppercase tracking-widest">
                        NO PLAYERS FOUND.
                    </div>
                ) : filteredPlayers.map((player, i) => (
                    <motion.div
                        key={player.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="group cursor-pointer"
                        onClick={() => setSelectedPlayer(player)}
                    >
                        {/* Card */}
                        <div className="relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-b from-card to-background border border-border hover:border-primary/50 transition-all duration-500">
                            {/* Background Pattern */}
                            <div className="absolute inset-0">
                                <div className="absolute inset-0 opacity-5" style={{
                                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)',
                                    color: 'var(--foreground)'
                                }} />
                                <div className="absolute top-8 right-8 w-32 h-32 rounded-full border border-primary/10" />
                                <div className="absolute top-12 right-12 w-24 h-24 rounded-full border border-primary/5" />
                            </div>

                            {/* Player Number */}
                            <div className="absolute top-6 left-6 z-10">
                                <span className="font-display font-black text-5xl text-primary/20 group-hover:text-primary/40 transition-colors">
                                    #{player.id}
                                </span>
                            </div>

                            {/* Position Badge */}
                            <div className="absolute top-6 right-6 z-10">
                                <span className="px-4 py-2 bg-primary text-background font-display font-black text-lg rounded-full">
                                    {player.pos}
                                </span>
                            </div>

                            {/* Player Image */}
                            <div className="absolute inset-0 flex items-end justify-center">
                                <div className="relative w-full h-full">
                                    <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-primary/20 via-primary/5 to-transparent" />
                                    <img
                                        src={player.img}
                                        alt={player.name}
                                        className="absolute inset-x-0 bottom-0 w-full h-[95%] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                        style={{
                                            maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                                            WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Bottom Info Overlay */}
                            <div className="absolute z-20 bottom-0 left-0 right-0 p-6 pt-24">
                                <h3 className="font-display font-black text-3xl uppercase text-foreground drop-shadow-sm">
                                    {player.name}
                                </h3>
                                <div className="flex items-center gap-2 text-foreground/70 mt-1 mb-4">
                                    <MapPin className="w-4 h-4" />
                                    <span className="font-mono text-sm">{player.hometown}</span>
                                </div>
                                <button className="w-full py-3 bg-primary text-background font-display font-bold uppercase tracking-wider rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                                    <span>View Profile</span>
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* CTA Strip */}
            <div className="mt-24 relative overflow-hidden">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-card/80 border border-border rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden backdrop-blur-md">
                    <div className="absolute inset-0 opacity-[0.03]" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
                        backgroundSize: '24px 24px'
                    }} />

                    <div className="space-y-4 relative z-10">
                        <h2 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tighter">
                            JOIN THE <span className="text-outline-brand italic">LINEAGE</span>
                        </h2>
                        <p className="text-foreground/60 text-lg max-w-xl leading-relaxed">
                            Be part of the next generation of football excellence. Register for trials today and start your journey to the professional stage.
                        </p>
                    </div>

                    <div className="relative z-10 shrink-0">
                        <a href="/contact" className="group relative inline-flex items-center gap-3 bg-primary text-background px-8 py-5 rounded-full font-display font-black uppercase tracking-wider text-sm hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(var(--primary),0.5)]">
                            Enquire Now
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
