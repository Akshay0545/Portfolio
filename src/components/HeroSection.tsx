
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  heroRef: React.RefObject<HTMLElement>;
  heroInView: boolean;
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
  projectsRef: React.RefObject<HTMLElement>;
  contactRef: React.RefObject<HTMLElement>;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  heroRef, 
  heroInView, 
  scrollToSection, 
  projectsRef, 
  contactRef 
}) => {
  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 animate-pulse"></div>
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-4xl mx-auto px-4"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={heroInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 flex items-center justify-center text-4xl font-bold shadow-2xl"
        >
          AK
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
        >
          Akshay Kashyap
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          Electronics & Communication Engineering Student | Full-Stack Developer
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={() => scrollToSection(projectsRef)}
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View My Work <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            onClick={() => scrollToSection(contactRef)}
            variant="outline"
            className="border-2 border-gray-600 text-white hover:bg-white hover:text-black px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
