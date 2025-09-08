import React from 'react';
import { FaPhoneAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import {ContactInfo}  from "../../constants/Index.js";

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
                                    {ContactInfo.slice(0, 2).map((info, idx) => (
                                        <div key={info.title} className="mb-4">
                                            <p className="head">{info.title}</p>
                                            <ul>
                                                {info.details.map((d, i) => (
                                                    <li className="info" key={i}>{d}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="item">
                                <div className="icon-circle">
                                    <FaClock />
                                </div>
                                <div className="text">
                                    <p className="head">{ContactInfo[2].title}</p>
                                    <ul>
                                        {ContactInfo[2].details.map((d, i) => (
                                            <li className="info" key={i}>{d}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="item">
                                <div className="icon-circle">
                                    <FaMapMarkerAlt />
                                </div>
                                <div className="text">
                                    <p className="head">{ContactInfo[3].title}</p>
                                    <ul>
                                        {ContactInfo[3].details.map((d, i) => (
                                            <li className="info" key={i}>{d}</li>
                                        ))}
                                    </ul>
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