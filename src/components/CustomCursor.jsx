import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName.toLowerCase() === 'a' || 
          e.target.tagName.toLowerCase() === 'button' ||
          e.target.closest('a') || 
          e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-lavender/40 pointer-events-none z-50 mix-blend-screen hidden md:flex items-center justify-center backdrop-blur-[1px]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(167, 139, 250, 0.05)' : 'transparent',
          borderColor: isHovering ? 'rgba(167, 139, 250, 0.8)' : 'rgba(167, 139, 250, 0.4)',
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.2 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-iceBlue pointer-events-none z-50 hidden md:block"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
        }}
        transition={{ type: 'tween', ease: 'linear', duration: 0 }}
      />
    </>
  );
};

export default CustomCursor;
