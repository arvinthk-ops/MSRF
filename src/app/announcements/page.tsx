import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

import AnnouncementsClient from './announcements-client';
import { getAnnouncementsData } from '@/lib/cms-content';

export default async function AnnouncementsPage() {
    const articles = await getAnnouncementsData();

    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Header />
            <AnnouncementsClient articles={articles} />
            <Footer />
        </main>
    );
}
