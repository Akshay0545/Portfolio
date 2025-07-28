import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0.6, y: 56 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            boxShadow: "0 2px 16px 0 rgba(139,92,246,0.18)",
            transition: { type: "spring", stiffness: 330, damping: 22 },
          }}
          exit={{ opacity: 0, scale: 0.6, y: 56, transition: { duration: 0.22 } }}
          whileHover={{
            scale: 1.11,
            y: -2,
            background: "linear-gradient(90deg, #4f46e5, #8b5cf6)",
            boxShadow: "0 0 20px 6px #8b5cf699",
          }}
          whileTap={{ scale: 0.92 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-0 bg-transparent border-0 focus:outline-none"
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: "linear-gradient(90deg, #3b82f6cc 70%, #8b5cf6cc 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "background 0.25s, box-shadow 0.25s",
          }}
        >
          <ArrowUp className="h-5 w-5 text-white" strokeWidth={2.2} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
