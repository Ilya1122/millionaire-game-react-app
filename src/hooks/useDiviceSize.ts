import { useEffect, useState } from "react";

export const useDeviceSize = (): number => {
  const [width, setWidth] = useState(0);

  const handleWindowResize = (): void => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    if (window) {
      handleWindowResize();
    }

    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return width;
};
