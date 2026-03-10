"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { ThemeTooltip } from "./theme-tooltip";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const mounted = theme !== undefined;

    if (!mounted) return null;

    return (
        <div className="flex items-center gap-4 p-1 rounded-full border border-border/40 bg-background/50 backdrop-blur-md relative group">
            <button
                onClick={() => setTheme("light")}
                className={`p-2 rounded-full transition-all relative z-10 ${theme === 'light' ? 'bg-primary text-background shadow-lg' : 'text-foreground/40 hover:text-foreground'}`}
            >
                <Sun className="w-4 h-4" />
            </button>
            <button
                onClick={() => setTheme("dark")}
                className={`p-2 rounded-full transition-all relative z-10 ${theme === 'dark' ? 'bg-primary text-background shadow-lg' : 'text-foreground/40 hover:text-foreground'}`}
            >
                <Moon className="w-4 h-4" />
            </button>

            {/* Tech Power Line */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-[1px] bg-primary/20 group-hover:w-8 transition-all" />

            {/* Theme Guide Tooltip */}
            <ThemeTooltip />
        </div>
    );
}
