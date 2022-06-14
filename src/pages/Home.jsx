import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import Skills from "../components/Skills";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Project />
            <Contact />
        </>
    )
}

export default Home