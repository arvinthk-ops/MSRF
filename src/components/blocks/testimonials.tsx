"use client";

import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

type TestimonialItem = {
    quote: string;
    name: string;
    role: string;
    location: string;
    avatar: string;
};

const defaultTestimonials: TestimonialItem[] = [
    {
        quote: "My son has grown not just as a footballer, but as a person. The training methodology is world-class and the coaches truly care about each player's development.",
        name: "Rajesh Kumar",
        role: "Parent",
        location: "Kozhikode",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200&auto=format&fit=crop"
    },
    {
        quote: "The partnership with Argentinos Juniors brings authentic Argentine football philosophy to Kerala. It's an incredible opportunity for young players to learn from the best.",
        name: "Anil Kumar",
        role: "Parent",
        location: "Malappuram",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200&auto=format&fit=crop"
    },
    {
        quote: "The facilities are top-notch and the focus on holistic development sets MCFC apart. My daughter loves her training sessions and has improved tremendously.",
        name: "Sindhu Nair",
        role: "Parent",
        location: "Kannur",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200&auto=format&fit=crop"
    },
    {
        quote: "Being part of MCFC has been a life-changing experience. The coaches push us to be our best while maintaining a fun and supportive environment.",
        name: "Muhammad Faisal",
        role: "Player",
        location: "Age Group 14-16",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200&auto=format&fit=crop"
    },
    {
        quote: "Best technical academy in South India. The integration of tactical awareness with physical training is exactly what Indian football needs.",
        name: "Suresh Menon",
        role: "Technical Scout",
        location: "Bengaluru",
        avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200&auto=format&fit=crop"
    },
    {
        quote: "Our local talent finally has a pathway to international standards. MCFC is building a legacy that will define Kerala football for decades.",
        name: "Abdulla K.",
        role: "Local Fan",
        location: "Kozhikode",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200&auto=format&fit=crop"
    },
    {
        quote: "MCFC's professionalism is unmatched. From the training kits to the tournament exposure, everything is handled with a level of detail that is rare in Indian grassroots football.",
        name: "Kiran Das",
        role: "Parent",
        location: "Thrissur",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200&auto=format&fit=crop"
    },
    {
        quote: "The tactical analysis sessions have completely changed how I see the game. I now understand why I need to be in certain positions even when I don't have the ball.",
        name: "Aditya S.",
        role: "Elite Player",
        location: "Palakkad",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200&auto=format&fit=crop"
    },
    {
        quote: "We chose MCFC because of their long-term vision. They aren't just looking for immediate wins; they are building players who can compete on a global stage by 2031.",
        name: "Meera Nair",
        role: "Parent",
        location: "Wayanad",
        avatar: "https://images.unsplash.com/photo-1548142813-c348350df52b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200&auto=format&fit=crop"
    }
];

export function Testimonials({ testimonials }: { testimonials?: TestimonialItem[] }) {
    const data = testimonials && testimonials.length >= 6 ? testimonials : defaultTestimonials;

    const firstRow = data.slice(0, 3);
    const secondRow = data.slice(3, 6);

    return (
        <section className="bg-background relative py-32 overflow-hidden border-t border-border/10">
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4v4H0v2h4v4h2V6h4V0H4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="w-full relative z-10 text-center px-4 md:px-8">
                <div className="mb-20 container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block bg-primary/10 text-primary px-4 py-1.5 text-[10px] font-mono font-bold uppercase tracking-[0.3em] mb-6 border border-primary/20"
                    >
                        THE SOCIAL PITCH
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter"
                    >
                        LEGACY <span className="italic text-outline-pitch">VERIFIED</span>
                    </motion.h2>
                </div>

                <div className="flex flex-col gap-8 relative overflow-hidden w-full max-w-7xl mx-auto">
                    <div className="w-full">
                        <InfiniteMovingCards
                            items={firstRow}
                            direction="left"
                            speed="slow"
                            pauseOnHover={true}
                        />
                    </div>

                    <div className="w-full">
                        <InfiniteMovingCards
                            items={secondRow}
                            direction="right"
                            speed="slow"
                            pauseOnHover={true}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
