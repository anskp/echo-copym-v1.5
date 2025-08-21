import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Animates the transition between screenshots with a vertical scroll effect.
 * @param {object} props
 * @param {string} props.screenshot - The source URL for the current screenshot.
 */
export default function AnimatedScreenshot({ screenshot }) {
  const variants = {
    enter: {
      y: '100%',
      opacity: 0,
    },
    center: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: '-100%',
      opacity: 0,
    },
  };

  return (
    <AnimatePresence initial={false}>
      <motion.img
        // The key is crucial! It tells AnimatePresence when the component is changing.
        key={screenshot}
        src={screenshot}
        alt="App screenshot"
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          y: { type: 'spring', stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
        className="absolute w-full h-full object-cover rounded-[2.5rem] shadow-lg"
      />
    </AnimatePresence>
  );
}