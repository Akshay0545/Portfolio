import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { EnhancedHoverCard } from "./EnhancedHoverEffect";

interface ProjectsSectionProps {
  projectsRef: React.RefObject<HTMLElement>;
  projectsInView: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projectsRef,
  projectsInView,
}) => {
  const projects = [
    {
      title: "PriceWise",
      description:
        "A price tracking application that helps users save money on online shopping with real-time notifications and price monitoring.",
      tech: ["Next.js", "Tailwind CSS", "MongoDB", "Cheerio", "Axios"],
      github: "https://github.com/Akshay0545/Pricewise",
      live: "#",
    },
    {
      title: "ElevateHub",
      description:
        "Interactive platform connecting startup founders and investors with real-time communication and detailed profiles.",
      tech: ["React.js"],
      github: "https://github.com/Akshay0545/LandingPage",
      live: "https://landing-page-kohl-three-92.vercel.app/",
    },
    {
      title: "Apple Clone",
      description:
        "Pixel-perfect Apple homepage clone with responsive design and smooth scroll-based animations.",
      tech: ["React.js", "Tailwind CSS", "GSAP", "Framer Motion"],
      github: "https://github.com/Akshay0545/Apple_clone",
      live: "https://apple-clone-ten-self.vercel.app",
    },
    {
      title: "ContentHub",
      description:
        "Personalized dashboard platform that curates news, entertainment recommendations, and social posts into a unified, interactive feed tailored to user preferences.",
      tech: [
        "React.js",
        "Redux Toolkit",
        "TypeScript",
        "React Router",
        "Tailwind CSS",
        "Framer Motion",
        "shadcn/ui",
      ],
      github: "https://github.com/Akshay0545/Personalized-ContentHub",
      live: "https://contetnt-hub.vercel.app/",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={projectsRef} className="py-20 px-4 bg-gray-800/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={
            projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
          }
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
              <EnhancedHoverCard>
                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm h-full group overflow-hidden">
                  <CardContent className="p-6 relative">
                    <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <h3 className="text-xl font-bold mb-3 text-blue-400 group-hover:text-purple-400 transition-colors relative z-10">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed relative z-10">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-md text-xs hover:bg-blue-500/30 transition-colors cursor-pointer"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    <div className="flex gap-4 relative z-10">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        whileTap={{ scale: 0.8 }}
                        className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-700/30 rounded-lg hover:bg-gray-700/50"
                      >
                        <Github className="h-5 w-5" />
                      </motion.a>
                      {project.live !== "#" && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, rotate: -360 }}
                          whileTap={{ scale: 0.8 }}
                          className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-700/30 rounded-lg hover:bg-gray-700/50"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </motion.a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </EnhancedHoverCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
