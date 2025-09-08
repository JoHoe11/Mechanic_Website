import gsap from "gsap";
import {ScrollTrigger, SplitText} from "gsap/all";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

import PrivacyPolicy from "./PrivacyPolicy.jsx";
import Impressum from "./Impressum.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Home = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <Services />
            <AboutUs />
            <Contact />
        </main>
    );
};

const App = () => {
    return (
        <Router>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                    <Route path="/impressum" element={<Impressum />} />
                </Routes>
                <Footer />
            </main>
        </Router>
    );
};

export default App;