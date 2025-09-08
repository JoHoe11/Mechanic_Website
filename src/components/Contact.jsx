import React from 'react';
import { FaPhoneAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <>
            <section id="contact">
                <div className={"wrap"}>
                    <div className="left">
                        <div className="header">
                            <h2>Kontakt</h2>
                            <div className="underline" />
                        </div>

                        <div className="container">
                            <div className="item">
                                <div className="icon-circle">
                                    <FaPhoneAlt />
                                </div>
                                <div className="text">
                                    <p className="head">Blank</p>
                                    <h3 className="info">+49 173 1004793</h3>
                                    <p className="head">Hass</p>
                                    <h3 className="info">+49 162 4839244</h3>
                                </div>
                            </div>

                            <div className="item">
                                <div className="icon-circle">
                                    <FaClock />
                                </div>
                                <div className="text">
                                    <p className="head">Öffnungszeiten</p>
                                    <h3 className="info">Montag bis Donnerstag: 08:30 - 17:00</h3>
                                    <h3 className="info">Freitag: 08:30 - 15:30</h3>
                                    <h3 className="info">Samstag & Sonntag: Geschlossen</h3>
                                </div>
                            </div>

                            <div className="item">
                                <div className="icon-circle">
                                    <FaMapMarkerAlt />
                                </div>
                                <div className="text">
                                    <p className="head">Adresse</p>
                                    <h3 className="info">
                                        Brookdamm 7 <br />
                                        49688 Hemmelte
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2413.544331293136!2d7.965261494340462!3d52.77649204535236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b76bfd10123823%3A0x84da33912ee13bc6!2sFahrzeugtechnik%20Blank%26Hass!5e0!3m2!1sde!2sde!4v1757337457780!5m2!1sde!2sde"
                                allowFullScreen=""
                                loading="lazy"
                                className="map"
                                title="Location Map"
                                >
                        </iframe>
                    </div>
                </div>

            </div>
        </section>

</>
)
    ;
};

export default Contact;