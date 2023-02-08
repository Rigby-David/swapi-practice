import React, { useEffect, useState } from "react";
import { fetchPeople } from "../fetch-utils";
import "../App.css";

export default function Card() {
  const [people, setPeople] = useState([]);

  async function getPeople() {
    const data = await fetchPeople();

    const newPeopleArray = data.map((person) => ({
      id: Math.ceil(Math.random() * 10000000),
      name: person.name,
    }));

    setPeople(newPeopleArray);
    console.log(people);
  }

  useEffect(() => {
    getPeople();
  }, []);

  //   useEffect(() => {
  //     const data = new URLSearchParams(window.location.search);

  //     const id = data.get("id");
  //   }, []);

  return (
    <div className="card-container">
      {people.map((person) => (
        <a href="/detail" key={person.id} className="person-card">
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
