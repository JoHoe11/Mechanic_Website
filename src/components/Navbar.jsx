import {navLinks} from "../../constants/Index.js";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {

    // NavBar disappearing when scrolling down
    const [showNavbar, setShowNavbar] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < 100) {
                setShowNavbar(true);
            } else if (currentScrollY > lastScrollY.current) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    // Scrolling to sections
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setOpen(false);
    };


    // Mobile Menu Animation
    const [open, setOpen] = useState(false);
    const menuRef = useRef();

    useEffect(() => {
        if (open) {
            gsap.to(menuRef.current, {
                x: 0,
                opacity: 1,
                duration: 0.4,
                ease: "power2.out",
                pointerEvents: "auto",
            });
        } else {
            gsap.to(menuRef.current, {
                x: "100%",
                opacity: 0,
                duration: 0.4,
                ease: "power2.in",
                pointerEvents: "none",
            });
        }
    }, [open]);


    return (
            <nav className={showNavbar ? "translate-y-0" : "-translate-y-full"}>
                <div>
                    <a onClick={() => scrollToSection('hero')} className="flex items-center gap-2">
                        <img src="/images/logo.png" alt="logo"/>
                    </a>

                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a onClick={() => scrollToSection(link.id)} style={{ cursor: 'pointer' }}> {link.title}</a>
                            </li>
                        ))}
                    </ul>

                    <button
                        className="md:hidden text-white focus:outline-none"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle Menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                        <ul className="Links"
                            ref={menuRef}
                            style={{
                                transform: "translateX(100%)",
                                opacity: 0,
                                pointerEvents: "none",
                            }}>
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <a onClick={() => scrollToSection(link.id)} style={{ cursor: 'pointer' }}> {link.title}</a>
                                </li>
                            ))}
                        </ul>


                </div>
            </nav>
    );
};

export default Navbar;