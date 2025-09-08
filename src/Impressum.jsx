import React from 'react';

const Impressum = () => {
    return (
        <div className="max-w-3xl mx-auto my-12 p-8 rounded-xl shadow-2xl font-sans text-white">
            <h1 className="text-3xl font-bold mb-8 text-red tracking-tight">Impressum</h1>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Angaben gemäß § 5 TMG</h2>
                <p>
                    <span className="font-semibold">Fahrzeugtechnik Blank &amp; Hass</span>
                    <br />
                    Brookdamm 7
                    <br />
                    49688 Hemmelte
                    <br />
                    Deutschland
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-lg font-semibold mb-2">Vertreten durch:</h2>
                <p>Sergej Blank</p>
                <p>Hass</p>
            </section>

            <section className="mb-8">
                <h2 className="text-lg font-semibold mb-2">Kontakt:</h2>
                <p>
                    Telefon: +49 173 1004793
                    <br />
                    Telefon: +49 162 4839244
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-lg font-semibold mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>
                <p>
                    Joel Holstein
                    <br />
                    Magdeburgerstr. 36
                    <br />
                    49692 Cappeln
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-lg font-semibold mb-2">Haftungsausschluss (Disclaimer)</h2>
                <p className="mb-2">
                    Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                </p>
                <p>
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
            </section>

            <div className="text-sm text-gray-400 border-t border-gray-100 pt-4 mt-8">
                Dieses Impressum wurde mit Hilfe eines Generators erstellt.
            </div>
        </div>
    );
};

export default Impressum;