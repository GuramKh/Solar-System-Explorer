const BASE_URL = import.meta.env.PROD 
  ? 'https://planets-api-yakh.onrender.com'
  : '/api';

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
