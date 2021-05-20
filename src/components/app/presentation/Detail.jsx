import React from 'react';
import { useDetail } from '../../../hooks/DetailCharacter';
import CharacterDetail from './CharacterDetail';
import PropTypes from 'prop-types';
import Loading from '../../../Loading/Loading';

const Detail = ({ id }) => {
  const { loading, detail } = useDetail(id);

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
