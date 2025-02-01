const BASE_URL = 'https://planets-api-yakh.onrender.com';

const getPlanets = async () => {
  const response = await fetch(`${BASE_URL}/planets`);
  const data = await response.json();
  return data;
};

const getPlanetByName = async (name: string) => {
  const response = await fetch(`${BASE_URL}/planets/${name.toLowerCase()}`);
  const data = await response.json();
  return data;
};

export const planetsApi = {
  getPlanets,
  getPlanetByName
};