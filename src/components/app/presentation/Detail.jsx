import React from 'react';
import { useDetail } from '../../../hooks/DetailCharacter';
import CharacterDetail from './CharacterDetail';
import PropTypes from 'prop-types';

const Detail = ({ id }) => {
  const { loading, detail } = useDetail(id);

  if(loading) return <h1>Loading...</h1>;

  return (
    <div>
      <CharacterDetail
        {...detail}/>
    </div>
  );
  
};

Detail.propTypes = {
  id: PropTypes.string.isRequired,
};



export default Detail;
