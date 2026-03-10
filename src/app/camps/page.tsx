import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import CampsClient from "./camps-client";

import { getCampsData } from "@/lib/cms-content";

export default async function CampsPage() {
    const formattedCamps = await getCampsData();

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-background overflow-x-hidden">
            <Header />
            <CampsClient initialCamps={formattedCamps} />
            <Footer />
        </main>
    );
}
