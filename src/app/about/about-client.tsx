"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { WobbleCard } from "@/components/ui/wobble-card";
import { Compare } from "@/components/ui/compare";
import {
    ShieldCheck, Globe, Trophy, GraduationCap, Target, Users, Handshake, Rocket, Dumbbell, Star, Flame, Heart, Flag, type LucideIcon
} from "lucide-react";

interface VisionMissionItem {
    icon: string;
    text: string;
}

interface Milestone {
    year: string;
    title: string;
    description: string;
}

interface BoardMember {
    name?: string;
    role?: string;
    subtitle?: string;
    imageUrl?: string;
}

interface AboutData {
    hero?: {
        title?: string;
        philosophy?: string;
    };
    visionTitle?: string;
    missionTitle?: string;
    milestones?: Milestone[];
    boardTitle?: string;
    board?: BoardMember[];
    partnersTitle?: string;
    partners?: { name: string; logoUrl: string; link?: string }[];
}

interface AboutClientProps {
    aboutData: AboutData;
    visionItems: VisionMissionItem[];
    missionItems: VisionMissionItem[];
    partners: { name: string; logoUrl: string; link?: string }[];
}

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

const iconMap: Record<string, LucideIcon> = {
    Globe, Flame, Heart, Flag, Trophy, Star,
    GraduationCap, Target, Users, Handshake, Rocket, Dumbbell
};

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.7, ease: easeOutExpo },
};

const stagger = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: easeOutExpo },
};

