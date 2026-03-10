"use client";

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitState, setSubmitState] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({
        type: 'idle',
        message: '',
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        const payload = {
            name: String(formData.get('name') || ''),
            role: String(formData.get('role') || ''),
            email: String(formData.get('email') || ''),
            phone: String(formData.get('phone') || ''),
            message: String(formData.get('message') || ''),
            website: String(formData.get('website') || ''),
        };

        setIsSubmitting(true);
        setSubmitState({ type: 'idle', message: '' });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const error = (await response.json().catch(() => null)) as { error?: string } | null;
                throw new Error(error?.error || 'Failed to submit message.');
            }

            form.reset();
            setSubmitState({
                type: 'success',
                message: 'Message submitted successfully. Our team will contact you soon.',
            });
        } catch (error) {
            setSubmitState({
                type: 'error',
                message: error instanceof Error ? error.message : 'Unable to submit your message right now.',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col selection:bg-primary selection:text-background">
            <Header />

            <div className="flex-1 w-full pt-32 pb-24">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">

                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-20 md:mb-32"
                    >
                        <span className="font-mono text-xs text-primary uppercase tracking-[0.6em] block mb-6">
                            Start a Conversation
                        </span>
                        <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-[0.85] max-w-5xl">
                            Let&apos;s Shape The <span className="text-outline-brand italic">Future.</span>
                        </h1>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                        {/* Left Column: Information */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="lg:col-span-4 flex flex-col justify-between"
                        >
                            <div className="space-y-16">
                                {/* Address */}
                                <div>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                            <MapPin className="w-4 h-4 text-primary" />
                                        </div>
                                        <h3 className="font-mono text-[10px] text-foreground/50 uppercase tracking-widest">Headquarters</h3>
                                    </div>
                                    <p className="font-serif text-2xl leading-relaxed max-w-xs">
                                        Nayinan Valappil Ground,<br />
                                        South Beach Road,<br />
                                        Kozhikode, Kerala
                                    </p>
                                </div>

                                {/* Direct Line */}
                                <div>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                            <Phone className="w-4 h-4 text-primary" />
                                        </div>
                                        <h3 className="font-mono text-[10px] text-foreground/50 uppercase tracking-widest">Direct Line</h3>
                                    </div>
                                    <a href="tel:+919544954400" className="font-display font-black text-4xl uppercase tracking-tight hover:text-primary transition-colors">
                                        +91 9544<br />9544 00
                                    </a>
                                </div>

                                {/* Email */}
                                <div>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                            <Mail className="w-4 h-4 text-primary" />
                                        </div>
                                        <h3 className="font-mono text-[10px] text-foreground/50 uppercase tracking-widest">Email Enquiries</h3>
                                    </div>
                                    <a href="mailto:hello@malabarchallengers.com" className="font-serif text-xl border-b border-primary/30 hover:border-primary pb-1 transition-colors">
                                        hello@malabarchallengers.com
                                    </a>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="mt-16 pt-16 border-t border-border/30">
                                <h3 className="font-mono text-[10px] text-foreground/50 uppercase tracking-widest mb-6">Social Network</h3>
                                <div className="flex gap-4">
                                    <a href="#" className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-background hover:border-primary transition-all duration-300 hover:scale-105 group">
                                        <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    </a>
                                    <a href="#" className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-background hover:border-primary transition-all duration-300 hover:scale-105 group">
                                        <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    </a>
                                    <a href="#" className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-background hover:border-primary transition-all duration-300 hover:scale-105 group">
                                        <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column: Premium Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="lg:col-span-8"
                        >
                            <div className="bg-card/30 border border-border/50 rounded-[3rem] p-8 md:p-16 relative overflow-hidden backdrop-blur-sm">
                                {/* Subtle decorative elements */}
                                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
                                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

                                <h2 className="font-display font-black text-3xl md:text-4xl uppercase tracking-tighter mb-12 relative z-10">
                                    Send a Message
                                </h2>

                                <form className="space-y-12 relative z-10" onSubmit={handleSubmit}>
                                    <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" />
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                        <div className="relative group">
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                className="w-full bg-transparent border-b border-border/50 py-4 font-serif text-2xl focus:border-primary outline-none transition-colors peer placeholder-transparent"
                                                placeholder="Full Name"
                                            />
                                            <label htmlFor="name" className="absolute left-0 top-4 text-foreground/40 font-serif text-2xl transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:font-mono peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-primary peer-valid:-top-6 peer-valid:text-xs peer-valid:font-mono peer-valid:uppercase peer-valid:tracking-widest cursor-text">
                                                Full Name
                                            </label>
                                        </div>
                                        <div className="relative group">
                                            <input
                                                type="text"
                                                id="role"
                                                name="role"
                                                required
                                                className="w-full bg-transparent border-b border-border/50 py-4 font-serif text-2xl focus:border-primary outline-none transition-colors peer placeholder-transparent"
                                                placeholder="I am a..."
                                            />
                                            <label htmlFor="role" className="absolute left-0 top-4 text-foreground/40 font-serif text-2xl transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:font-mono peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-primary peer-valid:-top-6 peer-valid:text-xs peer-valid:font-mono peer-valid:uppercase peer-valid:tracking-widest cursor-text">
                                                I am a... (Player, Parent, Partner)
                                            </label>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                        <div className="relative group">
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                className="w-full bg-transparent border-b border-border/50 py-4 font-serif text-2xl focus:border-primary outline-none transition-colors peer placeholder-transparent"
                                                placeholder="Email Address"
                                            />
                                            <label htmlFor="email" className="absolute left-0 top-4 text-foreground/40 font-serif text-2xl transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:font-mono peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-primary peer-valid:-top-6 peer-valid:text-xs peer-valid:font-mono peer-valid:uppercase peer-valid:tracking-widest cursor-text">
                                                Email Address
                                            </label>
                                        </div>
                                        <div className="relative group">
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                required
                                                className="w-full bg-transparent border-b border-border/50 py-4 font-serif text-2xl focus:border-primary outline-none transition-colors peer placeholder-transparent"
                                                placeholder="Phone Number"
                                            />
                                            <label htmlFor="phone" className="absolute left-0 top-4 text-foreground/40 font-serif text-2xl transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:font-mono peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-primary peer-valid:-top-6 peer-valid:text-xs peer-valid:font-mono peer-valid:uppercase peer-valid:tracking-widest cursor-text">
                                                Phone Number
                                            </label>
                                        </div>
                                    </div>

                                    <div className="relative group pt-4">
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={4}
                                            className="w-full bg-transparent border-b border-border/50 py-4 font-serif text-2xl focus:border-primary outline-none resize-none transition-colors peer placeholder-transparent"
                                            placeholder="Tell us about..."
                                        ></textarea>
                                        <label htmlFor="message" className="absolute left-0 top-4 text-foreground/40 font-serif text-2xl transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:font-mono peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-primary peer-valid:-top-6 peer-valid:text-xs peer-valid:font-mono peer-valid:uppercase peer-valid:tracking-widest cursor-text">
                                            Tell us about your inquiry...
                                        </label>
                                    </div>

                                    <div className="pt-8 flex justify-end">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="group relative inline-flex items-center gap-4 bg-foreground text-background px-10 py-6 rounded-full font-display font-black uppercase tracking-wider text-sm hover:bg-primary transition-colors duration-300"
                                        >
                                            {isSubmitting ? 'Submitting...' : 'Submit Message'}
                                            <div className="w-8 h-8 rounded-full bg-background/20 flex items-center justify-center group-hover:bg-background group-hover:text-primary transition-colors">
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </button>
                                    </div>

                                    {submitState.type !== 'idle' && (
                                        <p
                                            className={`pt-2 text-sm font-mono uppercase tracking-wider ${submitState.type === 'success'
                                                ? 'text-primary'
                                                : 'text-red-400'
                                                }`}
                                        >
                                            {submitState.message}
                                        </p>
                                    )}
                                </form>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
