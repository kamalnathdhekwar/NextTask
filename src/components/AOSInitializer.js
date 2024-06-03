"use client";

import { useEffect } from 'react';
import Script from 'next/script';

const AOSInitializer = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.init();
    }
  }, []);

  return (
    <Script 
      src="https://unpkg.com/aos@next/dist/aos.js" 
      strategy="afterInteractive"
      onLoad={() => {
        if (typeof AOS !== 'undefined') {
          AOS.init();
        }
      }}
    />
  );
};

export default AOSInitializer;
