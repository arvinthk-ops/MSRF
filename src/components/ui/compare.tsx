"use client";
/* eslint-disable @next/next/no-img-element */

import React, { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CompareProps {
    firstImage: string;
    secondImage: string;
    firstImageAlt?: string;
    secondImageAlt?: string;
    className?: string;
    slideMode?: "hover" | "drag";
    autoplay?: boolean;
    autoplayDuration?: number;
}

export const Compare = ({
    firstImage,
    secondImage,
    firstImageAlt = "First image",
    secondImageAlt = "Second image",
    className,
    slideMode = "hover",
    autoplay = false,
    autoplayDuration = 5000,
}: CompareProps) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const autoplayRef = useRef<NodeJS.Timeout | null>(null);
    const directionRef = useRef<1 | -1>(1);

    const updatePosition = useCallback((clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPosition(percentage);
    }, []);

    const handleMouseMove = useCallback(
        (e: React.MouseEvent) => {
            if (slideMode === "hover") {
                updatePosition(e.clientX);
            } else if (isDragging) {
                updatePosition(e.clientX);
            }
        },
        [slideMode, isDragging, updatePosition]
    );

    const handleTouchMove = useCallback(
        (e: React.TouchEvent) => {
            if (slideMode === "hover" || isDragging) {
                updatePosition(e.touches[0].clientX);
            }
        },
        [slideMode, isDragging, updatePosition]
    );

    React.useEffect(() => {
        if (!autoplay) return;

        const tickMs = 16;
        const sweepDuration = Math.max(autoplayDuration, tickMs);
        const step = 70 / (sweepDuration / tickMs);

        const animate = () => {
            setSliderPosition((prev) => {
                const next = prev + directionRef.current * step;
                if (next >= 85) directionRef.current = -1;
                if (next <= 15) directionRef.current = 1;
                return next;
            });
        };

        const interval = setInterval(animate, tickMs);
        autoplayRef.current = interval;

        return () => {
            if (autoplayRef.current) clearInterval(autoplayRef.current);
        };
    }, [autoplay, autoplayDuration]);

    return (
        <div
            ref={containerRef}
            className={cn(
                "relative w-full aspect-[16/9] overflow-hidden rounded-3xl cursor-col-resize select-none group",
                className
            )}
            onMouseMove={handleMouseMove}
            onMouseDown={() => slideMode === "drag" && setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => {
                setIsDragging(false);
                if (slideMode === "hover") setSliderPosition(50);
            }}
            onTouchMove={handleTouchMove}
            onTouchStart={() => slideMode === "drag" && setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
        >
            {/* Second Image (Right/Background) */}
            <img
                src={secondImage}
                alt={secondImageAlt}
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
            />

            {/* First Image (Left/Clipped) */}
            <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <img
                    src={firstImage}
                    alt={firstImageAlt}
                    className="absolute inset-0 w-full h-full object-cover"
                    draggable={false}
                />
            </div>

            {/* Slider Line */}
            <motion.div
                className="absolute top-0 bottom-0 w-[2px] z-20"
                style={{ left: `${sliderPosition}%` }}
                animate={{ left: `${sliderPosition}%` }}
                transition={{ type: "tween", duration: 0.05, ease: "linear" }}
            >
                <div className="absolute inset-0 bg-white/80 shadow-[0_0_20px_rgba(255,255,255,0.5)]" />

                {/* Slider Handle */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border-2 border-white shadow-[0_0_30px_rgba(255,255,255,0.4)] flex items-center justify-center z-30">
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black/70"
                    >
                        <polyline points="15 18 9 12 15 6" />
                        <polyline points="9 18 15 12 9 6" transform="translate(6, 0)" />
                    </svg>
                </div>
            </motion.div>

            {/* Labels */}
            <div className="absolute bottom-4 left-4 z-10 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm">
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/90">
                    {firstImageAlt}
                </span>
            </div>
            <div className="absolute bottom-4 right-4 z-10 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm">
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/90">
                    {secondImageAlt}
                </span>
            </div>

            {/* Border Overlay */}
            <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none z-30" />
        </div>
    );
};
