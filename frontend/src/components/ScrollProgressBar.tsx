// ScrollProgressBar.tsx
import { useEffect, useRef } from "react";

export default function ScrollProgressBar() {
    const barRef = useRef<HTMLDivElement | null>(null);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        const onScroll = () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = requestAnimationFrame(() => {
                const scrollTop = window.scrollY || window.pageYOffset;
                const docHeight =
                    document.documentElement.scrollHeight - window.innerHeight;
                const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
                if (barRef.current) {
                    barRef.current.style.width = `${Math.max(0, Math.min(100, pct))}%`;
                }
            });
        };

        // initial set
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, []);

    return (
        <div className="absolute bottom-0 left-0 w-full h-1 pointer-events-none z-50">
            <div
                ref={barRef}
                className="h-full bg-primary origin-left transition-[width] duration-100 ease-linear"
                style={{ width: "0%" }}
            />
        </div>
    );
}