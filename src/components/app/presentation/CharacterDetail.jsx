import React from 'react';
import PropTypes from 'prop-types';

const CharacterDetail = ({ name, image }) => {
  return (
    <div>
      <p>{name}</p>
      <img src={image} alt={name}/>
    </div>
  );
};

CharacterDetail.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CharacterDetail;
