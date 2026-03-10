import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import AboutClient from "./about-client";

import { getAboutPageData } from "@/lib/cms-content";

export default async function AboutPage() {
    const { aboutData, visionItems, missionItems, partners } = await getAboutPageData();

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-background overflow-x-hidden">
            <Header />
            <AboutClient
                aboutData={aboutData}
                visionItems={visionItems}
                missionItems={missionItems}
                partners={partners as any}
            />
            <Footer />
        </main>
    );
}
