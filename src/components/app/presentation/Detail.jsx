import React from 'react';
import { fetchCharacterById } from '../../../services/ApiCall';
import CharacterDetail from './CharacterDetail';

const Detail = ({ match.params.id }) => {
  const { loading, detail } = fetchCharacterById(match.params.id);

  if(loading) return <h1>Loading...</h1>;

  return (
    <div>
      <CharacterDetail
        {...detail}/>
    </div>
  );


};

export default Detail;
