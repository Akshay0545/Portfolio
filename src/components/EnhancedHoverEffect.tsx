import React from 'react';
import { motion } from 'framer-motion';

interface EnhancedHoverCardProps {
  children: React.ReactNode;
  className?: string;
}

export const EnhancedHoverCard: React.FC<EnhancedHoverCardProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        rotateX: 5,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }}
      className={`transform-gpu perspective-1000 ${className}`}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </motion.div>
  );
};

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({ children, onClick, className = '' }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        scale: 1.1,
        background: "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)",
        boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 10,
      }}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
        whileHover={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 0.6 }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};