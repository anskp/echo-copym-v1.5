// src/components/gsap/GSAPAnimations.jsx
import React, { forwardRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useGSAP from '../../hooks/useGSAPAnimations';

gsap.registerPlugin(ScrollTrigger);

/* ------------------------- AnimatedText ------------------------- */
export const AnimatedText = ({ text, className = '' }) => {
  const textRef = React.useRef();
  useGSAP(textRef, () => {
    const chars = textRef.current.querySelectorAll('.char');
    gsap.fromTo(
      chars,
      { rotateX: 90, opacity: 0 },
      {
        rotateX: 0,
        opacity: 1,
        duration: 1,
        ease: 'expo.out',
        stagger: 0.05,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          once: true
        }
      }
    );
  });
  return (
    <span ref={textRef} className={className}>
      {text.split('').map((c, i) => (
        <span key={i} className="char inline-block">
          {c}
        </span>
      ))}
    </span>
  );
};

/* ------------------------- FloatingElement ---------------------- */
export const FloatingElement = forwardRef(({ size = 50, color = '#04e70010', style = {}, className = '' }, ref) => (
  <div
    ref={ref}
    className={className}
    style={{
      width: size,
      height: size,
      backgroundColor: color,
      borderRadius: '50%',
      position: 'absolute',
      ...style
    }}
  />
));

/* ------------------------- AnimatedCard ------------------------- */
export const AnimatedCard = forwardRef(({ children, className = '' }, ref) => (
  <div ref={ref} className={`transition-transform hover:-translate-y-2 ${className}`}>
    {children}
  </div>
));

export default {
  AnimatedText,
  FloatingElement,
  AnimatedCard
};