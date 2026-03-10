"use client";

import { motion } from 'framer-motion';
import { Shield, ArrowUpRight, Instagram, Youtube, MessageCircle } from 'lucide-react';
import { MagneticWrapper } from '../ui/magnetic-wrapper';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="relative bg-background border-t border-border mt-32 overflow-hidden pt-32 pb-12">

            {/* The Blueprint Ticker */}
            <div className="absolute top-0 left-0 w-full overflow-hidden whitespace-nowrap opacity-[0.02] select-none pointer-events-none">
                <motion.h2
                    animate={{ x: [0, -1000] }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="font-display font-black italic text-[25vw] uppercase leading-none"
                >
                    SEMILLERO DEL MUNDO // KOZHIKODE // CHALLENGERS //
                </motion.h2>
            </div>

            <div className="container mx-auto px-8 md:px-24 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                    {/* Brand Meta */}
                    <div className="lg:col-span-5 space-y-12">
                        <div className="space-y-8">
                            <h3 className="font-display font-black text-6xl md:text-8xl leading-[0.8] tracking-tighter uppercase">
                                ARCHITECTING <br /> THE <span className="text-outline-brand italic">FUTURE</span>
                            </h3>
                            <p className="font-sans text-foreground/40 max-w-sm text-sm leading-relaxed">
                                Officially partnered with Argentinos Juniors to bring the legendary &quot;Nursery of World Football&quot; to the shores of Malabar.
                            </p>
                        </div>
                        <div className="flex gap-8 items-center">
                            <MagneticWrapper>
                                <a href="https://www.instagram.com/mcfccalicut/" target="_blank" rel="noreferrer" className="flex items-center gap-3 group cursor-pointer">
                                    <Instagram className="w-5 h-5 text-primary" />
                                    <span className="font-mono text-[9px] font-bold tracking-[0.3em] uppercase group-hover:text-primary transition-colors">IG</span>
                                </a>
                            </MagneticWrapper>
                            <MagneticWrapper>
                                <a href="https://www.youtube.com/@MCFCCalicut" target="_blank" rel="noreferrer" className="flex items-center gap-3 group cursor-pointer">
                                    <Youtube className="w-5 h-5 text-primary" />
                                    <span className="font-mono text-[9px] font-bold tracking-[0.3em] uppercase group-hover:text-primary transition-colors">YT</span>
                                </a>
                            </MagneticWrapper>
                            <MagneticWrapper>
                                <a href="https://wa.me/919544954400" target="_blank" rel="noreferrer" className="flex items-center gap-3 group cursor-pointer">
                                    <MessageCircle className="w-5 h-5 text-primary" />
                                    <span className="font-mono text-[9px] font-bold tracking-[0.3em] uppercase group-hover:text-primary transition-colors">WA</span>
                                </a>
                            </MagneticWrapper>
                        </div>
                    </div>

                    {/* Navigation Clusters */}
                    <div className="lg:col-span-3 lg:ml-auto space-y-12">
                        <h4 className="font-mono text-[10px] uppercase tracking-[0.4em] text-foreground/20">The Archive</h4>
                        <ul className="space-y-6">
                            {['schedule', 'players', 'coaches', 'gallery', 'careers'].map(key => (
                                <li key={key}>
                                    <Link href={`/${key}`} className="group flex items-center justify-between font-display font-black text-2xl uppercase hover:text-primary transition-colors">
                                        {key.toUpperCase()}
                                        <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all group-hover:-rotate-45 text-primary" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Grid */}
                    <div className="lg:col-span-4 lg:ml-auto space-y-12">
                        <div>
                            <h4 className="font-mono text-[10px] uppercase tracking-[0.4em] text-foreground/20 mb-8">Technical HQ</h4>
                            <p className="font-display font-black text-xl uppercase italic leading-tight">
                                18/1512 Rajeswari Compound <br />
                                Kalluthan Kadavu Road <br />
                                Puthiyara, Kozhikode - 673004 <br />
                                <span className="text-primary text-[10px] not-italic font-mono tracking-widest opacity-40">MSRF // Kerala // INDIA</span>
                            </p>
                        </div>
                        <div className="pt-12 border-t border-border/50">
                            <div className="flex flex-col gap-2">
                                <span className="font-mono text-[10px] text-foreground/20 uppercase tracking-[0.3em]">Direct WhatsApp</span>
                                <p className="font-display font-black text-3xl text-primary tracking-tighter">9544 9544 00</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Final Signature */}
                <div className="mt-32 pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="flex items-center gap-8">
                        <Shield className="w-6 h-6 text-primary" />
                        <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-foreground/30">Copyright 2024 Malabar Sports and Recreation Foundation // El Semillero Partner</span>
                    </div>
                    <div className="flex gap-12 text-[9px] font-bold uppercase tracking-[0.3em] text-foreground/30">
                        <Link href="/legal/privacy" className="hover:text-primary cursor-pointer transition-colors">Privacy Annex</Link>
                        <Link href="/legal/terms" className="hover:text-primary cursor-pointer transition-colors">Terms of Play</Link>
                        <Link href="/legal/refund" className="hover:text-primary cursor-pointer transition-colors">Refund Protocol</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

