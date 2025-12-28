import {useEffect, useRef, useState} from "react";
import {SiNfc} from "react-icons/si";

export default function PhoneNotification({playOnce, title, description}: {
    playOnce: boolean,
    title: string,
    description: string
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShow(true);
                } else if (!playOnce) {
                    setShow(false);         // element left viewport → reset if we allow replay
                }
            },
            {threshold: 0.3}
        );

        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, [playOnce]);


    return (
        <div ref={containerRef} className="relative w-full flex justify-center">
            {/* PHONE MOCKUP */}
            <div
                className={`
          mockup-phone
          transition-transform duration-700 ease-out
          ${show ? "translate-y-0" : "translate-y-24"}
        `}
            >
                {/* CAMERA (always on top) */}
                <div className="mockup-phone-camera z-20 relative"></div>

                {/* TIME */}
                <div className="absolute top-5 right-12 text-gray-400 font-semibold text-md z-20">
                    12:07
                </div>


                {/* DISPLAY */}
                <div className="mockup-phone-display relative bg-neutral-900 overflow-hidden">
                    {/* WALLPAPER */}
                    <img
                        src="https://img.daisyui.com/images/stock/453966.webp"
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-80"
                    />

                    {/* NOTIFICATION */}
                    <div
                        className={`relative z-10 p-3 transition-all duration-500 ease-out 
                        ${show ? "top-12 blur-0" : "-top-32 blur-sm"}`}
                    >
                        <div
                            className={`
                                w-full max-w-[360px]
                                bg-white/20 backdrop-blur-xl
                                border border-white/20
                                rounded-xl shadow-xl
                                flex gap-3 p-3
                                transition-transform duration-700 ease-out
                                justify-self-center
                                ${show ? "translate-y-0" : "-translate-y-20"}
                              `}
                        >
                            <div className="flex-shrink-0 flex items-center">
                                <SiNfc className="text-white h-7 w-7"/>
                            </div>

                            <div className="flex flex-col">
                                <span className="text-white font-semibold text-sm">
                                  {title}
                                </span>
                                <span className="text-gray-300 text-xs mt-0.5">
                                  {description}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}