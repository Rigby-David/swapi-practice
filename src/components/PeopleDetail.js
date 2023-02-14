import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPeopleByName, fetchPlanet } from "../fetch-utils";
import "../App.css";

export default function PeopleDetail() {
  const [peopleByName, setPeopleByName] = useState([]);
  const [planet, setPlanet] = useState([]);

  console.log("peopleByName", peopleByName);
  console.log("planet", planet);

  const { name } = useParams();

  async function getPeopleById() {
    const response = await fetchPeopleByName(name);
    // console.log("response", response.results[0]);
    setPeopleByName(response.results[0]);
  }

  async function getPlanet() {
    const world = peopleByName.homeworld;
    const response = await fetchPlanet(world);
    setPlanet(response);
  }

  useEffect(() => {
    getPeopleById();
    getPlanet();
  }, []);

  return (
    <div className="detail">
      <div className="detail-card">
        <h2>{peopleByName.name}</h2>
        <p>Homeworld: {planet.name}</p>
      </div>
    </div>
  );
}
