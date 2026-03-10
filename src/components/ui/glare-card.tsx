"use client";

import { cn } from "@/lib/utils";
import React, { useRef } from "react";

export const GlareCard = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    const isPointerInside = useRef(false);
    const refElement = useRef<HTMLDivElement>(null);
    const state = useRef({
        glare: { x: 50, y: 50 },
        background: { x: 50, y: 50 },
        rotate: { x: 0, y: 0 },
    });

    const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
        const rotateFactor = 0.4;
        const rect = event.currentTarget.getBoundingClientRect();
        const position = {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
        };
        const percentage = {
            x: (100 / rect.width) * position.x,
            y: (100 / rect.height) * position.y,
        };
        const delta = {
            x: percentage.x - 50,
            y: percentage.y - 50,
        };

        const { background, rotate, glare } = state.current;
        background.x = 50 + percentage.x / 4 - 12.5;
        background.y = 50 + percentage.y / 3 - 16.67;
        rotate.x = -(delta.y / 3.5) * rotateFactor;
        rotate.y = (delta.x / 10.5) * rotateFactor;
        glare.x = percentage.x;
        glare.y = percentage.y;

        updateStyles();
    };

    const handlePointerEnter = () => {
        isPointerInside.current = true;
        if (refElement.current) {
            setTimeout(() => {
                if (isPointerInside.current) {
                    refElement.current?.style.setProperty("--duration", "0s");
                }
            }, 300);
        }
    };

    const handlePointerLeave = () => {
        isPointerInside.current = false;
        if (refElement.current) {
            refElement.current.style.removeProperty("--duration");
            refElement.current?.style.setProperty("--rotate-x", `0deg`);
            refElement.current?.style.setProperty("--rotate-y", `0deg`);
            refElement.current?.style.setProperty("--glare-opacity", "0");
            refElement.current?.style.setProperty("--glare-x", "50%");
            refElement.current?.style.setProperty("--glare-y", "50%");
            refElement.current?.style.setProperty("--background-x", "50%");
            refElement.current?.style.setProperty("--background-y", "50%");
        }
    };

    const updateStyles = () => {
        if (refElement.current) {
            const { background, rotate, glare } = state.current;
            refElement.current?.style.setProperty("--rotate-x", `${rotate.x}deg`);
            refElement.current?.style.setProperty("--rotate-y", `${rotate.y}deg`);
            refElement.current?.style.setProperty("--glare-opacity", "1");
            refElement.current?.style.setProperty("--glare-x", `${glare.x}%`);
            refElement.current?.style.setProperty("--glare-y", `${glare.y}%`);
            refElement.current?.style.setProperty("--background-x", `${background.x}%`);
            refElement.current?.style.setProperty("--background-y", `${background.y}%`);
        }
    };

    const glareStyle = {
        "--m-x": "50%",
        "--m-y": "50%",
        "--r-x": "0deg",
        "--r-y": "0deg",
        "--bg-x": "50%",
        "--bg-y": "50%",
        "--duration": "300ms",
        "--foil-size": "100%",
        "--opacity": "0",
        "--radius": "1.5rem",
        "--easing": "ease",
        "--transition": "var(--duration) var(--easing)",
    } as React.CSSProperties & Record<`--${string}`, string>;

    return (
        <div
            style={glareStyle}
            className="relative [perspective:600px] w-full h-full"
        >
            <div
                ref={refElement}
                onPointerMove={handlePointerMove}
                onPointerEnter={handlePointerEnter}
                onPointerLeave={handlePointerLeave}
                className={cn(
                    "relative h-full transition-transform duration-[var(--duration)] ease-[var(--easing)] [transform:rotateY(var(--rotate-y))_rotateX(var(--rotate-x))] rounded-[var(--radius)] border border-white/10 overflow-hidden",
                    className
                )}
            >
                <div className="relative w-full h-full grid [grid-stack] items-center">
                    <div className="absolute inset-0 [grid-area:1/1] opacity-[var(--glare-opacity)] [background-image:radial-gradient(farthest-corner_circle_at_var(--glare-x)_var(--glare-y),_rgba(255,255,255,0.8)_10%,_rgba(255,255,255,0.65)_20%,_rgba(0,0,0,0.5)_90%)] [mix-blend-mode:overlay] transition-opacity z-[1]" />
                    <div className="[grid-area:1/1] h-full w-full">{children}</div>
                </div>
            </div>
        </div>
    );
};
