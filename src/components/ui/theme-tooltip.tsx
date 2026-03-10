"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, Sparkles } from "lucide-react";

export function ThemeTooltip() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const dismissed = localStorage.getItem("mcfc-theme-tooltip-dismissed");
        if (!dismissed) {
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const dismiss = () => {
        setIsVisible(false);
        localStorage.setItem("mcfc-theme-tooltip-dismissed", "true");
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute top-full right-0 mt-4 w-64 p-5 bg-card/90 backdrop-blur-xl border border-primary/30 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.3)] z-[60] pointer-events-auto"
                >
                    <div className="absolute -top-2 right-6 w-4 h-4 bg-card border-l border-t border-primary/30 rotate-45 z-[-1]" />

                    <div className="space-y-3">
                        <div className="flex items-center gap-2 text-primary">
                            <Sparkles className="w-4 h-4" />
                            <span className="font-mono text-[10px] font-black uppercase tracking-widest">Interface Mode</span>
                        </div>
                        <p className="text-sm text-foreground/80 leading-relaxed font-sans font-medium">
                            Switch between <span className="text-primary font-bold italic">Light</span> & <span className="text-primary font-bold italic">Dark</span> modes to explore our technical arena.
                        </p>
                        <button
                            onClick={dismiss}
                            className="w-full py-2 bg-primary text-background font-display font-bold text-[10px] uppercase tracking-widest rounded-lg hover:bg-primary/90 transition-all active:scale-95 shadow-lg shadow-primary/20"
                        >
                            Got it, Challenger
                        </button>
                    </div>

                    <button
                        onClick={dismiss}
                        className="absolute top-2 right-2 p-1 text-foreground/40 hover:text-primary transition-colors"
                    >
                        <X className="w-3 h-3" />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
