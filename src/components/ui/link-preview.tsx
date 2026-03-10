"use client";

import React, { useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";

export const LinkPreview = ({
    children,
    url,
    className,
    width = 300,
    height = 180,
    imageSrc,
}: {
    children: React.ReactNode;
    url: string;
    className?: string;
    width?: number;
    height?: number;
    imageSrc?: string;
}) => {
    const [isOpen, setOpen] = useState(false);

    // X position for mouse tracking
    const x = useMotionValue(0);
    // Smooth the mouse movement
    const xSpring = useSpring(x, { stiffness: 100, damping: 15 });

    const handleMouseMove = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        const targetRect = (event.currentTarget as HTMLElement).getBoundingClientRect();
        const eventOffsetX = event.clientX - targetRect.left;
        const offsetFromCenter = (eventOffsetX - targetRect.width / 2);
        x.set(offsetFromCenter);
    };

    const defaultImage = "/AJ Logo .png";
    const isAJ = url.includes("argentinosjuniors.com.ar");

    return (
        <span
            className="relative inline-block z-40 group"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            onMouseMove={handleMouseMove}
        >
            <AnimatePresence mode="wait">
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: {
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                            },
                        }}
                        exit={{ opacity: 0, y: 20, scale: 0.8 }}
                        className="absolute hidden sm:block drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] z-50 rounded-2xl overflow-hidden border-[3px] border-white/10 dark:border-white/20 shadow-2xl"
                        style={{
                            width,
                            height,
                            x: xSpring,
                            // Center exactly over the link
                            bottom: "100%",
                            left: "50%",
                            marginLeft: -(width / 2),
                            marginBottom: 24,
                        }}
                    >
                        <div className="relative w-full h-full group/preview cursor-pointer">
                            <motion.img
                                src={imageSrc || defaultImage}
                                className="w-full h-full object-cover rounded-xl"
                                alt="Preview link image"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
                                <div className="px-4 py-2 bg-primary text-background font-display font-black text-[10px] uppercase tracking-widest rounded-full shadow-xl transform translate-y-2 group-hover/preview:translate-y-0 transition-transform duration-300">
                                    Visit Official Site
                                </div>
                            </div>
                            {isAJ && (
                                <div className="absolute top-3 left-3 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[8px] font-mono text-white uppercase tracking-widest shadow-lg">
                                    Official Partner
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* The Text Link itself */}
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative z-10 font-bold inline-flex items-center transition-colors hover:text-primary ${className}`}
            >
                {children}
            </a>
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
        </span>
    );
};
