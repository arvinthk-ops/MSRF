"use client";
/* eslint-disable @next/next/no-img-element */

import { cn } from "@/lib/utils";
import React, { useEffect } from "react";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: {
        quote: string;
        name: string;
        role: string;
        location?: string;
        avatar?: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);
    const initializedRef = React.useRef(false);

    const getDirection = React.useCallback(() => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    }, [direction]);

    const getSpeed = React.useCallback(() => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    }, [speed]);

    const addAnimation = React.useCallback(() => {
        if (initializedRef.current) return;
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            initializedRef.current = true;
        }
    }, [getDirection, getSpeed]);

    useEffect(() => {
        addAnimation();
    }, [addAnimation]);

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                    "animate-scroll ",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, idx) => (
                    <li
                        className="w-[350px] max-w-full relative rounded-2xl border flex-shrink-0 border-border/50 px-8 py-6 md:w-[450px] bg-card/30 backdrop-blur-md transition-all duration-300 hover:border-primary/30"
                        style={{
                            background:
                                "linear-gradient(180deg, var(--background) 0%, rgba(var(--primary-rgb), 0.05) 100%)",
                        }}
                        key={item.name + idx}
                    >
                        <blockquote className="space-y-6">
                            <div className="relative z-20 flex flex-row items-center gap-4">
                                {item.avatar && (
                                    <div className="relative">
                                        <img
                                            src={item.avatar}
                                            alt={item.name}
                                            className="w-12 h-12 rounded-full object-cover border border-border group-hover:border-primary/50 transition-colors"
                                        />
                                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-background flex items-center justify-center">
                                            <div className="w-1.5 h-1.5 bg-background rounded-full" />
                                        </div>
                                    </div>
                                )}
                                <span className="flex flex-col">
                                    <span className="text-base font-display font-black uppercase tracking-tight text-foreground">
                                        {item.name}
                                    </span>
                                    <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-widest">
                                        @{item.role.toLowerCase().replace(/\s+/g, '_')} • {item.location || "MCFC Elite"}
                                    </span>
                                </span>
                            </div>

                            <div className="relative">
                                <span className="relative z-20 text-sm md:text-base leading-relaxed text-foreground/70 font-sans italic">
                                    &quot;{item.quote}&quot;
                                </span>
                            </div>
                        </blockquote>
                    </li>
                ))}
            </ul>
        </div>
    );
};
