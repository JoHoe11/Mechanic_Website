import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

const ContactBtn = ({ scrollToContactSection = () => {} }) => {
    const [isClicked, setIsClicked] = useState(false);
    const buttonRef = useRef(null);

    // Animation on component mount
    useEffect(() => {
        // Start invisible and below final position
        gsap.set(buttonRef.current, { opacity: 0, y: 40 });

        // Animate in from bottom with slight delay (after paragraph appears)
        gsap.to(buttonRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: 2 // Slightly after paragraph (which was 1.5)
        });
    }, []);

    const handleClick = () => {
        setIsClicked(true);

        setTimeout(() => {
            scrollToContactSection();
            setTimeout(() => setIsClicked(false), 500);
        }, 500);
    };

    return (
        <button
            ref={buttonRef}
            onClick={handleClick}
            style={{ opacity: 0, transform: "translateY(40px)" }}
            className="btn"
        >
            <span
                className="btn-spn"
                aria-hidden="true"
            ></span>

            <span
                className="btn-dsgn"
            >
                Termin vereinbaren
                <svg
                    stroke="currentColor"
                    fill={isClicked ? "#FFFFFF" : "currentColor"}
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-all duration-700 ${
                        isClicked ? 'transform translate-x-[50vw] -translate-y-[50vh] opacity-0' : ''
                    }`}
                    style={{
                        transformOrigin: 'center'
                    }}
                >
                    <path
                        d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"
                    ></path>
                </svg>
            </span>
        </button>
    );
};

export default ContactBtn;