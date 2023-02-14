import React, { useEffect } from "react";
import { useSwapiContext } from "./Context";
import "../App.css";

export default function PeopleDetail() {
  const { peopleByName, getPeopleById } = useSwapiContext();

  console.log("peopleByName", peopleByName);

  useEffect(() => {
    async function test() {
      const res = await getPeopleById();
      console.log("res", res);
    }
    test();
  }, []);

  return (
    <div className="detail">
      <div className="detail-card">
        <h2>{peopleByName.name}</h2>
        <p>Homeworld: </p>
      </div>
    </div>
  );
}
