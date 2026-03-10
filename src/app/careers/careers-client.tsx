"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowUpRight, X, Check, MapPin, Target, Award, ChevronRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { GlowingEffect } from '@/components/ui/glowing-effect';

interface Job {
    id: string;
    title: string;
    category: string;
    type: string;
    location: string;
    salary: string;
    description: string;
    requirements: string[];
    responsibilities: string[];
    benefits: string[];
}

function JobDetailModal({ job, onClose }: { job: Job; onClose: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={onClose}
        >
            <div className="absolute inset-0 bg-background/95 backdrop-blur-3xl" />
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                onClick={(e) => e.stopPropagation()}
                className="relative bg-card border border-border rounded-[2rem] overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-primary"
            >
                <div className="relative bg-gradient-to-br from-primary/10 via-background to-background p-8 md:p-12 pb-16">
                    <button onClick={onClose} className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-card/80 border border-border flex items-center justify-center hover:bg-primary hover:text-background transition-all">
                        <X className="w-4 h-4" />
                    </button>
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full"><span className="font-mono text-xs text-primary uppercase">{job.category}</span></span>
                            <span className="px-3 py-1 bg-card border border-border rounded-full"><span className="font-mono text-xs text-foreground/60 uppercase">{job.type}</span></span>
                        </div>
                        <h2 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tight mb-4">{job.title}</h2>
                        <div className="flex flex-wrap gap-6 text-foreground/60">
                            <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /><span className="font-mono text-sm">{job.location}</span></div>
                            <div className="flex items-center gap-2"><Award className="w-4 h-4 text-primary" /><span className="font-mono text-sm">{job.salary}</span></div>
                        </div>
                    </div>
                </div>
                <div className="p-8 md:p-12 space-y-10">
                    <div>
                        <h3 className="font-display font-black text-xl uppercase mb-4 flex items-center gap-2"><Target className="w-5 h-5 text-primary" />Overview</h3>
                        <p className="text-foreground/70 leading-relaxed text-lg">{job.description}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {job.requirements.length > 0 && (
                            <div className="space-y-4">
                                <h4 className="font-display font-black text-lg uppercase text-foreground/80">Requirements</h4>
                                <ul className="space-y-3">
                                    {job.requirements.map((req, i) => (
                                        <li key={i} className="flex items-start gap-3"><Check className="w-4 h-4 text-primary mt-1" /><span className="text-foreground/70 text-sm">{req}</span></li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {job.responsibilities.length > 0 && (
                            <div className="space-y-4">
                                <h4 className="font-display font-black text-lg uppercase text-foreground/80">Responsibilities</h4>
                                <ul className="space-y-3">
                                    {job.responsibilities.map((resp, i) => (
                                        <li key={i} className="flex items-start gap-3"><ChevronRight className="w-4 h-4 text-primary mt-1" /><span className="text-foreground/70 text-sm">{resp}</span></li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="flex gap-4 pt-4">
                        <Link href="/contact" className="flex-1 py-4 bg-primary text-background font-display font-bold uppercase rounded-xl hover:bg-primary/90 flex items-center justify-center gap-2 text-center">
                            <MessageCircle className="w-4 h-4" />Contact For Application
                        </Link>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function CareersClient({ jobs }: { jobs: Job[] }) {
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);

    useEffect(() => {
        if (selectedJob) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = '';
    }, [selectedJob]);

    return (
        <div className="overflow-x-hidden">
            <AnimatePresence>
                {selectedJob && <JobDetailModal job={selectedJob} onClose={() => setSelectedJob(null)} />}
            </AnimatePresence>

            <section className="relative pt-64 pb-32 px-8 lg:px-24">
                <h1 className="font-display font-black italic text-[15vw] lg:text-[15rem] leading-[0.8] uppercase">
                    BUILD <span className="text-outline-brand block">FUTURE</span>
                </h1>
                <div className="mt-20 border-l-4 border-primary pl-12 max-w-2xl">
                    <p className="text-3xl italic font-display">&quot;We are looking for challengers, not workers.&quot;</p>
                </div>
            </section>

            <section className="py-24 px-8 lg:px-24">
                <div className="grid grid-cols-1 gap-4">
                    {jobs.map((job, i) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            onClick={() => setSelectedJob(job)}
                            className="relative h-full rounded-[3.5rem] border border-border/40 p-3 shadow-lg group/card hover:shadow-2xl hover:shadow-primary/10 transition-all duration-1000 cursor-pointer"
                        >
                            <GlowingEffect
                                spread={80}
                                glow={true}
                                disabled={false}
                                proximity={64}
                                inactiveZone={0.01}
                            />
                            <div className="relative flex min-h-[250px] flex-col justify-between p-10 md:p-14 bg-card/40 dark:bg-card/60 rounded-[3rem] overflow-hidden group transition-all duration-700 hover:scale-[1.01] border border-primary/10 dark:border-primary/5">
                                {/* Subtle internal depth border */}
                                <div className="absolute inset-0 border border-white/5 dark:border-white/5 rounded-[3rem] pointer-events-none" />

                                <div className="absolute top-0 right-0 p-12 opacity-5 z-0 pointer-events-none mix-blend-overlay text-foreground transition-all duration-700 group-hover:opacity-10 group-hover:scale-110">
                                    <Target className="w-32 h-32 md:w-48 md:h-48" />
                                </div>

                                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-12 text-foreground w-full">
                                    <div className="space-y-8 flex-1">
                                        <div className="flex items-center gap-3">
                                            <span className="px-5 py-2 bg-primary/5 border border-primary/20 rounded-full backdrop-blur-md shadow-sm group-hover:bg-primary/20 transition-colors duration-500">
                                                <span className="font-mono text-[10px] md:text-xs text-primary font-bold uppercase tracking-[0.2em]">{job.category}</span>
                                            </span>
                                        </div>
                                        <h3 className="font-display font-black text-4xl md:text-7xl group-hover:text-primary uppercase leading-none tracking-tight transition-all duration-500 group-hover:translate-x-2">
                                            {job.title}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-6 text-[10px] md:text-xs font-mono uppercase text-foreground/40 tracking-widest group-hover:text-foreground/60 transition-colors duration-500">
                                            <span className="flex items-center gap-2">
                                                <MapPin className="w-4 h-4 text-primary" />
                                                {job.location}
                                            </span>
                                            <span className="opacity-20 hidden md:block">|</span>
                                            <span className="px-3 py-1 border border-border/50 rounded-md bg-foreground/5">{job.type}</span>
                                        </div>
                                    </div>

                                    <div className="relative z-10 w-24 h-24 md:w-28 md:h-28 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-background transition-all duration-700 shrink-0 shadow-2xl self-end md:self-center group-hover:rotate-12 group-hover:scale-110">
                                        <ArrowUpRight className="w-10 h-10 transition-transform group-hover:scale-125" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
