import React, { useEffect } from "react";
import { fetchPeople } from "../fetch-utils";
import "../App.css";
import { Link } from "react-router-dom";

export default function Card({ people, setPeople }) {
  async function getPeople() {
    const data = await fetchPeople();

    setPeople(data);
  }

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <div className="card-container">
      {people.map((person) => (
        <Link
          to={`/people/${person.name}`}
          key={person.name}
          className="person-card"
        >
          <h3>{person.name}</h3>
        </Link>
      ))}
    </div>
  );
}
