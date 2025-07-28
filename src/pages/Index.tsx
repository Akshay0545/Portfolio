import React, { useRef } from "react";
import { useInView } from "framer-motion";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import ContactForm from "../components/ContactForm";
// import FloatingParticles from '../components/FloatingParticles';
import ScrollProgress from "../components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import Starfield from "@/components/Starfield";

const Index = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const aboutInView = useInView(aboutRef, { once: true });
  const projectsInView = useInView(projectsRef, { once: true });
  const skillsInView = useInView(skillsRef, { once: true });
  const contactInView = useInView(contactRef, { once: true });

  const scrollToSection = (sectionRef: React.RefObject<HTMLElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-x-hidden relative">
      <Starfield />
      <ScrollProgress />
      <ScrollToTop />
      {/* <FloatingParticles /> */}

      <Navigation
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
      />

      <HeroSection
        heroRef={heroRef}
        heroInView={heroInView}
        scrollToSection={scrollToSection}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />

      <AboutSection aboutRef={aboutRef} aboutInView={aboutInView} />

      <ProjectsSection
        projectsRef={projectsRef}
        projectsInView={projectsInView}
      />

      <SkillsSection skillsRef={skillsRef} skillsInView={skillsInView} />

      <ContactForm contactRef={contactRef} contactInView={contactInView} />

      {/* Enhanced Footer */}
      <footer className="py-8 px-6 bg-gray-900/60 backdrop-blur-md border-t border-gray-800 shadow-inner">
        <div className="max-w-6xl mx-auto text-center flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm select-none">
            © 2025{" "}
            <span className="font-medium text-white">Akshay Kashyap</span>. All
            rights reserved.
          </p>

          <div className="hidden sm:block h-px w-24 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-40" />

          <p className="text-gray-500 text-xs sm:text-sm select-none">
            Built with <span className="font-semibold text-white">React</span>,{" "}
            <span className="font-semibold text-white">Tailwind CSS</span> &{" "}
            <span className="font-semibold text-white">Framer Motion</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
