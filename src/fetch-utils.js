async function fetchPeople() {
  const response = await fetch("https://swapi.dev/api/people/");
  const data = await response.json();
  //   console.log(data.results);
  return data.results;
}

export async function fetchPeopleById() {
  const data = await fetchPeople();

  const newPeopleArray = data.map((person) => ({
    id: Math.ceil(Math.random() * 10000000),
    ...person,
  }));

  console.log(newPeopleArray);
  return newPeopleArray;
}
