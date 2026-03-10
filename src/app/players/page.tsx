import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PlayersClient } from './players-client';

import { getPlayersData } from '@/lib/cms-content';

export default async function PlayersPage() {
    const players = await getPlayersData();

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-background overflow-x-hidden">
            <Header />

            <section className="pt-40 pb-24 px-4 md:px-8 lg:px-12">
                <div className="container mx-auto">
                    <div className="mb-16">
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
                            <div className="space-y-4">
                                <span className="font-mono text-xs text-primary uppercase tracking-[0.5em]">
                                    THE SQUAD
                                </span>
                                <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-none">
                                    THE <span className="text-outline-brand italic">SQUAD</span>
                                </h1>
                                <p className="text-foreground/50 max-w-xl text-lg">
                                    Meet the next generation of football talent from Malabar.
                                    Each player represents the pinnacle of technical development.
                                </p>
                            </div>
                        </div>
                    </div>

                    <PlayersClient initialPlayers={players} />
                </div>
            </section>

            <Footer />
        </main>
    );
}
