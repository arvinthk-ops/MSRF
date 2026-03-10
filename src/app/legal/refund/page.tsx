"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function RefundPage() {
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
                        <h1 className="font-display font-black text-5xl uppercase tracking-tighter mb-12">Refund & Return</h1>
                        <div className="prose prose-invert prose-slate max-w-none space-y-6 text-foreground/60 font-sans leading-relaxed">
                            <p>This refund and cancellation policy outlines how you can cancel or seek a refund for a product / service that you have purchased through the Platform.</p>
                            <p>1. Cancellations will only be considered if the request is made 2 days of placing the order.</p>
                            <p>2. MALABAR SPORTS AND RECREATION FOUNDATION does not accept cancellation requests for perishable items.</p>
                            <p>3. In case of any refunds approved by MALABAR SPORTS AND RECREATION FOUNDATION, it will take 7 days for the refund to be processed to you.</p>
                        </div>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
