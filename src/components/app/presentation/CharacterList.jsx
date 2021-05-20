import React from 'react';
import CharacterDetail from './CharacterDetail';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { useAllCharacters } from '../../../hooks/AllCharacters';

const CharacterList = ({ characters }) => {
//   const characters = useAllCharacters();

  return (
    <ul aria-label="characters">
      {characters.map((character) => (
        <li key={character._id}>
          <Link to={`/${character._id}`}>
            <CharacterDetail 
              name={character.name} 
              image={character.image}/>
          </Link>
        </li>
      ))}
    </ul>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  )
};

export default CharacterList;
