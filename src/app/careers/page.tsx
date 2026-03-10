import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import CareersClient from "./careers-client";

import { getJobsData } from "@/lib/cms-content";

export default async function CareersPage() {
    const formattedJobs = await getJobsData();

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-background overflow-x-hidden">
            <Header />
            <CareersClient jobs={formattedJobs} />
            <Footer />
        </main>
    );
}
