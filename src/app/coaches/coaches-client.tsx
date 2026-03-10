"use client";
/* eslint-disable @next/next/no-img-element */

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Award, MapPin, X, ArrowRight, Star, Users } from 'lucide-react';

interface Coach {
    id: string;
    name: string;
    role: string;
    subtitle: string;
    origin: string;
    experience: string;
    age: number;
    bio: string;
    achievements: string[];
    specialty: string;
    image: string;
}

function CoachDetailModal({ coach, onClose }: { coach: Coach; onClose: () => void }) {
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
                            <span className="font-display font-black text-[15rem] text-primary/5 leading-none">#{coach.id}</span>
                        </div>

                        <div className="relative z-10 flex-1 flex items-center justify-center py-8">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent rounded-3xl blur-2xl transform scale-110" />
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent rounded-3xl z-10" />
                                    <img
                                        src={coach.image}
                                        alt={coach.name}
                                        className="w-56 h-72 lg:w-64 lg:h-80 object-cover rounded-3xl shadow-2xl border border-border/50"
                                    />
                                </div>
                                <div className="absolute -bottom-4 -right-4 z-20">
                                    <div className="bg-primary text-background px-6 py-3 rounded-full shadow-lg">
                                        <span className="font-display font-black text-xl tracking-wider">{coach.specialty}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="text-center p-4 bg-background/50 rounded-2xl border border-border/30">
                                <div className="font-display font-black text-2xl text-primary">{coach.age}</div>
                                <div className="font-mono text-xs text-foreground/40 uppercase tracking-wider">AGE</div>
                            </div>
                            <div className="text-center p-4 bg-background/50 rounded-2xl border border-border/30">
                                <div className="font-display font-black text-2xl text-primary">{coach.experience}</div>
                                <div className="font-mono text-xs text-foreground/40 uppercase tracking-wider">EXP</div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 p-8 lg:p-12 space-y-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="px-4 py-1 bg-primary/10 border border-primary/20 rounded-full">
                                    <span className="font-mono text-xs text-primary uppercase tracking-widest">COACH PROFILE</span>
                                </span>
                            </div>
                            <h2 className="font-display font-black text-4xl lg:text-6xl uppercase tracking-tight">{coach.name}</h2>
                            <p className="font-display text-2xl text-primary font-medium mt-1">{coach.role}</p>
                            <div className="flex items-center gap-2 text-foreground/50">
                                <MapPin className="w-4 h-4" />
                                <span className="font-mono text-sm">{coach.origin}</span>
                            </div>
                        </div>

                        <div className="relative p-6 bg-background/50 rounded-2xl border border-border/30">
                            <div className="absolute -top-3 left-6 px-3 bg-card">
                                <span className="font-mono text-xs text-primary uppercase tracking-widest flex items-center gap-2">
                                    <Star className="w-3 h-3" />
                                    BIO & METHODOLOGY
                                </span>
                            </div>
                            <p className="text-foreground/70 leading-relaxed pt-2">{coach.bio}</p>
                        </div>

                        <div className="space-y-4">
                            <span className="font-mono text-xs text-foreground/40 uppercase tracking-widest flex items-center gap-2">
                                <Award className="w-4 h-4 text-primary" />
                                CREDENTIALS & ACHIEVEMENTS
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {coach.achievements.map((achievement, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 bg-gradient-to-r from-primary/5 to-transparent border-l-2 border-primary rounded-r-lg">
                                        <Award className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span className="font-medium text-sm">{achievement}</span>
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

export function CoachesClient({ initialCoaches }: { initialCoaches: Coach[] }) {
    const [selectedCoach, setSelectedCoach] = useState<Coach | null>(null);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (!selectedCoach) return;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, [selectedCoach]);

    return (
        <>
            <AnimatePresence>
                {selectedCoach && (
                    <CoachDetailModal
                        coach={selectedCoach}
                        onClose={() => setSelectedCoach(null)}
                    />
                )}
            </AnimatePresence>

            {/* Coach Cards */}
            <section className="pb-32 px-6 md:px-12 lg:px-24">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {initialCoaches.map((coach, i) => (
                            <motion.div
                                key={coach.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div
                                    onClick={() => setSelectedCoach(coach)}
                                    className="relative bg-card border border-border rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/20 group cursor-pointer"
                                >
                                    {/* Image */}
                                    <div className="aspect-[3/4] overflow-hidden">
                                        <img
                                            src={coach.image}
                                            alt={coach.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                                    </div>

                                    {/* Content overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-5">
                                        <span className="inline-block px-2 py-1 bg-primary text-background text-[10px] font-mono uppercase tracking-wider rounded mb-2">
                                            {coach.specialty}
                                        </span>
                                        <h3 className="font-display font-bold text-xl uppercase tracking-tight mb-1">
                                            {coach.name}
                                        </h3>
                                        <p className="text-foreground/60 text-sm mb-3">{coach.role}</p>

                                        <div className="flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                            View Profile <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mt-16 bg-gradient-to-r from-primary via-primary to-amber-500 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
                    >
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '20px 20px' }} />
                        <div className="relative z-10">
                            <Users className="w-12 h-12 mx-auto mb-4 text-background" />
                            <h3 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tighter mb-4 text-background">
                                Join Our <span className="italic">Team</span>
                            </h3>
                            <p className="text-background/80 max-w-xl mx-auto mb-6">
                                We&apos;re always looking for passionate coaches to join our mission.
                            </p>
                            <button className="px-8 py-3 bg-background text-primary font-mono font-bold text-sm uppercase tracking-widest rounded-full hover:scale-105 transition-transform shadow-lg">
                                View Openings
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
