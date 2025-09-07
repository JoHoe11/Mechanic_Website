import React from 'react';
import WorkerCard from './Animation/AboutUsCard';


const AboutUs = () => {
    return (
        <>
            <section id="about">

                <h1>Über <span>uns</span></h1>

                <p>Wir sind <span>zwei</span> Schrauber mit Herz und haben uns dieses Jahr den Traum vom eigenen Betrieb erfüllt. Mit <span>Leidenschaft</span> und <span>Erfahrung</span> kümmern wir uns um alles rund ums Auto.</p>

                <div className="grid">
                    <div className="Blank">
                        <WorkerCard
                            name="Sergej Blank"
                            credentials="Kfz-Meister & Inhaber"
                            Knowledge="15+ Jahre Erfahrung"
                            imageSrc="/images/Worker.png"
                        />
                        <span style={{ animationDelay: '3s' }}>
                            <WorkerCard
                                name="Hass"
                                credentials="Kfz-Meister & Inhaber"
                                Knowledge="15+ Jahre Erfahrung"
                                imageSrc="/images/Worker.png"
                            />
                        </span>
                    </div>

                    <div className="Hass">

                    </div>

                </div>
            </section>
        </>
    );
};

export default AboutUs;