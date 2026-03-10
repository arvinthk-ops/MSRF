"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export const AnimatedBorder = ({
    children,
    className,
    containerClassName,
}: {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
}) => {
    return (
        <div className={cn("relative p-[2px] group overflow-hidden rounded-3xl", containerClassName)}>
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute z-0 w-[300%] h-[300%] -left-[100%] -top-[100%] bg-[conic-gradient(from_0deg,transparent_0_180deg,var(--primary)_360deg)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            {/* Background layer to hide the gradient everywhere except the border */}
            <div className="absolute inset-[2px] z-10 bg-card rounded-[calc(1.5rem-2px)]" />

            <div className={cn("relative z-20 rounded-[calc(1.5rem-2px)] bg-transparent transition-colors duration-500 h-full", className)}>
                {children}
            </div>
        </div>
    );
};
