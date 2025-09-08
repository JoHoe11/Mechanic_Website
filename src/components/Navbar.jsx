import {navLinks} from "../../constants/Index.js";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
    useGSAP(()=> {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: "nav",
                start: "top top",
            }
        });
    navTween.fromTo("nava", {backgroundColor: "transparent"},
        {backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut"
        }

    )
    })

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
            <nav>
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
                </div>
            </nav>
    );
};

export default Navbar;