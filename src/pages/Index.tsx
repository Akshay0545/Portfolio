
import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import ContactForm from '../components/ContactForm';
import FloatingParticles from '../components/FloatingParticles';
import ScrollProgress from '../components/ScrollProgress';

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
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-x-hidden relative">
      <ScrollProgress />
      <FloatingParticles />
      
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

      <AboutSection 
        aboutRef={aboutRef}
        aboutInView={aboutInView}
      />

      <ProjectsSection 
        projectsRef={projectsRef}
        projectsInView={projectsInView}
      />

      <SkillsSection 
        skillsRef={skillsRef}
        skillsInView={skillsInView}
      />

      <ContactForm 
        contactRef={contactRef}
        contactInView={contactInView}
      />

      {/* Enhanced Footer */}
      <footer className="py-8 px-4 border-t border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Akshay Kashyap. All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-2">Built with React, Tailwind CSS & Framer Motion</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
