import gsap from "gsap";
import {ScrollTrigger, SplitText} from "gsap/all";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import AboutUs from "./components/AboutUs.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <Services />
            <AboutUs />
        </main>
    );
};

export default App;