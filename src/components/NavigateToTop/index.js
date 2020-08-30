import React, { useEffect, useState } from 'react';

const NavigateToTop = () => {
  const [className, setClassName] = useState('fadeOut');
  const handleScroll = () => {
    const isVisible = window.pageYOffset > 50;
    setClassName(isVisible ? 'fadeIn' : 'fadeOut');
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigate = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, FF and Opera
  }

  return <button onClick={() => navigate()} className={`toTopButton ${className}`} title="Go to top">Top</button>
};

export default NavigateToTop;