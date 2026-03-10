"use client";
/* eslint-disable @next/next/no-img-element */

import { Brain, Microscope, Dumbbell, Zap, Users, Coffee, HeartPulse, GraduationCap, Trees, Bus, type LucideIcon } from 'lucide-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';

type FeatureItem = {
    title: string;
    desc: string;
    image: string;
    tag: string;
    icon?: string;
};

const iconMap: Record<string, LucideIcon> = {
    Brain,
    Microscope,
    Dumbbell,
    Zap,
    Users,
    Coffee,
    HeartPulse,
    GraduationCap,
    Trees,
    Bus,
};

const defaultFeatures: FeatureItem[] = [
    { title: "Expert coaches", desc: "Curated training by Argentinos Juniors experts from the same nursery that groomed Maradona.", icon: 'Brain', image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop", tag: "TECHNICAL LEADERSHIP" },
    { title: "Monitoring players", desc: "Continuous analysis by AJ coaches in Buenos Aires.", icon: 'Microscope', image: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=1200&auto=format&fit=crop", tag: "PERFORMANCE ANALYTICS" },
    { title: "Indian coaches", desc: "AJ-trained Indian coaches for local synchronization.", icon: 'Users', image: "https://images.unsplash.com/photo-1526232762682-d2f5f6ca520f?q=80&w=1200&auto=format&fit=crop", tag: "LOCAL INTEGRATION" },
    { title: "Training on grass turf", desc: "Premium training experience on professional-grade natural grass pitches.", icon: 'Trees', image: "/ground-day.png", tag: "ELITE INFRASTRUCTURE" },
    { title: "Weekly matches", desc: "Regular competitive fixtures with regional academies.", icon: 'Zap', image: "https://images.unsplash.com/photo-1510567153273-04b3ec2c2861?q=80&w=1200&auto=format&fit=crop", tag: "COMPETITIVE EXPOSURE" },
    { title: "Intensive training", desc: "High-performance training sessions designed for elite physical and technical development.", icon: 'Dumbbell', image: "https://images.unsplash.com/photo-1518604666860-9ed391f76460?q=80&w=1200&auto=format&fit=crop", tag: "ATHLETIC DEVELOPMENT" },
    { title: "Diet plan", desc: "Personalized diet plans for physical development.", icon: 'Coffee', image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop", tag: "SPORTS NUTRITION" },
    { title: "Transport facilities", desc: "Dedicated safe transport options for academy players.", icon: 'Bus', image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop", tag: "PLAYER LOGISTICS" },
    { title: "Interaction with parents", desc: "Periodic interaction with parents via data reports.", icon: 'HeartPulse', image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop", tag: "FAMILY ENGAGEMENT" },
    { title: "Certificates", desc: "Formal certification after every two-year cycle.", icon: 'GraduationCap', image: "https://images.unsplash.com/photo-1578262825743-a4e402caab76?q=80&w=1200&auto=format&fit=crop", tag: "OFFICIAL RECOGNITION" },
];

export function AcademyOffers({ features }: { features?: FeatureItem[] }) {
    const renderedFeatures = features && features.length > 0 ? features : defaultFeatures;

    return (
        <section className="bg-background relative text-foreground pt-32 pb-48 overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="px-4 text-center mb-24 relative z-10">
                <div className="inline-block bg-primary text-background px-4 py-1 text-[10px] font-mono font-bold uppercase tracking-widest mb-6 rounded-full">
                    PROGRAM FRAMEWORK
                </div>
                <h1 className="text-4xl md:text-7xl font-display font-black uppercase tracking-tighter">
                    WHAT OUR <span className="italic text-outline-pitch">ACADEMY</span> OFFERS
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 md:px-8">
                {renderedFeatures.map((f, i) => {
                    const Icon = iconMap[f.icon || 'Users'] || Users;
                    return (
                        <div key={i} className="relative h-full rounded-[3.5rem] border border-border/40 p-3 shadow-lg group/card hover:shadow-2xl hover:shadow-primary/10 transition-all duration-1000">
                            <GlowingEffect
                                spread={80}
                                glow={true}
                                disabled={false}
                                proximity={64}
                                inactiveZone={0.01}
                            />
                            <div className="relative h-full min-h-[600px] bg-card rounded-[3rem] overflow-hidden transition-transform duration-700 hover:scale-[1.01]">
                                {/* Bright Background Image - No Scrim */}
                                <div className="absolute inset-0 z-0 overflow-hidden">
                                    <img
                                        src={f.image}
                                        alt={f.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    {/* Minimal bottom occlusion for the edge of the glass island */}
                                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent" />
                                </div>

                                {/* Floating Icon - Top Right (Subtle) */}
                                <div className="absolute top-8 right-8 p-6 opacity-20 z-10 pointer-events-none mix-blend-overlay text-white transition-opacity duration-700 group-hover:opacity-40">
                                    <Icon className="w-24 h-24 md:w-32 md:h-32" />
                                </div>

                                {/* Glass Island (The "Floating" Box) */}
                                <div className="absolute bottom-6 left-6 right-6 z-20">
                                    <div className="relative p-8 md:p-10 rounded-[2.5rem] bg-black/40 dark:bg-black/60 backdrop-blur-3xl border border-white/10 dark:border-white/20 shadow-2xl overflow-hidden group-hover:bg-black/50 transition-all duration-700">
                                        {/* Subtle internal glow for the island */}
                                        <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/10 blur-3xl rounded-full" />

                                        <div className="relative z-10 flex flex-col gap-6">
                                            <div className="flex items-center justify-between">
                                                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-xl border border-white/20 shadow-xl transition-all duration-700 group-hover:bg-primary group-hover:border-primary group-hover:text-background">
                                                    <Icon className="w-7 h-7" />
                                                </div>
                                                <span className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-[10px] md:text-xs font-mono font-bold tracking-widest text-white backdrop-blur-md transition-all duration-700 group-hover:bg-primary/20 group-hover:border-primary/40 uppercase">
                                                    {f.tag}
                                                </span>
                                            </div>

                                            <div>
                                                <h3 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tighter mb-4 leading-none text-white drop-shadow-2xl">
                                                    {f.title}
                                                </h3>
                                                <p className="text-white/80 text-lg font-sans leading-relaxed drop-shadow-xl line-clamp-3">
                                                    {f.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
