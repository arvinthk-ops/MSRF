"use client";
import {
    useScroll,
    useTransform,
    motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
    title: string;
    content: React.ReactNode;
}

interface TimelineProps {
    data: TimelineEntry[];
    title?: React.ReactNode;
    description?: React.ReactNode;
}

export const Timeline = ({ data, title, description }: TimelineProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div
            className="w-full font-sans md:px-10"
            ref={containerRef}
        >
            <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10">
                {title && (
                    <h2 className="text-lg md:text-5xl mb-4 text-foreground max-w-4xl font-display font-black tracking-tighter uppercase leading-none drop-shadow-md">
                        {title}
                    </h2>
                )}
                {description && (
                    <p className="text-foreground/60 text-base md:text-lg max-w-2xl font-serif">
                        {description}
                    </p>
                )}
            </div>

            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-start pt-10 md:pt-40 gap-4"
                    >
                        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start w-fit shrink-0 md:mr-8 lg:mr-12">
                            <div className="h-10 absolute left-3 w-10 rounded-full bg-background flex items-center justify-center border border-border">
                                <div className="h-4 w-4 rounded-full bg-primary/20 border border-primary p-2" />
                            </div>
                            <h3 className="hidden md:block text-sm md:text-base lg:text-lg md:pl-20 font-bold text-foreground/50 uppercase font-display tracking-tight whitespace-nowrap">
                                {item.title}
                            </h3>
                        </div>

                        <div className="relative pr-4 md:pl-0 w-full overflow-hidden">
                            <h3 className="md:hidden block text-xl mb-4 text-left font-bold text-foreground/30 uppercase font-display tracking-tight pl-20">
                                {item.title}
                            </h3>
                            {item.content}
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-border to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-primary via-primary to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};
