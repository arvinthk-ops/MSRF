import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import MatchesClient from "./matches-client";

import { getMatchesData } from "@/lib/cms-content";

export default async function MatchesPage() {
    const formattedMatches = await getMatchesData();

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-background overflow-x-hidden">
            <Header />
            <MatchesClient initialMatches={formattedMatches} />
            <Footer />
        </main>
    );
}
