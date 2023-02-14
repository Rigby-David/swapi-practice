import { createContext, useContext, useState } from "react";

const SwapiContext = createContext();

export default function DataProvider({ children }) {
  const [planet, setPlanet] = useState([]);

  const value = {
    planet,
    setPlanet,
  };

  return (
    <SwapiContext.Provider value={value}>{children}</SwapiContext.Provider>
  );
}

export function useSwapiContext() {
  return useContext(SwapiContext);
}
