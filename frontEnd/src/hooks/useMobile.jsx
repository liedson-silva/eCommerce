import { useState, useEffect, useCallback } from "react";

const useMobile = (breakPoint = 768) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakPoint);

  const handleResize = useCallback(() => {
    const checkpoint = window.innerWidth < breakPoint;
    setIsMobile(checkpoint);
  }, [breakPoint]);

  useEffect(() => {
    
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return [isMobile];
};

export default useMobile;