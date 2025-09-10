import { useState, useEffect } from 'react';
import gsap from 'gsap';

const HeroTitle = (paragraphRef) => {
    const [swapText, setSwapText] = useState("BLANK & HASS");
    const [titleLetters, setTitleLetters] = useState([]);
    const [swapLetters, setSwapLetters] = useState([]);
    const [isSwapping, setIsSwapping] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const title = "FAHRZEUGTECHNIK";
        setTitleLetters(title.split(""));

        setTimeout(() => {
            setIsLoaded(true);
        }, 100);
    }, []);

    useEffect(() => {
        setSwapLetters(swapText.split(""));
    }, [swapText]);

    useEffect(() => {
        if (!isLoaded) return;

        gsap.fromTo(
            ".title-letter",
            { opacity: 0, x: -40 },
            {
                opacity: 1,
                x: 0,
                duration: 0.5,
                stagger: 0.05,
                ease: "power3.out"
            }
        );

        gsap.fromTo(
            ".swap-letter",
            { opacity: 0, x: -40 },
            {
                opacity: 1,
                x: 0,
                duration: 0.5,
                stagger: 0.05,
                ease: "power3.out",
                delay: 1
            }
        );

        gsap.fromTo(
            paragraphRef.current,
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                delay: 2
            }
        );

        const swapTimer = setTimeout(() => {
            setIsSwapping(true);

            const swapLetterElements = gsap.utils.toArray(".swap-letter");

            gsap.to(swapLetterElements.reverse(), {
                opacity: 0,
                x: 40,
                duration: 0.3,
                stagger: 0.03,
                ease: "power2.in",
                onComplete: () => {
                    setSwapText("BEWÄHRT & HOCHWÄHRTIG");
                }
            });
        }, 4000);

        return () => {
            clearTimeout(swapTimer);
        };
    }, [isLoaded, paragraphRef]);

    useEffect(() => {
        if (isSwapping && swapText === "BEWÄHRT & HOCHWÄHRTIG") {
            gsap.fromTo(
                ".swap-letter",
                { opacity: 0, x: -40 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.5,
                    stagger: 0.03,
                    ease: "power2.out",
                    onComplete: () => {
                        setIsSwapping(false);
                    }
                }
            );
        }
    }, [swapLetters, isSwapping, swapText]);

    return {
        titleLetters,
        swapLetters,
        swapText
    };
};

export default HeroTitle;