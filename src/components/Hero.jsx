import React, { useRef, useEffect, useState } from "react";
import ContactBtn from "./Animation/ContactBtn";
import HeroTitle from "./Animation/HeroTitle.jsx";

const Hero = () => {
    const paragraphRef = useRef(null);
    const { titleLetters, swapLetters, swapText } = HeroTitle(paragraphRef);

    const scrollToContactSection = () => {
        const contactSection = document.getElementById('contact'); // Assuming 'contact' is your section ID
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const secondLineWords = swapText ? swapText.split(" ") : ["Blank", "&", "Hass"];

    return (
        <>
            <section id="hero">
                <div className="hero-bg"></div>
                <div className="hero-text">
                    <h1 className="title">
                        <span className="title-container visibility-wrapper">
                            {titleLetters.map((letter, index) => (
                                <span
                                    key={`title-${index}`}
                                    className="title-letter text-white"
                                    style={{ opacity: 0 }}
                                >
                                    {letter}
                                </span>
                            ))}
                        </span>
                        <div className="title-row swap-container">
                            {secondLineWords.map((word, wordIndex) => (
                                <div key={`word-${wordIndex}`} className="title-word">
                                    {word.split('').map((letter, letterIndex) => (
                                        <span
                                            key={`swap-${wordIndex}-${letterIndex}`}
                                            className="swap-letter text-red"
                                            style={{ opacity: 0 }}
                                        >
                                            {letter === " " ? "\u00A0" : letter}
                                        </span>
                                    ))}
                                    {wordIndex < secondLineWords.length - 1 && (
                                        <span className="swap-letter text-red hidden sm:inline" style={{ opacity: 0 }}>
                                            &nbsp;
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </h1>

                    <p ref={paragraphRef} className="valueSt" style={{ opacity: 0 }}>
                        Professionelle Reparaturen & Wartungen für alle Fahrzeugtypen
                    </p>
                    <div className="btn-cnt" ><ContactBtn scrollToContactSection={scrollToContactSection} /></div>
                </div>
            </section>
        </>
    );
};

export default Hero;