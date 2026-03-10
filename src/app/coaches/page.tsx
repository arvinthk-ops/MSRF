import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { CoachesClient } from './coaches-client';

import { getCoachesData } from '@/lib/cms-content';

export default async function CoachesPage() {
    const coaches = await getCoachesData();

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-background overflow-x-hidden">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-48 pb-24 px-6 md:px-12 lg:px-24 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--primary)_0%,_transparent_40%)] opacity-10" />
                <div className="container mx-auto relative z-10">
                    <div className="max-w-4xl">
                        <span className="font-mono text-xs text-primary uppercase tracking-[0.6em] block mb-6">
                            Leadership // Academy
                        </span>
                        <h1 className="font-display font-black text-7xl md:text:text-9xl-8xl lg uppercase tracking-tighter leading-[0.85] mb-8">
                            The <span className="text-outline-brand italic">Coaches</span>
                        </h1>
                        <p className="text-foreground/60 text-xl md:text-2xl leading-relaxed font-serif max-w-2xl">
                            World-class expertise meets local passion. Our coaching team brings international methodology refined in South America and Europe.
                        </p>
                    </div>
                </div>
            </section>

            <CoachesClient initialCoaches={coaches} />

            <Footer />
        </main>
    );
}
