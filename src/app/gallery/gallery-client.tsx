"use client";
/* eslint-disable @next/next/no-img-element */

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useCallback, useEffect, useMemo } from 'react';
import { X, Play, ChevronLeft, ChevronRight, Maximize2, Minimize2, Layers } from 'lucide-react';

type MediaType = 'image' | 'video' | 'youtube';

interface GalleryMedia {
    id: string;
    title: string;
    description?: string;
    thumbnail: string;
    type: MediaType;
    src: string;
    category: string;
}

interface MediaCollection {
    id: string;
    title: string;
    description?: string;
    thumbnail: string;
    items: GalleryMedia[];
    category: string;
    isCollection: true;
}

const categories = [
    { id: 'all', label: 'All' },
    { id: 'general', label: 'General' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'media', label: 'Media' },
    { id: 'community', label: 'Community' }
];

const isColl = (item: GalleryMedia | MediaCollection): item is MediaCollection => {
    return (
        'isCollection' in item &&
        item.isCollection === true &&
        Array.isArray(item.items)
    );
};

// ─── Floating Card Lightbox ──────────────────────────────────────────────────
function FloatingCardLightbox({
    item,
    onClose,
    onPrev,
    onNext,
    hasPrev,
    hasNext,
    currentIndex = 0,
    totalItems = 1,
    isFullscreen,
    onToggleFullscreen,
    onGoTo
}: {
    item: GalleryMedia | MediaCollection;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
    hasPrev: boolean;
    hasNext: boolean;
    currentIndex?: number;
    totalItems?: number;
    isFullscreen: boolean;
    onToggleFullscreen: () => void;
    onGoTo?: (idx: number) => void;
}) {
    const currentMedia = isColl(item) ? item.items[currentIndex] : item;
    const isCollectionItem = isColl(item);
    const [isMediaLoaded, setIsMediaLoaded] = useState(false);

    useEffect(() => {
        setIsMediaLoaded(false);
    }, [currentMedia.id, currentIndex]);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft' && hasPrev) onPrev();
            if (e.key === 'ArrowRight' && hasNext) onNext();
            if (e.key === 'f') onToggleFullscreen();
        };
        window.addEventListener('keydown', handleKey);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', handleKey);
            document.body.style.overflow = '';
        };
    }, [onClose, onPrev, onNext, hasPrev, hasNext, onToggleFullscreen]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col lg:flex-row bg-black/95 backdrop-blur-2xl overflow-hidden"
        >
            {/* Media Area */}
            <div className="relative flex-1 flex items-center justify-center p-4 lg:p-12 min-h-0 h-[60vh] lg:h-auto overflow-hidden" onClick={onClose}>
                <div className={`absolute top-4 right-4 z-50 flex items-center gap-3 ${isFullscreen ? 'opacity-100' : 'lg:hidden opacity-100'}`}>
                    <button onClick={(e) => { e.stopPropagation(); onToggleFullscreen(); }} className="w-12 h-12 md:w-10 md:h-10 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white/90 touch-manipulation">
                        {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); onClose(); }} className="w-12 h-12 md:w-10 md:h-10 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white/90 touch-manipulation">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {hasPrev && (
                    <button onClick={(e) => { e.stopPropagation(); onPrev(); }} className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white/80 hidden md:flex">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                )}
                {hasNext && (
                    <button onClick={(e) => { e.stopPropagation(); onNext(); }} className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white/80 hidden md:flex">
                        <ChevronRight className="w-6 h-6" />
                    </button>
                )}

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentMedia.id + currentIndex}
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        className="w-full h-full flex items-center justify-center pointer-events-none"
                    >
                        <div className="pointer-events-auto max-w-full max-h-full relative flex items-center justify-center">
                            {/* Loading State for Videos/Frames */}
                            {(currentMedia.type === 'video' || currentMedia.type === 'youtube') && !isMediaLoaded && (
                                <div className="absolute inset-0 z-0 flex flex-col items-center justify-center gap-4">
                                    <div className="w-8 h-8 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
                                    <span className="text-primary/60 font-mono text-[10px] uppercase tracking-widest animate-pulse">Buffering Media</span>
                                </div>
                            )}

                            {currentMedia.type === 'image' && (
                                <img src={currentMedia.src} alt={currentMedia.title} className={`object-contain ${isFullscreen ? 'w-screen h-screen' : 'max-w-full max-h-[50vh] lg:max-h-[85vh] rounded-xl'}`} />
                            )}

                            {/* Videos & YouTube are wrapped in a 16:9 skeleton player block */}
                            {(currentMedia.type === 'video' || currentMedia.type === 'youtube') && (
                                <div className={`relative flex items-center justify-center bg-black/80 overflow-hidden ${isFullscreen ? 'w-screen h-screen' : 'w-[90vw] md:w-[80vw] lg:w-[60vw] max-w-5xl aspect-video rounded-xl shadow-2xl border border-white/5'}`}>

                                    {/* Persistent Spinner while !isMediaLoaded */}
                                    {!isMediaLoaded && (
                                        <div className="absolute inset-0 z-0 flex flex-col items-center justify-center gap-4 bg-black/20">
                                            <div className="w-8 h-8 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
                                            <span className="text-primary/50 font-mono text-[10px] uppercase tracking-widest animate-pulse">Buffering Video</span>
                                        </div>
                                    )}

                                    {currentMedia.type === 'video' && (
                                        <video
                                            src={currentMedia.src}
                                            controls
                                            autoPlay
                                            playsInline
                                            preload="auto"
                                            onCanPlay={() => setIsMediaLoaded(true)}
                                            className={`absolute inset-0 w-full h-full z-10 object-contain transition-opacity duration-700 ${isMediaLoaded ? 'opacity-100' : 'opacity-0'}`}
                                        />
                                    )}

                                    {currentMedia.type === 'youtube' && (
                                        <iframe
                                            src={`https://www.youtube.com/embed/${currentMedia.src}?autoplay=1`}
                                            className={`absolute inset-0 w-full h-full z-10 transition-opacity duration-700 ${isMediaLoaded ? 'opacity-100' : 'opacity-0'}`}
                                            frameBorder="0"
                                            allowFullScreen
                                            allow="autoplay"
                                            onLoad={() => setIsMediaLoaded(true)}
                                        />
                                    )}
                                </div>
                            )}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Sidebar */}
            {!isFullscreen && (
                <div className="w-full lg:w-[400px] xl:w-[450px] shrink-0 bg-[#0a0a0a] border-t lg:border-t-0 lg:border-l border-white/5 flex flex-col overflow-hidden">
                    <div className="hidden lg:flex items-center justify-end gap-3 p-6 border-b border-white/10">
                        <button onClick={onToggleFullscreen} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70">
                            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                        </button>
                        <button onClick={onClose} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70">
                            <X className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-8 lg:p-10">
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <span className="text-[10px] font-mono text-primary uppercase tracking-[0.2em] font-bold">
                                    {currentMedia.category}
                                </span>
                                {isCollectionItem && <span className="text-[10px] font-mono text-white/40 uppercase">Entry {currentIndex + 1} of {totalItems}</span>}
                            </div>
                            <h2 className="font-display text-3xl font-bold text-white tracking-tight">{currentMedia.title}</h2>
                            {currentMedia.description && <p className="text-white/50 text-base italic border-l-2 border-primary/30 pl-6">{currentMedia.description}</p>}
                        </div>
                    </div>

                    {isCollectionItem && (
                        <div className="p-8 bg-black/40 border-t border-white/10 backdrop-blur-md">
                            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
                                {item.items.map((subItem, idx) => (
                                    <button
                                        key={subItem.id}
                                        onClick={() => onGoTo?.(idx)}
                                        className={`shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${idx === currentIndex ? 'border-primary scale-105' : 'border-white/10 opacity-50'}`}
                                    >
                                        <img src={subItem.thumbnail} alt="" className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </motion.div>
    );
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function GalleryClient({ items }: { items: (GalleryMedia | MediaCollection)[] }) {
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedItem, setSelectedItem] = useState<GalleryMedia | MediaCollection | null>(null);
    const [collectionIndex, setCollectionIndex] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const filteredItems = activeCategory === 'all' ? items : items.filter(i => i.category === activeCategory);

    // Flatten for global navigation across filtered items
    const allNavigable = useMemo(() => {
        const flattened: { item: GalleryMedia | MediaCollection; idx: number }[] = [];
        filteredItems.forEach((item) => {
            if (isColl(item)) {
                item.items.forEach((_, idx) => flattened.push({ item, idx }));
            } else {
                flattened.push({ item, idx: 0 });
            }
        });
        return flattened;
    }, [filteredItems]);

    const currentPos = allNavigable.findIndex(x => x.item.id === selectedItem?.id && x.idx === collectionIndex);

    const handlePrev = useCallback(() => {
        if (currentPos > 0) {
            const prev = allNavigable[currentPos - 1];
            setSelectedItem(prev.item);
            setCollectionIndex(prev.idx);
        }
    }, [currentPos, allNavigable]);

    const handleNext = useCallback(() => {
        if (currentPos < allNavigable.length - 1) {
            const next = allNavigable[currentPos + 1];
            setSelectedItem(next.item);
            setCollectionIndex(next.idx);
        }
    }, [currentPos, allNavigable]);

    return (
        <div className="min-h-screen">
            <section className="pt-48 pb-32 px-6 md:px-12 lg:px-24">
                <div className="container mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
                        <span className="font-mono text-xs text-primary uppercase tracking-[0.6em] mb-4 block">Inside MCFC</span>
                        <h1 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tighter">THE<br />GALLERY</h1>
                    </motion.div>

                    <div className="flex gap-2 overflow-x-auto pb-10 scrollbar-none">
                        {categories.map((cat) => (
                            <button key={cat.id} onClick={() => { setActiveCategory(cat.id); setSelectedItem(null); }} className={`px-5 py-2.5 rounded-full font-mono text-xs uppercase transition-all whitespace-nowrap ${activeCategory === cat.id ? 'bg-primary text-background' : 'bg-card border border-border text-foreground/60'}`}>
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                        {filteredItems.map((item, i) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (i % 8) * 0.05 }}
                                onClick={() => { setSelectedItem(item); setCollectionIndex(0); }}
                                className="group relative overflow-hidden rounded-2xl bg-card cursor-pointer border border-white/5 break-inside-avoid shadow-sm hover:shadow-xl transition-all duration-300"
                            >
                                <div className="relative w-full overflow-hidden bg-black/5" style={{ minHeight: '12rem' }}>
                                    {/* Render video poster for local videos to prevent massive downloads */}
                                    {'type' in item && item.type === 'video' ? (
                                        <video
                                            src={`${item.thumbnail}#t=0.1`}
                                            preload="metadata"
                                            playsInline
                                            muted
                                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <img
                                            src={item.thumbnail}
                                            alt={"title" in item ? item.title : 'Gallery item'}
                                            loading="lazy"
                                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    )}

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                                    {isColl(item) && (
                                        <div className="absolute top-3 right-3 px-2.5 py-1 bg-black/50 backdrop-blur-md rounded-full flex items-center gap-1.5 border border-white/20 shadow-lg z-10">
                                            <Layers className="w-3.5 h-3.5 text-white/90" />
                                            <span className="text-white/90 text-xs font-semibold">{item.items.length}</span>
                                        </div>
                                    )}

                                    {/* Video/YouTube Play Icon */}
                                    {'type' in item && (item.type === 'video' || item.type === 'youtube') && (
                                        <div className="absolute inset-0 flex items-center justify-center transition-transform group-hover:scale-110 duration-300 z-10">
                                            <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl">
                                                <Play className="w-6 h-6 text-white ml-1" />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Card Body: Title & Description Below Image */}
                                <div className="p-5 flex flex-col gap-2 relative bg-card/50">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] uppercase font-mono tracking-widest text-primary/80 font-semibold bg-primary/10 px-2 py-0.5 rounded-sm">
                                            {item.category}
                                        </span>
                                    </div>
                                    <h3 className="text-foreground text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>
                                    {'description' in item && item.description && (
                                        <p className="text-muted-foreground text-sm line-clamp-2 mt-1">
                                            {item.description}
                                        </p>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <AnimatePresence>
                    {selectedItem && (
                        <FloatingCardLightbox
                            item={selectedItem}
                            onClose={() => { setSelectedItem(null); setIsFullscreen(false); }}
                            onPrev={handlePrev}
                            onNext={handleNext}
                            hasPrev={currentPos > 0}
                            hasNext={currentPos < allNavigable.length - 1}
                            currentIndex={collectionIndex}
                            totalItems={isColl(selectedItem) ? selectedItem.items.length : 1}
                            isFullscreen={isFullscreen}
                            onToggleFullscreen={() => setIsFullscreen(!isFullscreen)}
                            onGoTo={(idx) => setCollectionIndex(idx)}
                        />
                    )}
                </AnimatePresence>
            </section>
        </div>
    );
}
