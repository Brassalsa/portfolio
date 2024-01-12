"use client";

import { useState, useEffect, useRef, RefObject } from "react";

export const useInView = (): [boolean, RefObject<any>] => {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return [isInView, elementRef];
};
