import React from 'react';
import {ServicesContainer} from '../../constants/Index.js';

const Services = () => {
    return (
        <>
            <section id="services">

                <h1>Unsere <span>Leistungen</span></h1>

                <p>Kompetent. Zuverlässig. Für jedes Fahrzeug.</p>

                    <div className="grid">


                        <div className="LeftRow">
                            <div className="InspCard">
                                <div>
                                    <h3>Inspektion</h3>
                                    <h4>nach Herstellervorgabe</h4>
                                </div>
                                <ul>
                                    {ServicesContainer[0].details.map((detail, idx) => (
                                        <li key={idx}>
                                            <span>- {detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="GlasCard">
                                <div>
                                    <h3>Glas <span>Reparatur</span></h3>
                                </div>
                                <ul>
                                    {ServicesContainer[3].details.map((detail, idx) => (
                                        <li key={idx}>
                                            <span>- {detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>


                        <div className="MiddleRow">
                            <div className="RepCard">
                                <div>
                                    <h2>Reperaturen <br/>
                                        <span>aller</span> <br/>
                                        Fabrikate</h2>
                                </div>
                                <ul>
                                    {ServicesContainer[1].details.map((detail, idx) => (
                                        <li key={idx}>
                                            <span>- {detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="RightRow">
                            <div className="UnfCard">
                                <div>
                                    <h3>Unfall</h3>
                                    <h4>Instandsetzung</h4>
                                </div>
                                <ul>
                                    {ServicesContainer[2].details.map((detail, idx) => (
                                        <li key={idx}>
                                            <span>- {detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="MotCard">
                                <div>
                                    <h3>
                                        <span className="motor">Motor</span>
                                        <span className="and">&</span>
                                        <span className="getriebe">Getriebe</span>
                                    </h3>
                                    <h4>Instandsetzung</h4>
                                </div>
                                <ul>
                                    {ServicesContainer[4].details.map((detail, idx) => (
                                        <li key={idx}>
                                            <span>- {detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
            </section>
        </>
    );
};

export default Services;