import { createContext, useEffect, useState } from "react";

export const DeviceContext = createContext();

export default function DeviceProvider({ children }) {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1440);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1440);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <DeviceContext.Provider value={{ isDesktop }}>
      {children}
    </DeviceContext.Provider>
  );
}
