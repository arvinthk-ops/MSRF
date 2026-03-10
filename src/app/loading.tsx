import Image from 'next/image'

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-3xl flex flex-col items-center justify-center min-h-screen">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 mb-8 animate-pulse">
                <Image
                    src="/logo.png"
                    alt="Loading MCFC"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                />
            </div>

            <div className="flex flex-col items-center gap-3">
                <div className="w-48 h-1 bg-border rounded-full overflow-hidden relative">
                    <div className="absolute top-0 left-0 h-full w-2/3 bg-primary rounded-full animate-progress" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-semibold text-primary/80 animate-pulse">
                    Loading Route...
                </span>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes progress {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(200%); }
                }
                .animate-progress {
                    animation: progress 1.5s infinite linear;
                }
            `}} />
        </div>
    )
}
