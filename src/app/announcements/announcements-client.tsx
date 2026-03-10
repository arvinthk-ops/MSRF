"use client";
/* eslint-disable @next/next/no-img-element */

import { motion, AnimatePresence } from 'framer-motion';
import { Timeline } from '@/components/ui/timeline';
import { useState } from 'react';
import { X, ArrowRight, Share2, Calendar } from 'lucide-react';

type AnnouncementArticle = {
    id: number;
    category: string;
    tagColor: string;
    title: string;
    date: string;
    readTime: string;
    excerpt: string;
    content: string;
    image?: string | null;
    stats?: Array<{ label: string; value: string; tag: string }>;
    gridImages?: string[];
};

function ArticleDetailModal({ article, onClose }: { article: AnnouncementArticle; onClose: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 pt-24"
            onClick={onClose}
        >
            <div className="absolute inset-0 bg-background/90 backdrop-blur-3xl" />
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl max-h-full overflow-y-auto bg-card border border-border flex flex-col rounded-[2rem] shadow-2xl custom-scrollbar"
                onWheel={(e) => e.stopPropagation()}
                onTouchMove={(e) => e.stopPropagation()}
            >
                <div className="sticky top-0 z-20 flex justify-between items-center p-6 bg-card/80 backdrop-blur-md border-b border-border/50">
                    <span className={`px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-widest rounded-full ${article.tagColor}`}>
                        {article.category}
                    </span>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-background hover:border-primary transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-8 md:p-16">
                    <h2 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter mb-8 leading-none">
                        {article.title}
                    </h2>

                    <div className="flex flex-wrap items-center gap-6 mb-12 text-foreground/50 font-mono text-sm tracking-widest uppercase">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" /> {article.date}
                        </div>
                    </div>

                    {article.image && (
                        <div className="mb-12 rounded-3xl overflow-hidden border border-border shadow-xl">
                            <img src={article.image} alt={article.title} className="w-full h-[50vh] object-cover" />
                        </div>
                    )}

                    {article.stats && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                            {article.stats.map((stat, idx) => (
                                <div key={idx} className="p-8 bg-background border border-border rounded-3xl shadow-lg text-center">
                                    <span className="font-mono text-xs text-primary block mb-2 tracking-widest">{stat.tag}</span>
                                    <span className="font-display font-black text-6xl block mb-2">{stat.value}</span>
                                    <p className="text-sm text-foreground/50 uppercase font-bold tracking-wider">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {article.gridImages && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                            {article.gridImages.map((img, idx) => (
                                <img key={idx} src={img} alt="Gallery" className="w-full h-80 object-cover rounded-3xl shadow-xl" />
                            ))}
                        </div>
                    )}

                    <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/80 leading-relaxed font-serif">
                        <p className="text-2xl leading-relaxed first-letter:float-left first-letter:text-7xl first-letter:pr-4 first-letter:font-black first-letter:text-primary">
                            {article.content}
                        </p>
                    </div>

                    <div className="mt-16 pt-8 border-t border-border flex justify-between items-center">
                        <button className="flex items-center gap-3 px-6 py-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors font-mono text-xs uppercase tracking-widest font-bold">
                            <Share2 className="w-4 h-4" /> Share Article
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function AnnouncementsClient({ articles }: { articles: AnnouncementArticle[] }) {
    const [selectedArticle, setSelectedArticle] = useState<AnnouncementArticle | null>(null);

    const timelineData = articles.map((article) => ({
        title: article.date,
        content: (
            <div className="relative group cursor-pointer mb-20" onClick={() => setSelectedArticle(article)}>
                <h2 className={`${article.tagColor} rounded-full text-xs w-fit px-4 py-2 mb-4 font-mono font-bold tracking-[0.2em] uppercase`}>
                    {article.category}
                </h2>
                <p className="font-display font-black text-4xl md:text-5xl uppercase tracking-tighter mb-4 group-hover:text-primary transition-colors">
                    {article.title}
                </p>
                <div className="text-foreground/70 text-lg leading-relaxed">
                    <p className="mb-8">{article.excerpt}</p>

                    {article.image && (
                        <div className="relative overflow-hidden rounded-3xl mb-4 shadow-xl">
                            <img src={article.image} alt={article.title} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                    )}

                    {article.stats && (
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            {article.stats.map((stat, idx) => (
                                <div key={idx} className="p-6 md:p-8 bg-card border border-border rounded-3xl shadow-lg">
                                    <span className="font-mono text-[10px] md:text-xs text-primary block mb-2 tracking-widest">{stat.tag}</span>
                                    <span className="font-display font-black text-4xl md:text-5xl">{stat.value}</span>
                                    <p className="text-[10px] md:text-xs text-foreground/50 mt-1 uppercase font-bold tracking-wider">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {article.gridImages && (
                        <div className="grid grid-cols-2 gap-4">
                            {article.gridImages.map((img, idx) => (
                                <img key={idx} src={img} alt={`Gallery ${idx}`} className="w-full h-48 md:h-64 object-cover rounded-3xl shadow-xl hover:opacity-80 transition-opacity" />
                            ))}
                        </div>
                    )}
                </div>
                <div className="mt-8 flex items-center gap-3 text-primary font-mono text-xs font-bold uppercase tracking-widest group-hover:translate-x-4 transition-transform duration-300">
                    Read Dispatch <ArrowRight className="w-4 h-4" />
                </div>
            </div>
        )
    }));

    return (
        <>
            <AnimatePresence>
                {selectedArticle && (
                    <ArticleDetailModal
                        article={selectedArticle}
                        onClose={() => setSelectedArticle(null)}
                    />
                )}
            </AnimatePresence>

            <section className="pt-48 pb-10">
                <Timeline
                    title={
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <span className="font-mono text-xs text-primary uppercase tracking-[0.5em] mb-4 block">
                                Latest News
                            </span>
                            <span className="font-display font-black text-6xl md:text-8xl py-2 block">
                                OFFICIAL<br />ANNOUNCEMENTS
                            </span>
                        </motion.div>
                    }
                    description="Stay informed with dispatch notes covering match results, academy updates, ground news, and community outreach straight from the pitch."
                    data={timelineData}
                />
            </section>
        </>
    );
}
