import React from 'react';
import CharacterList from './CharacterList';
import { useAllCharacters } from '../../../hooks/Characters';

const Characters = () => {
  const { loading, characters } = useAllCharacters();

  if(loading) return <h1>Loading...</h1>;

  return <CharacterList characters={characters}/>;

};

export default Characters;
