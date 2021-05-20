import React from 'react';
import CharacterList from './CharacterList';
import { useAllCharacters } from '../../../hooks/Characters';
import Loading from '../../../loading/Loading';

const Characters = () => {
  const { loading, characters } = useAllCharacters();

  if(loading) return <Loading />;

  return <CharacterList characters={characters}/>;

};

export default Characters;
