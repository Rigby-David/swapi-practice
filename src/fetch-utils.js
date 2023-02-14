export async function fetchPeople() {
  const response = await fetch("https://swapi.dev/api/people/");
  const data = await response.json();
  return data.results;
}

export async function fetchAllPeopleAndAddId() {
  const data = await fetchPeople();

  const newPeopleArray = data.map((person) => ({
    id: Math.ceil(Math.random() * 10000000),
    ...person,
  }));

  console.log(newPeopleArray);
  return newPeopleArray;
}

export async function fetchPeopleByName(name) {
  const response = await fetch(`https://swapi.dev/api/people/?search=${name}`);

  const data = response.json();
  return data;
}

export async function fetchPlanet(world) {
  const response = await fetch(`${world}`);

  const data = await response.json();
  return data;
}
