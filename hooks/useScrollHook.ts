import { useEffect, useState } from "react";

export const useAutoHideOnScroll = (threshold = 100, scrollThreshold = 200) => {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null
  );
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasAutoHidden, setHasAutoHidden] = useState(false);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";

      if (
        direction !== scrollDirection &&
        Math.abs(scrollY - lastScrollY) > threshold
      ) {
        setScrollDirection(direction);
      }
      setLastScrollY(scrollY > 0 ? scrollY : 0);
    };

    const handleScroll = () => {
      window.requestAnimationFrame(updateScrollDirection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollDirection, lastScrollY, threshold]);

  return {
    scrollDirection,
    hasAutoHidden,
    setHasAutoHidden,
    scrollThreshold,
  };
};
