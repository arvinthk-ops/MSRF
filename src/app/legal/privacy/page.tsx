"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Header />
            <section className="pt-48 pb-32 px-8 md:px-24">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-12 border border-border bg-card shadow-2xl"
                    >
                        <h1 className="font-display font-black text-5xl uppercase tracking-tighter mb-12">Privacy Policy</h1>
                        <div className="prose prose-invert prose-slate max-w-none space-y-6 text-foreground/60 font-sans leading-relaxed">
                            <p>This Privacy Policy describes how MALABAR SPORTS AND RECREATION FOUNDATION and its affiliates collect, use, share, protect or otherwise process your information/ personal data through our website https://malabarchallengersfc.com.</p>
                            <p>By visiting this Platform, providing your information or availing any product/service offered on the Platform, you expressly agree to be bound by the terms and conditions of this Privacy Policy and the Terms of Use.</p>
                            <p><strong>Grievance Officer:</strong> TK Rajmohan, IPS (Retd)<br />
                                Managing Director and CEO, MSRF<br />
                                Kozhikode – 673004, Kerala, INDIA<br />
                                Email: contact@msrf.co.in</p>
                        </div>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
