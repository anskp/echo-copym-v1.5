// src/hooks/useGSAPAnimations.js
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * useGSAP - Easily attach GSAP animations with automatic cleanup.
 * @param {React.RefObject<HTMLElement>} triggerRef - element used as scope & default trigger
 * @param {(ctx: gsap.Context) => void} animationFn - all GSAP code, executed in context
 */
export const useGSAP = (triggerRef, animationFn = () => {}) => {
  const ctx = useRef();

  useLayoutEffect(() => {
    if (!triggerRef?.current) return;
    ctx.current = gsap.context(animationFn, triggerRef);

    return () => ctx.current?.revert();
  }, [triggerRef, animationFn]);
};

export default useGSAP;