export default function AboutClient({ aboutData, visionItems, missionItems, partners }: AboutClientProps) {
    const milestones = aboutData.milestones || [];
    const board = aboutData.board || [];

    return (
        <div className="overflow-x-hidden">
            <section className="relative pt-64 pb-32 px-8 md:px-24 flex flex-col items-center justify-center overflow-hidden">
                <BackgroundBeams />
                <div className="container mx-auto relative z-10 text-center">
                    <motion.div {...fadeUp}>
                        <span className="font-mono text-[10px] text-primary uppercase tracking-[0.8em] block mb-6 text-center">
                            Established 2024
                        </span>
                        <h1 className="font-display font-black text-6xl md:text-9xl uppercase tracking-tighter leading-[0.8] mb-12 text-center">
                            {aboutData.hero?.title || "ARCHITECTS"}<br />
                            <span className="text-outline-brand italic">
                                OF THE FUTURE
                            </span>
                        </h1>
                        <p className="max-w-2xl mx-auto font-sans text-xl text-foreground/60 leading-relaxed italic text-center">
                            &quot;{aboutData.hero?.philosophy || "To create a world-class football training academy in Kozhikode and form a truly professional senior football team."}&quot;
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-32 px-8 lg:px-24 container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                    {/* Left Column — Decorative */}
                    <motion.div {...fadeUp} className="lg:col-span-4 flex flex-col gap-6">
                        <span className="font-mono text-[10px] text-primary uppercase tracking-[0.8em] block text-left">
                            Who We Are
                        </span>
                        <div className="relative">
                            <span className="font-display font-black text-[8rem] md:text-[12rem] leading-none text-foreground/[0.03] absolute -top-8 -left-4 select-none pointer-events-none">
                                01
                            </span>
                            <h2 className="font-display font-black text-5xl md:text-6xl uppercase tracking-tighter leading-[0.9] relative z-10 text-left">
                                About<br />Our
                                <span className="text-outline-brand italic block">
                                    Club
                                </span>
                            </h2>
                        </div>
                        <div className="w-16 h-[2px] bg-primary" />
                    </motion.div>

                    {/* Right Column — Content */}
                    <div className="lg:col-span-8 space-y-8">
                        <motion.div
                            {...fadeUp}
                            transition={{ ...fadeUp.transition, delay: 0.1 }}
                            className="bg-card/50 backdrop-blur-md border border-border rounded-2xl p-8 md:p-12 relative overflow-hidden"
                        >
                            <div className="space-y-6 text-lg md:text-xl text-foreground/70 leading-relaxed relative z-10">
                                <motion.p {...stagger} transition={{ delay: 0.2, duration: 0.6 }}>
                                    The <span className="text-primary font-semibold">Malabar Challengers Football Club</span> is owned and operated by Malabar Sports and Recreations Foundation (MSRF). It is a company registered under <span className="text-primary font-semibold">Section 8 of the Company&apos;s Act, 2013</span>.
                                </motion.p>
                                <motion.p {...stagger} transition={{ delay: 0.3, duration: 0.6 }}>
                                    It was founded by a group of retired civil servants along with their friends with the intention of promoting football without any profit motive. Profit, if any, will be reinvested for further development.
                                </motion.p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-32 px-8 md:px-24 border-t border-border/10 relative">
                <div className="container mx-auto max-w-7xl">
                    <motion.div {...fadeUp} className="mb-20">
                        <span className="font-mono text-[10px] text-primary uppercase tracking-[0.8em] block mb-4">
                            Where We&apos;re Heading
                        </span>
                        <h2 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tighter leading-none">
                            {aboutData.visionTitle || "Vision 2031"}
                        </h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
                        {visionItems.map((item, i: number) => {
                            const Icon = iconMap[item.icon] || Globe;
                            return (
                                <motion.div key={i} {...stagger} transition={{ delay: i * 0.08, duration: 0.6 }}>
                                    <WobbleCard containerClassName="h-full min-h-[200px]">
                                        <div className="flex flex-col gap-4 relative z-10">
                                            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                                <Icon className="w-5 h-5 text-primary" />
                                            </div>
                                            <p className="text-foreground/70 text-base leading-relaxed font-sans">{item.text}</p>
                                        </div>
                                    </WobbleCard>
                                </motion.div>
                            );
                        })}
                    </div>

                    <motion.div {...fadeUp} className="mb-20">
                        <span className="font-mono text-[10px] text-primary uppercase tracking-[0.8em] block mb-4">
                            How We Get There
                        </span>
                        <h2 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tighter leading-none">
                            {aboutData.missionTitle || "Our Mission"}
                        </h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {missionItems.map((item, i: number) => {
                            const Icon = iconMap[item.icon] || GraduationCap;
                            return (
                                <motion.div key={i} {...stagger} transition={{ delay: i * 0.06, duration: 0.6 }}>
                                    <WobbleCard containerClassName="h-full min-h-[180px]">
                                        <div className="flex flex-col gap-3 relative z-10">
                                            <Icon className="w-5 h-5 text-primary" />
                                            <p className="text-foreground/70 text-sm leading-relaxed font-sans">{item.text}</p>
                                        </div>
                                    </WobbleCard>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-32 px-8 md:px-24 border-t border-border/10 relative overflow-hidden">
                <div className="container mx-auto max-w-7xl relative z-10">
                    <motion.div {...fadeUp} className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                        <div>
                            <span className="font-mono text-[10px] text-primary uppercase tracking-[0.8em] block mb-4">Leadership</span>
                            <h2 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tighter leading-none">{aboutData.boardTitle || "Board of Directors"}</h2>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {board.map((member, i: number) => {
                            const memberName = member.name || "Board Member";
                            const memberRole = member.role || "Director";
                            const memberSubtitle = member.subtitle || "";
                            let photo = member.imageUrl || "/academy-player.png";
                            if (!member.imageUrl) {
                                const name = memberName.toLowerCase();
                                if (name.includes("vijayan")) photo = "/Vijayan.png";
                                else if (name.includes("skandan")) photo = "/Skandan.png";
                                else if (name.includes("paul antony")) photo = "/Paul Antony.png";
                                else if (name.includes("rajmohan")) photo = "/Rajmohan.png";
                                else if (name.includes("paul george")) photo = "/Paul George.png";
                                else if (name.includes("bhramanand")) photo = "/Bhramanand.png";
                                else if (name.includes("sajeev")) photo = "/Sajeev Babu Kurup.png";
                                else if (name.includes("imbichammad")) photo = "/Imbichammad.png";
                                else if (name.includes("manoj")) photo = "/Manoj Kaloor.png";
                            }

                            return (
                                <motion.div key={i} {...stagger} transition={{ delay: i * 0.1, duration: 0.8 }} className="group relative flex flex-col h-full">
                                    <div className="relative flex flex-col h-full rounded-[2rem] overflow-hidden bg-card border border-border/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-500">
                                        <div className="relative aspect-[4/5] overflow-hidden bg-muted/10">
                                            <motion.img src={photo} alt={memberName} className="w-full h-full object-cover grayscale-[50%] brightness-90 hover:grayscale-0 hover:scale-110 hover:brightness-100 transition-all duration-700 ease-out" />
                                            <div className="absolute top-6 right-8 font-display font-black text-6xl text-white/10 select-none pointer-events-none group-hover:text-primary/20 transition-colors duration-500">
                                                {(i + 1).toString().padStart(2, "0")}
                                            </div>
                                        </div>
                                        <div className="relative flex-grow p-8 bg-card flex flex-col justify-start min-h-[160px] border-t border-border/20">
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-6 h-[1.5px] bg-primary" />
                                                <span className="font-mono text-xs font-bold text-primary block mb-1">{memberRole}</span>
                                            </div>
                                            <h3 className="font-display font-black text-2xl md:text-3xl uppercase tracking-tighter leading-[0.9] group-hover:text-primary transition-colors duration-300">{memberName}</h3>
                                            <div className="mt-4 pt-4 border-t border-border/10">
                                                <p className="font-sans text-[11px] md:text-xs text-foreground/60 leading-relaxed italic">{memberSubtitle}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-32 px-8 md:px-24 border-t border-border/10 bg-card/20 relative">
                <div className="container mx-auto max-w-5xl">
                    <motion.div {...fadeUp} className="mb-20 text-center">
                        <span className="font-mono text-[10px] text-primary uppercase tracking-[0.8em] block mb-4">Our Journey</span>
                        <h2 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tighter leading-none">Milestones</h2>
                    </motion.div>
                    <div className="relative">
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-primary/40 md:-translate-x-px" />
                        {milestones.map((milestone, i: number) => {
                            const isLeft = i % 2 === 0;
                            return (
                                <motion.div key={i} {...stagger} transition={{ delay: i * 0.15, duration: 0.6 }} className={`relative flex items-center mb-16 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                                    <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 z-10"><div className="w-4 h-4 rounded-full bg-primary border-4 border-background" /></div>
                                    <div className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                                        <div className="bg-card/50 backdrop-blur-md border border-border rounded-2xl p-8">
                                            <span className="font-mono text-xs text-primary font-bold tracking-widest">{milestone.year}</span>
                                            <h3 className="font-display font-black text-2xl uppercase tracking-tighter mt-2 mb-3">{milestone.title}</h3>
                                            <p className="text-sm text-foreground/50 leading-relaxed font-sans">{milestone.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-32 px-8 md:px-24 border-t border-border/10 relative">
                <div className="container mx-auto max-w-6xl">
                    <motion.div {...fadeUp} className="mb-16 text-center">
                        <span className="font-mono text-[10px] text-primary uppercase tracking-[0.8em] block mb-4">Training Facility</span>
                        <h2 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tighter leading-none">Our <span className="text-outline-brand italic">Grounds</span></h2>
                    </motion.div>
                    <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
                        <Compare firstImage="/ground-day.png" secondImage="/ground-night.png" firstImageAlt="Day View" secondImageAlt="Night View" slideMode="hover" className="shadow-2xl shadow-primary/5 rounded-[2rem] overflow-hidden" />
                    </motion.div>
                </div>
            </section>

            <section className="py-24 px-8 md:px-24 border-t border-border/10 bg-card/10">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 opacity-70 hover:opacity-100 transition-opacity duration-500">
                        <div className="text-center md:text-left">
                            <h3 className="font-display font-black text-2xl md:text-3xl uppercase tracking-tighter leading-tight mb-2">
                                {aboutData.partnersTitle || "OUR PARTNERS"}
                            </h3>
                            <div className="w-12 h-1 bg-primary mx-auto md:ml-0" />
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
                            {partners.map((partner, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="relative group"
                                >
                                    {partner.link ? (
                                        <a href={partner.link} target="_blank" rel="noopener noreferrer" className="block text-center space-y-3">
                                            <div className="h-12 md:h-16 w-auto grayscale group-hover:grayscale-0 transition-all duration-500 flex items-center justify-center">
                                                <Image
                                                    src={partner.logoUrl}
                                                    alt={partner.name}
                                                    width={150}
                                                    height={64}
                                                    className="h-full w-auto object-contain max-w-[150px]"
                                                />
                                            </div>
                                            <p className="font-display font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">{partner.name}</p>
                                        </a>
                                    ) : (
                                        <div className="text-center space-y-3 px-4">
                                            <div className="h-12 md:h-16 w-auto flex items-center justify-center">
                                                <Image
                                                    src={partner.logoUrl}
                                                    alt={partner.name}
                                                    width={150}
                                                    height={64}
                                                    className="h-full w-auto object-contain grayscale max-w-[150px]"
                                                />
                                            </div>
                                            <p className="font-display font-black text-[10px] uppercase tracking-widest opacity-40">{partner.name}</p>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-32 px-8 md:px-24 bg-primary text-background text-center relative overflow-hidden">
                <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                    <ShieldCheck className="w-20 h-20 mx-auto mb-10 opacity-50" />
                    <h3 className="font-display font-black text-4xl md:text-7xl uppercase tracking-tighter mb-8 italic">100% Non-Profit Professionalism</h3>
                    <p className="max-w-3xl mx-auto font-sans text-lg md:text-xl leading-relaxed opacity-80">
                        Every rupee of profit is mandated to be reinvested into the development of Malabar football. We follow highest standards of professional ethics.
                    </p>
                </motion.div>
            </section>
        </div>
    );
}
