import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  contactRef,
}) => (
  <section
    ref={heroRef}
    className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-8 bg-transparent"
  >
    {/* Decorative Top Accent Line */}
    {/* <motion.div
      initial={{ width: 0 }}
      animate={heroInView ? { width: "128px" } : { width: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="h-1 rounded-full bg-gradient-to-r from-blue-500 via-fuchsia-500 to-purple-500 mb-6"
    /> */}

    {/* Minimal Badge */}
    {/* <motion.div
      initial={{ opacity: 0, y: -16 }}
      animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -16 }}
      transition={{ duration: 0.6, delay: 0.25 }}
      className="inline-block px-3 py-1 text-xs tracking-widest font-semibold rounded-full border border-blue-500 text-blue-400 bg-white/10 shadow backdrop-blur-sm mb-6"
    >
      {`AKSHAY · PORTFOLIO`}
    </motion.div> */}

    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7, delay: 0.35 }}
      className="text-4xl sm:text-5xl md:text-6xl font-bold text-white bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent text-center drop-shadow"
    >
      Akshay Kashyap
    </motion.h1>

    {/* Subtitle */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: 0.55 }}
      className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-300 font-medium text-center max-w-xl mx-auto"
    >
      Electronics & Communication Engineering Student&nbsp;|&nbsp;Full-Stack Developer
    </motion.p>

    {/* Action Buttons */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: 0.75 }}
      className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
    >
      <Button
        onClick={() => scrollToSection(projectsRef)}
        className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 px-7 py-3 text-white font-semibold rounded-full transition-transform hover:scale-105 hover:shadow-lg focus:outline-none"
      >
        View My Work <ArrowRight size={18} />
      </Button>
      <Button
        onClick={() => scrollToSection(contactRef)}
        variant="outline"
        className="border-2 border-gray-600 text-gray-200 px-7 py-3 font-semibold rounded-full hover:bg-white hover:text-black transition-colors focus:outline-none"
      >
        Get In Touch
      </Button>
    </motion.div>
  </section>
);

export default HeroSection;
