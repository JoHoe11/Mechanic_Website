import React from 'react';
import {FooterLinks} from "../../constants/Index.js";
import Socials from "./Animation/Socials";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
        <section id="footer">
            <div className="footer-container">
                <ul>
                    {FooterLinks.map((link) => (
                        <li key={link.id}>
                            <Link to={link.href}>{link.title}</Link>
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