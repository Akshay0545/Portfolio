
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

interface AboutSectionProps {
  aboutRef: React.RefObject<HTMLElement>;
  aboutInView: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ aboutRef, aboutInView }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={aboutRef} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={aboutInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="order-2 md:order-1">
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-blue-400">Creative Developer</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Hey, I'm Akshay Kashyap — a creative full-stack developer who thrives on transforming innovative ideas into sleek, high-performance web applications. I specialize in crafting intuitive user interfaces and building robust backend systems that work seamlessly together.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  From pixel-perfect designs to scalable architectures, I create digital experiences that not only look stunning but feel effortless to use. Every line of code I write is driven by a passion for excellence and innovation.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants} className="order-1 md:order-2">
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <img
                  src="/lovable-uploads/ebc8de80-46d2-4e18-ba66-b5f5be26e901.png"
                  alt="Akshay Kashyap"
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto border-4 border-gradient-to-r from-blue-500 to-purple-500"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-2xl"></div>
              </motion.div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-50"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-xl opacity-30"></div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={aboutInView ? "visible" : "hidden"}
          className="mt-16"
        >
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-purple-400 text-center">Education & Achievements</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-blue-300">IIIT Nagpur</h4>
                  <p className="text-gray-300 mb-1">B.Tech in Electronics & Communication</p>
                  <p className="text-gray-400 text-sm">June 2022 - Present</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-2">🏆</span>
                    <span className="text-gray-300">300+ DSA problems solved</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-2">🏏</span>
                    <span className="text-gray-300">Cricket team captain - 3 finals</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-2">🎪</span>
                    <span className="text-gray-300">TANTRAFESTA Techfest coordinator</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
