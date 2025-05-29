
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ProjectsSectionProps {
  projectsRef: React.RefObject<HTMLElement>;
  projectsInView: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projectsRef, projectsInView }) => {
  const projects = [
    {
      title: "PriceWise",
      description: "A price tracking application that helps users save money on online shopping with real-time notifications and price monitoring.",
      tech: ["Next.js", "Tailwind CSS", "MongoDB", "Cheerio", "Axios"],
      github: "https://github.com/Akshay0545/Pricewise",
      live: "#"
    },
    {
      title: "ElevateHub",
      description: "Interactive platform connecting startup founders and investors with real-time communication and detailed profiles.",
      tech: ["React.js", "Express.js", "MongoDB"],
      github: "https://github.com/Akshay0545/ElevateHub",
      live: "#"
    },
    {
      title: "Apple Clone",
      description: "Pixel-perfect Apple homepage clone with responsive design and smooth scroll-based animations.",
      tech: ["React.js", "Tailwind CSS", "GSAP", "Framer Motion"],
      github: "https://github.com/Akshay0545/Apple_clone",
      live: "https://apple-clone-ten-self.vercel.app"
    }
  ];

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
    <section ref={projectsRef} className="py-20 px-4 bg-gray-800/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={projectsInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm h-full hover:transform hover:scale-105 transition-all duration-300 group hover:bg-gray-800/70">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-blue-400 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-md text-xs hover:bg-blue-500/30 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <motion.a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-700/30 rounded-lg hover:bg-gray-700/50"
                    >
                      <Github className="h-5 w-5" />
                    </motion.a>
                    {project.live !== "#" && (
                      <motion.a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-700/30 rounded-lg hover:bg-gray-700/50"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </motion.a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
