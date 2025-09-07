import React, { useRef, useEffect, useState } from "react";
import ContactBtn from "./Animation/ContactBtn";
import HeroTitle from "./Animation/HeroTitle.jsx";

const Hero = () => {
    const paragraphRef = useRef(null);
    const { titleLetters, swapLetters, swapText } = HeroTitle(paragraphRef);

    return (
        <>
            <section id="hero">
                <div className="hero-bg"></div>

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
                                        <br />
                                        <span className="swap-container">
                    {swapLetters.map((letter, index) => (
                        <span
                            key={`swap-${index}-${swapText}`}
                            className="swap-letter text-red"
                            style={{ opacity: 0 }}
                        >
                    {letter === " " ? "\u00A0" : letter}
                    </span>
                    ))}
                    </span>
                </h1>

                <p ref={paragraphRef} className="valueSt" style={{ opacity: 0 }}>
                    Professionelle Reparaturen & Wartungen für alle Fahrzeugtypen
                </p>
                <div className="btn-cnt"><ContactBtn  /></div>
            </section>
        </>
    );
};

export default Hero;