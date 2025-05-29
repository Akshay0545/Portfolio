
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

interface SkillsSectionProps {
  skillsRef: React.RefObject<HTMLElement>;
  skillsInView: boolean;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skillsRef, skillsInView }) => {
  const skills = {
    "Frontend": [
      { name: "React.js", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "JavaScript", icon: "💛" },
      { name: "Tailwind CSS", icon: "🎨" }
    ],
    "Backend": [
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "🚀" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Java", icon: "☕" }
    ],
    "Tools & Others": [
      { name: "Git/GitHub", icon: "🐙" },
      { name: "VS Code", icon: "💙" },
      { name: "Linux", icon: "🐧" },
      { name: "C++", icon: "🔵" }
    ]
  };

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
    <section ref={skillsRef} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={skillsInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6"
        >
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm h-full hover:bg-gray-800/70 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4 text-purple-400">{category}</h3>
                  <div className="space-y-3">
                    {skillList.map((skill, skillIndex) => (
                      <motion.div 
                        key={skillIndex} 
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-3 p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-200 cursor-pointer"
                      >
                        <span className="text-xl">{skill.icon}</span>
                        <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                      </motion.div>
                    ))}
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

export default SkillsSection;
