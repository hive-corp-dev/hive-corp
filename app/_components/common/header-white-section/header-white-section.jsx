"use client";

import { useEffect, useContext, useRef } from "react";
import { HeaderContext } from "@/app/_context/header-context";

export default function HeaderWhiteSection({ children }) {
  const { setHeaderIsWhite } = useContext(HeaderContext);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerCallback = ([entry]) => {
      setHeaderIsWhite(entry.isIntersecting);
    };

    const observerOptions = {
      root: null,
      rootMargin: "-1px 0px -100%",
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const observeElement = () => {
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
    };

    requestAnimationFrame(observeElement); // DOMがレンダリングされた後にオブザーバーを設定

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return <div ref={sectionRef}>{children}</div>;
}
