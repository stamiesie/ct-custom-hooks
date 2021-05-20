import { useEffect, useState } from 'react';
import { fetchCharacters } from '../services/ApiCall';

export const useAllCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters()
      .then((characters) => setCharacters(characters))
      .finally(() => setLoading(false));
  }, []);

  return { loading, characters };
};

