import React, { useEffect, useState } from "react";
import { fetchPeopleById } from "../fetch-utils";
import "../App.css";

export default function Card() {
  const [people, setPeople] = useState([]);

  async function getPeople() {
    const data = await fetchPeopleById();

    setPeople(data);
    console.log(data);
  }

  useEffect(() => {
    getPeople();
  }, []);

  useEffect(() => {
    async function getPeopleById() {
      const data = new URLSearchParams(window.location.search);

      const id = data.get("id");
      console.log("id", id);
      const response = await fetchPeopleById();
      console.log("more id", response);
    }
    getPeopleById();
  }, []);

  return (
    <div className="card-container">
      {people.map((person) => (
        <a href={`/?id=${person.id}`} key={person.id} className="person-card">
          <h3>{person.name}</h3>
          {/* <p>Birthday: {person.birth_year}</p>
          <p>
            {person.name}'s first film: {person.films[0]}
          </p> */}
        </a>
      ))}
    </div>
  );
}
