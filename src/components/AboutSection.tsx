import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface AboutSectionProps {
  aboutRef: React.RefObject<HTMLElement>;
  aboutInView: boolean;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const AboutSection: React.FC<AboutSectionProps> = ({ aboutRef, aboutInView }) => {
  return (
    <section ref={aboutRef} className="py-24 px-5 sm:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial="hidden"
          animate={aboutInView ? "visible" : "hidden"}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent select-none drop-shadow-lg">
            About Me
          </h2>
          <div className="mx-auto h-1 w-36 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 opacity-60" />
        </motion.div>

        {/* Content grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={aboutInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Text card */}
          <motion.div variants={itemVariants} className="order-2 md:order-1">
            <Card className="bg-gray-900/40 border border-purple-700 backdrop-blur-md rounded-3xl shadow-lg hover:bg-gray-900/60 transition duration-300">
              <CardContent className="p-10">
                <h3 className="text-3xl font-bold mb-6 text-gradient text-blue-400">
                  Creative Developer
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                  Hey, I'm Akshay Kashyap — a creative full-stack developer who thrives on transforming innovative ideas into sleek, high-performance web applications. I specialize in crafting intuitive user interfaces and building robust backend systems that work seamlessly together.
                </p>
                <p className="text-gray-400 leading-relaxed text-lg">
                  From pixel-perfect designs to scalable architectures, I create digital experiences that not only look stunning but feel effortless to use. Every line of code I write is driven by a passion for excellence and innovation.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Image card */}
          <motion.div variants={itemVariants} className="order-1 md:order-2 flex justify-center relative">
            <motion.div
              whileHover={{ scale: 1.05, y: -6 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-gradient-to-r from-blue-500 to-purple-500"
              style={{ maxWidth: 360, width: "100%" }}
            >
              <img
                src="/lovable-uploads/ebc8de80-46d2-4e18-ba66-b5f5be26e901.png"
                alt="Akshay Kashyap"
                className="w-full object-cover rounded-3xl"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-3xl pointer-events-none" />
            </motion.div>

            {/* Glow circles */}
            <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-40 pointer-events-none"></div>
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-3xl opacity-25 pointer-events-none"></div>
          </motion.div>
        </motion.div>

        {/* Education & Achievements Card */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={aboutInView ? "visible" : "hidden"}
          className="mt-20 max-w-4xl mx-auto"
        >
          <Card className="bg-gray-900/40 border border-purple-600 backdrop-blur-md rounded-3xl shadow-lg">
            <CardContent className="p-10">
              <h3 className="text-3xl font-bold mb-8 text-gradient text-purple-400 text-center">
                Education & Achievements
              </h3>
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h4 className="text-2xl font-semibold text-blue-400 mb-3">
                    IIIT Nagpur
                  </h4>
                  <p className="text-gray-300 mb-1 text-lg">
                    B.Tech in Electronics & Communication
                  </p>
                  <p className="text-gray-400 text-sm font-light">
                    June 2022 - Present
                  </p>
                </div>

                <div className="space-y-5 text-gray-300">
                  <div className="flex items-center gap-3">
                    <span className="text-blue-400 text-xl">🏆</span>{" "}
                    <span className="text-lg">300+ DSA problems solved</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-blue-400 text-xl">🏏</span>{" "}
                    <span className="text-lg">Cricket team captain - 3 finals</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-blue-400 text-xl">🎪</span>{" "}
                    <span className="text-lg">TANTRAFESTA Techfest coordinator</span>
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
