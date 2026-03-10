"use client";

import { motion } from 'framer-motion';
import { ThemeToggle } from '../ui/theme-toggle';
import { MagneticWrapper } from '../ui/magnetic-wrapper';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navItems = [
    { name: 'home', href: '/' },
    { name: 'about', href: '/about' },
    { name: 'players', href: '/players' },
    { name: 'coaches', href: '/coaches' },
    { name: 'camps', href: '/camps' },
    { name: 'matches', href: '/matches' },
    { name: 'announcements', href: '/announcements' },
    { name: 'gallery', href: '/gallery' },
    { name: 'careers', href: '/careers' },
    { name: 'contact', href: '/contact' }
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (!isOpen) return;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 w-full z-50 px-8 py-4 md:px-12 pointer-events-none flex justify-center"
        >
            <div className="container mx-auto flex justify-between items-center pointer-events-auto relative">

                {/* Sidebar-style Nav Container */}
                <div className="flex items-center gap-8">
                    {/* Brand Identity / Logo */}
                    <MagneticWrapper>
                        <Link href="/" className="group flex items-center gap-4 shrink-0">
                            <div className="relative w-[120px] h-[120px]">
                                <Image
                                    src="/logo.png"
                                    alt="MCFC Logo"
                                    fill
                                    className="object-contain group-hover:scale-105 transition-transform"
                                    priority
                                />
                            </div>
                        </Link>
                    </MagneticWrapper>

                    {/* Beefy Floating Navigation Pill */}
                    <nav className="hidden lg:flex items-center gap-3 py-3 px-6 bg-background/60 backdrop-blur-2xl border border-primary/20 rounded-full shadow-[0_0_30px_rgba(250,188,8,0.1)]">
                        {navItems.map((item) => (
                            <MagneticWrapper key={item.name}>
                                <Link
                                    href={item.href}
                                    prefetch={true}
                                    className="group relative py-2 px-4 hover:bg-primary/10 rounded-full transition-all duration-300"
                                >
                                    <span className="font-display font-bold uppercase tracking-[0.2em] transition-colors text-xs text-foreground/70 hover:text-primary">
                                        {item.name}
                                    </span>
                                </Link>
                            </MagneticWrapper>
                        ))}
                    </nav>
                </div>

                {/* Controls (Theme Toggle & Mobile Toggle) */}
                <div className="flex items-center gap-4 pointer-events-auto">
                    <div className="hidden lg:flex items-center">
                        <ThemeToggle />
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden w-14 h-12 md:w-12 md:h-12 flex items-center justify-center bg-card border border-border text-foreground rounded-none touch-manipulation"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Blueprint Overlay (Mobile) */}
            <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : '100%' }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="fixed inset-0 bg-background/95 backdrop-blur-2xl z-40 p-6 md:p-12 lg:hidden flex flex-col justify-center gap-8"
                style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
            >
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-6 right-6 z-50 w-12 h-12 flex items-center justify-center bg-card border border-border rounded-none"
                    aria-label="Close menu"
                >
                    <X className="w-6 h-6" />
                </button>
                <div className="space-y-6 overflow-y-auto max-h-[70vh] py-4 mt-8">
                    {navItems.map((item, i) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            prefetch={true}
                            onClick={() => setIsOpen(false)}
                            className="block font-display font-black text-4xl uppercase tracking-tighter hover:text-primary transition-colors py-4"
                        >
                            <span className="text-primary text-xs font-mono mr-4 tracking-normal">0{i + 1}.</span>
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="pt-8 border-t border-border flex flex-col gap-6">
                    <ThemeToggle />
                    <p className="font-mono text-[9px] text-foreground/40 leading-relaxed uppercase tracking-widest">
                        MCFC Technical Arena // <br /> Kozhikode South Beach HQ
                    </p>
                </div>
            </motion.div>
        </motion.header>
    );
}
