"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Container, NavBar } from "..";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  // handle scroll up or down
  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;
    const visible = prevScrollPos > currentScrollPos;

    setPrevScrollPos(currentScrollPos);
    setIsVisible(visible);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, isVisible, setIsVisible, handleScroll]);

  return (
    <header
      id="top"
      className={`py-4 sticky bg-black z-10 border-b border-slate-700 transition-transform duration-700 top-0 ${
        isVisible ? "down" : "up"
      }`}
    >
      <Container>
        <NavBar />
      </Container>
    </header>
  );
};

export default Header;
