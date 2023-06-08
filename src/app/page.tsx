import { url } from "inspector";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import './globals.css';
import bgTech from '../assets/backgrounds/nairobi.png';
import bgExp from '../assets/backgrounds/white-abstract.png';

export default function Home() {
  return (
    <div className="relative z-0">
      <div>
        <Navbar />
        <Hero />
      </div>

      <div className="bg-about bg-cover bg-center bg-no-repeat">
        <About />
      </div>

      <div 
        className="bg-cover bg-center bg-no-repeat pb-10" 
        style={{background: `linear-gradient(165deg, rgba(20,20,20,0.8) 100%, rgba(109,109,116,0.8) 100%), url(${bgTech?.src})`}}>
        <Tech />
      </div>

      <Projects />

      <div
        className="bg-experience bg-cover bg-center bg-no-repeat 
          rounded-tl-[150px] rounded-br-[150px]">
        <div
          className="bg-experienceLight bg-cover bg-center 
          bg-no-repeat rounded-tl-[150px] rounded-br-[130px]"
          style={{background: `linear-gradient(135deg, rgba(244,244,246,0.5) 75%, rgba(10,10,10,0.2) 100%), url(${bgExp?.src})`}}>
          <Experience />
        </div>
      </div>
      <div className="relative z-0">
        <Contact />
      </div>
    </div>
  )
}
