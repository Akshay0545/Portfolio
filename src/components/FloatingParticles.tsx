import React from "react";
import { motion } from "framer-motion";

// Particle color palette (feel free to customize!)
const COLORS = ["#5A9", "#29A", "#F47", "#F9B", "#FFF"];

// Helper for random values in a range
const getRandom = (a: number, b: number) => Math.random() * (b - a) + a;

// Utility to decide shape
const getShape = () => (Math.random() > 0.5 ? "circle" : "square");

const PARTICLE_COUNT = 40;

const createParticle = () => {
  return {
    id: Math.random(),
    x: getRandom(0, window.innerWidth),
    y: getRandom(0, window.innerHeight),
    size: getRandom(14, 32),
    color: COLORS[Math.floor(getRandom(0, COLORS.length))],
    duration: getRandom(6, 12),
    delay: getRandom(0, 4),
    angle: getRandom(0, 360),
    shape: getShape(),
  };
};

const easeWaves = [
  [0.42, 0, 0.58, 1], // easeInOut
  [0.6, -0.28, 0.735, 0.045], // custom elastic
  [0.68, -0.55, 0.27, 1.55], // overshoot
];

const FloatingParticles: React.FC = () => {
  const particles = React.useMemo(
    () => Array.from({ length: PARTICLE_COUNT }, createParticle),
    []
  );

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
      {particles.map((p, i) => (
        <motion.div
          key={p.id}
          initial={{
            x: p.x,
            y: p.y,
            opacity: 0,
            scale: 0.8,
            rotate: p.angle,
          }}
          animate={{
            x: [
              p.x,
              p.x + Math.sin(i) * 60 + getRandom(-25, 25),
              p.x + Math.cos(i) * 110
            ],
            y: [
              p.y,
              p.y + Math.sin(i * 2) * 80 + getRandom(-25, 25),
              p.y + Math.cos(i) * 130
            ],
            opacity: [0, 1, 0.6, 0],
            scale: [0.8, 1.3, 0.8, 1],
            rotate: [p.angle, p.angle + 90, p.angle + 360]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            repeatType: "mirror",
            ease: easeWaves[i % easeWaves.length],
            delay: p.delay,
          }}
          style={{
            width: p.size,
            height: p.size,
            borderRadius: p.shape === "circle" ? "50%" : "14%",
            background: p.color,
            boxShadow: `0 2px 12px ${p.color}55`,
            position: "absolute",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
