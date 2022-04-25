import React, {
  FC,
  useState,
  useCallback,
  createContext,
  useEffect,
} from "react";

interface ScrollValue {
  scrollY: number;
}

export const ScrollContex = createContext<ScrollValue>({ scrollY: 0 });

const ScrollObserver: FC = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const handleScrollY = useCallback(() => {
    setScrollY(window.scrollY);
    return () => {
      document.removeEventListener("scroll", handleScrollY);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", handleScrollY, { passive: true });
  }, [handleScrollY]);

  return (
    <ScrollContex.Provider value={{ scrollY }}>
      {children}
    </ScrollContex.Provider>
  );
};

export default ScrollObserver;
