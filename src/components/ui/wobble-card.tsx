"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const WobbleCard = ({
    children,
    containerClassName,
    className,
}: {
    children: React.ReactNode;
    containerClassName?: string;
    className?: string;
}) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
        const { clientX, clientY } = event;
        const { left, top } = event.currentTarget.getBoundingClientRect();
        const x = clientX - left;
        const y = clientY - top;
        setMousePosition({ x, y });
    };

    return (
        <motion.section
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
                setIsHovering(false);
                setMousePosition({ x: 0, y: 0 });
            }}
            style={{
                transform: isHovering
                    ? `perspective(1000px) rotateX(${(mousePosition.y - 150) / 10
                    }deg) rotateY(${-(mousePosition.x - 150) / 10}deg) scale3d(1.02, 1.02, 1.02)`
                    : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
                transition: "transform 0.1s ease-out",
            }}
            className={cn(
                "relative mx-auto w-full bg-card rounded-3xl overflow-hidden shadow-xl dark:shadow-none border border-border/50 dark:border-white/10",
                containerClassName
            )}
        >
            <div
                className="relative h-full [background-image:radial-gradient(88%_100%_at_top,rgba(var(--primary-rgb),0.15),rgba(255,255,255,0))] dark:[background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.1),rgba(255,255,255,0))] sm:mx-0 sm:rounded-2xl"
            >
                <motion.div
                    style={{
                        transform: isHovering
                            ? `translate3d(${(mousePosition.x - 150) / 20}px, ${(mousePosition.y - 150) / 20
                            }px, 0)`
                            : "translate3d(0, 0, 0)",
                        transition: "transform 0.1s ease-out",
                    }}
                    className={cn("h-full px-4 py-8 sm:px-10", className)}
                >
                    {children}
                </motion.div>
            </div>
        </motion.section>
    );
};
