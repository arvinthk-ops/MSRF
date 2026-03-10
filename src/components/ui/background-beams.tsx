"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

export const BackgroundBeams = ({ className }: { className?: string }) => {
    return (
        <div
            className={cn(
                "absolute inset-0 z-0 h-full w-full pointer-events-none overflow-hidden",
                className
            )}
        >
            <div className="absolute inset-0 bg-dot-brand-gold/[0.1] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="absolute inset-0"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 1440 900"
                    className="h-full w-full"
                >
                    <g filter="url(#filter0_f_1_1)">
                        <circle
                            cx="720"
                            cy="450"
                            r="200"
                            fill="var(--primary)"
                            fillOpacity="0.05"
                        />
                    </g>
                    <defs>
                        <filter
                            id="filter0_f_1_1"
                            x="0"
                            y="-270"
                            width="1440"
                            height="1440"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                            />
                            <feGaussianBlur
                                stdDeviation="260"
                                result="effect1_foregroundBlur_1_1"
                            />
                        </filter>
                    </defs>
                </svg>
            </motion.div>
        </div>
    );
};
