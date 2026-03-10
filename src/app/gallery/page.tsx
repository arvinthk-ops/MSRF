import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import GalleryClient from "./gallery-client";

import { getGalleryData } from "@/lib/cms-content";

export default async function GalleryPage() {
    const formattedItems = await getGalleryData();

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-background overflow-x-hidden">
            <Header />
            <GalleryClient items={formattedItems} />
            <Footer />
        </main>
    );
}
