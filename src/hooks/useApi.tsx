import { useState, useEffect } from 'react';
import { Planet } from '../types/planet';
import { planetsApi } from '../services/api/planets';

type FetchFunction = typeof planetsApi.getPlanets | typeof planetsApi.getPlanetByName;

export const useApi = <T,>(fetchFn: FetchFunction, param?: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchFn(param as string);
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchFn, param]);

  return { data, loading, error };
};

export const usePlanetData = (planetName: string) => {
  return useApi<Planet>(planetsApi.getPlanetByName, planetName);
};

export const usePlanetsData = () => {
  return useApi<Planet[]>(planetsApi.getPlanets);
};
