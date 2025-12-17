import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {motion, AnimatePresence} from "framer-motion";
import logo from '../assets/img/logos/logo-red-white.svg'
import overlay from "../assets/img/overlays/overlay.svg";
import ScrollProgressBar from "./ScrollProgressBar.tsx";


const navItems = [
    {label: "Products", to: "/products"},
    {label: "About Us", to: "/#2"},
    {label: "Contact", to: "/#2"},
    {label: "Cart", to: "/cart"},
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = scrollTop / docHeight;
            const progressBar = document.getElementById("scroll-progress");
            if (progressBar) {
                progressBar.style.transform = `scaleX(${progress})`;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
        <nav className="fixed top-0 left-0 w-full bg-secondary shadow-xl z-50">
            <ScrollProgressBar></ScrollProgressBar>

            <img
                src={overlay}
                alt=""
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Desktop */}
                    <div className="hidden md:flex space-x-12">
                        {navItems.map((it) => (
                            <Link
                                key={it.label}
                                to={it.to}
                                className="text-white hover:text-primary transition-colors  whitespace-no-wrap font-bold"
                            >
                                {it.label}
                            </Link>
                        ))}
                    </div>

                    <Link to="/"
                          className="text-3xl tracking-tighter text-primary font-bold font-ice flex justify-center items-center gap-2">
                        <img src={logo} alt="logo" className="h-10 w-10"/>
                        BUT MAKE IT SMART
                    </Link>


                    {/* Hamburger */}
                    <button
                        className="md:hidden relative w-8 h-8 flex flex-col justify-between items-center"
                        onClick={() => setOpen(!open)}
                    >
                        <motion.span
                            className="block w-8 h-1 bg-accent rounded"
                            animate={open ? {rotate: 45, y: 10} : {rotate: 0, y: 0}}
                            transition={{duration: 0.3}}
                        />
                        <motion.span
                            className="block w-8 h-1 bg-accent rounded"
                            animate={open ? {opacity: 0} : {opacity: 1}}
                            transition={{duration: 0.3}}
                        />
                        <motion.span
                            className="block w-8 h-1 bg-accent rounded"
                            animate={open ? {rotate: -45, y: -10} : {rotate: 0, y: 0}}
                            transition={{duration: 0.3}}
                        />
                    </button>
                </div>

            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{height: 0, opacity: 0}}
                        animate={{height: "auto", opacity: 1}}
                        exit={{height: 0, opacity: 0}}
                        transition={{duration: 0.4, ease: "easeInOut"}}
                        className="md:hidden bg-white shadow-lg"
                    >
                        <div className="px-4 pt-4 pb-6 space-y-4">
                            {navItems.map((it) => (
                                <Link
                                    key={it.label}
                                    to={it.to}
                                    onClick={() => setOpen(false)}
                                    className="block text-slate-800 hover:text-sky-600 text-lg font-medium"
                                >
                                    {it.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    </>
    );
}