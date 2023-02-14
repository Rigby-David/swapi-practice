import { createContext, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPeopleByName, fetchPlanet } from "../fetch-utils";

const SwapiContext = createContext();

export default function DataProvider({ children }) {
  const [planet, setPlanet] = useState([]);
  const [peopleByName, setPeopleByName] = useState([]);

  const value = {
    planet,
    setPlanet,
    peopleByName,
    setPeopleByName,
    getPeopleById,
    getPlanet,
  };

  const { name } = useParams();

  async function getPeopleById() {
    const response = await fetchPeopleByName(name);
    setPeopleByName(response.results[0]);
  }

  async function getPlanet() {
    const world = peopleByName.homeworld;
    const response = await fetchPlanet(world);
    setPlanet(response);
  }

  return (
    <SwapiContext.Provider value={value}>{children}</SwapiContext.Provider>
  );
}

export function useSwapiContext() {
  return useContext(SwapiContext);
}
