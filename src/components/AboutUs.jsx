import React from 'react';
import WorkerCard from './Animation/AboutUsCard';


const AboutUs = () => {
    return (
        <>
            <section id="about">

                <h1>Über <span>uns</span></h1>

                <p>Wir sind <span>zwei</span> Schrauber mit Herz und haben uns dieses Jahr den Traum vom eigenen Betrieb erfüllt. Mit <span>Leidenschaft</span> und <span>Erfahrung</span> kümmern wir uns um alles rund ums Auto.</p>

                <div className="Us">
                    <div className="BH">
                        <WorkerCard
                            name="Sergej Blank"
                            credentials="Service/Diagnosetechniker & Inhaber"
                            Knowledge="15+ Jahre Erfahrung"
                            imageSrc="/images/Worker.png"
                        />

                    </div>

                    <div className="BH">
                       <span style={{ animationDelay: '3s' }}>
                            <WorkerCard
                                name="Hass"
                                credentials="Kfz-Mechatroniker & Inhaber"
                                Knowledge="15+ Jahre Erfahrung"
                                imageSrc="/images/Worker.png"
                            />
                        </span>
                    </div>

                </div>
            </section>
        </>
    );
};

export default AboutUs;