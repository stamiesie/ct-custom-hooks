import { useState, useEffect } from 'react';
import { fetchCharacterById } from '../services/ApiCall';

export const Detail = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState({});

  console.log('id', match);
  
  useEffect(() => {
    fetchCharacterById(match.params.id)
      .then(detail => setDetail(detail))
      .finally(() => setLoading(false));
  }, []);

  return { loading, detail };
};
