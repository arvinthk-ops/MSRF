import { HeroSection } from '@/components/blocks/hero-section';
import { AcademyOffers } from '@/components/blocks/academy-offers';
import { Testimonials } from '@/components/blocks/testimonials';
import { CTASection } from '@/components/blocks/cta-section';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { LinkPreview } from '@/components/ui/link-preview';
import { ArrowUpRight } from 'lucide-react';

import { getHomePageData } from '@/lib/cms-content';

export default async function HomePage() {
    const { homeData, testimonials } = await getHomePageData();

    return (
        <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
            <Header />

            <HeroSection data={homeData} />

            {/* The Technical Divide */}
            <section className="relative py-64 px-8 md:px-24 border-b border-border">
                <div className="absolute top-0 right-12 w-[1px] h-full bg-border/50 hidden lg:block" />

                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="mb-12 lg:col-span-2">
                        <span
                            className="font-mono text-xs text-primary uppercase tracking-[0.5em]"
                        >
                            {homeData.technicalDivide?.index || "01 // THE INSTITUTION"}
                        </span>
                    </div>

                    <div className="space-y-12 relative z-10">
                        <h2 className="font-display font-black text-5xl md:text-[7vw] lg:text-[8rem] leading-[0.75] tracking-tighter uppercase whitespace-pre-line">
                            {homeData.technicalDivide?.titleLine1 || "ARCHITECTS"} <br />
                            {homeData.technicalDivide?.titleLine2 || "OF THE"} <br />
                            <span className="text-outline-pitch italic">
                                {homeData.technicalDivide?.titleLine3 || "PITCH"}
                            </span>
                        </h2>
                        <p className="font-sans text-xl md:text-2xl text-foreground/80 max-w-2xl leading-relaxed">
                            {homeData.technicalDivide?.description || "We don't just build teams; we engineer lineages. Every player at MCFC is a data point in a legacy that spans from the EMS Stadium to the heart of Buenos Aires."}
                        </p>
                    </div>

                    <div className="relative z-10">
                        <div className="aspect-[4/5] rounded-none overflow-hidden bg-card border border-border p-4 transition-all duration-1000 group shadow-2xl">
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                                style={{
                                    backgroundImage: `url('${homeData.technicalDivide?.image?.url || 'https://images.unsplash.com/photo-1510567153273-04b3ec2c2861?q=80&w=1200&auto=format&fit=crop'}')`
                                }}
                            />
                            <div className="absolute top-8 right-8 flex flex-col items-end gap-1">
                                <span className="bg-primary text-background px-4 py-2 font-mono text-xs font-black uppercase tracking-widest">Scout_Verified</span>
                                <span className="text-background bg-foreground px-4 py-1 font-mono text-xs font-bold uppercase tracking-widest">TS_001.2</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The 90/10 Content Flow (Radical Asymmetry) */}
            <section className="py-64 relative bg-card">
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-[0.05]">
                    <div className="absolute top-1/4 -left-1/4 w-full h-full border border-primary rotate-45" />
                </div>

                <div className="container mx-auto px-8 md:px-24">
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-32">
                        <div className="w-full lg:w-[10%] border-l-2 border-primary pl-8 py-4">
                            <h4 className="font-mono text-xs text-primary uppercase font-black tracking-widest [writing-mode:vertical-rl] rotate-180 max-lg:[writing-mode:horizontal-tb] max-lg:rotate-0">
                                THE PARTNERSHIP
                            </h4>
                        </div>
                        <div className="w-full lg:w-[80%] space-y-16">
                            <div className="space-y-8">
                                <h2 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter">
                                    {homeData.partnership?.title || "EL SEMILLERO DEL MUNDO"}
                                </h2>
                                <div className="font-sans text-xl text-foreground/60 max-w-2xl leading-relaxed">
                                    {homeData.partnership?.content || (
                                        <>
                                            We have concluded a franchise agreement with
                                            <LinkPreview url="https://argentinosjuniors.com.ar/noticias/captacion/sigue-creciendo-el-convenio-de-colaboracion-deportiva-en-india/" imageSrc="/AJ Logo .png" className="mx-2 text-primary">
                                                &apos;Argentinos Juniors&apos;
                                            </LinkPreview>
                                            , a premier division league club of Argentina.
                                            Their academy discovered Maradona at age 9 and groomed him until he was 16. Considered the best grassroots development academy in Latin America.
                                        </>
                                    )}
                                </div>
                                <div className="pt-4">
                                    <LinkPreview url={homeData.partnership?.linkUrl || "https://argentinosjuniors.com.ar/noticias/captacion/sigue-creciendo-el-convenio-de-colaboracion-deportiva-en-india/"} imageSrc="/AJ Logo .png" className="!no-underline">
                                        <div
                                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-background font-display font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer"
                                        >
                                            Read Official Announcement <ArrowUpRight className="w-5 h-5" />
                                        </div>
                                    </LinkPreview>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-12">
                                {(homeData.stats || [
                                    { label: "FOUNDATION", value: "ARG JRS" },
                                    { label: "LEGACY", value: "MARADONA" },
                                    { label: "DISCIPLINE", value: "ELITE" }
                                ]).map((stat: { label: string; value: string }, i: number) => (
                                    <div key={i} className="space-y-2">
                                        <span className="font-mono text-xs text-foreground/40 uppercase tracking-[0.2em]">{stat.label}</span>
                                        <div className="font-display font-black text-4xl text-primary">{stat.value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* THE COMMIT: Academy Offers */}
            <AcademyOffers features={homeData.academyOffers} />

            {/* Testimonials Section */}
            <Testimonials testimonials={testimonials} />

            {/* CTA Section */}
            <CTASection data={homeData.cta} />

            <Footer />
        </main>
    );
}
