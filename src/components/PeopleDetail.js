import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPeopleByName } from "../fetch-utils";

export default function PeopleDetail() {
  const [peopleByName, setPeopleByName] = useState([]);

  const { name } = useParams();

  useEffect(() => {
    async function getPeopleById() {
      const response = await fetchPeopleByName(name);
      setPeopleByName(response.results[0]);
    }
    getPeopleById();
  }, []);

  return <div>{peopleByName.name}</div>;
}
