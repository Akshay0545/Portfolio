
import React from 'react';
import { motion } from 'framer-motion';

interface NavigationProps {
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
  aboutRef: React.RefObject<HTMLElement>;
  projectsRef: React.RefObject<HTMLElement>;
  skillsRef: React.RefObject<HTMLElement>;
  contactRef: React.RefObject<HTMLElement>;
}

const Navigation: React.FC<NavigationProps> = ({ 
  scrollToSection, 
  aboutRef, 
  projectsRef, 
  skillsRef, 
  contactRef 
}) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            Akshay Kashyap
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex space-x-8"
          >
            <button onClick={() => scrollToSection(aboutRef)} className="hover:text-blue-400 transition-colors">About</button>
            <button onClick={() => scrollToSection(projectsRef)} className="hover:text-blue-400 transition-colors">Projects</button>
            <button onClick={() => scrollToSection(skillsRef)} className="hover:text-blue-400 transition-colors">Skills</button>
            <button onClick={() => scrollToSection(contactRef)} className="hover:text-blue-400 transition-colors">Contact</button>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
