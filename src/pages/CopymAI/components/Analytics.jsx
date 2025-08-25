import { useEffect } from 'react';

// Analytics tracking utilities
export const trackEvent = (eventName, properties = {}) => {
  // Google Analytics 4 event tracking
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, {
      event_category: 'copym_ai',
      ...properties
    });
  }

  // Custom analytics tracking
  console.log('Event tracked:', eventName, properties);
};

export const trackPageView = (pageName) => {
  trackEvent('page_view', { page_name: pageName });
};

export const trackButtonClick = (buttonName, section) => {
  trackEvent('button_click', { 
    button_name: buttonName, 
    section: section 
  });
};

export const trackFormSubmission = (formName) => {
  trackEvent('form_submission', { form_name: formName });
};

export const trackScrollDepth = (depth) => {
  trackEvent('scroll_depth', { depth_percentage: depth });
};

// Hook for tracking scroll depth
export const useScrollTracking = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      // Track at 25%, 50%, 75%, 100%
      if ([25, 50, 75, 100].includes(scrollPercent)) {
        trackScrollDepth(scrollPercent);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};
