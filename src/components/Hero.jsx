import React, {useRef, useEffect, useState} from "react";
import gsap from "gsap";

const Hero = () => {

    const titleAn = useRef(null);
    const swapAn = useRef(null);
    const [swapText, setSwapText] = useState("BLANK & HASS");

    useEffect(() => {
        gsap.from(titleAn.current, {
            y: 40,
            duration: 1,
            ease: "power3.out",
        });

        const timer = setTimeout(() => {
            gsap.to(swapAn.current, {
                y: -20,
                duration: 0.5,
                ease: "power2.in",
                onComplete: () => {
                    setSwapText("BEWÄHRT & HOCHWÄHRTIG");
                    gsap.fromTo(
                        swapAn.current,
                        { y: 40, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
                    );
                },
            });
        }, 1800);

        return () => clearTimeout(timer);
    }, []);


    return (
        <>
          <section id="hero">
              <div className="hero-bg"></div>
              <h1 className="title">
                  FAHRZEUGTECHNICK<br/> {""} <span ref={swapAn}>{swapText}</span>
              </h1>
              <p className="valueSt">Professionelle Reparaturen & Wartungen
                  für alle Fahrzeugtypen</p>
              <button className="btn"></button>
          </section>
        </>
    );
};

export default Hero;