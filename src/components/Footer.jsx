import React from 'react';
import {FooterLinks} from "../../constants/Index.js";
import Socials from "./Animation/Socials";

const Footer = () => {
    return (
        <>
        <section id="footer">
            <div className="footer-container">
                <ul>
                    {FooterLinks.map((link) => (
                        <li key={link.id}>
                            <a href={'#${link.href}'}>{link.title}</a>
                        </li>
                    ))}
                </ul>
                <Socials />
                <div className="Rights">
                    © 2025 Fahrzeugtechnik Blank & Hass. Alle Rechte vorbehalten.
                </div>
            </div>
        </section>
        </>
    );
};

export default Footer;