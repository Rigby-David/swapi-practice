import React, { useState } from "react";
import Card from "./Card";

export default function PeopleList() {
  const [people, setPeople] = useState([]);
  return (
    <div>
      <Card people={people} setPeople={setPeople} />
    </div>
  );
}
