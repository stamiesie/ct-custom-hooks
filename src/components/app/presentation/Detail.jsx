import React from 'react';
import { useDetail } from '../../../hooks/DetailCharacter';
import CharacterDetail from './CharacterDetail';
import PropTypes from 'prop-types';
import Loading from '../../../loading/Loading';

const Detail = () => {
  const { loading, detail } = useDetail();

  if(loading) return <Loading />;

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
