import { useState, useEffect } from 'react';
import { fetchCharacterById } from '../services/ApiCall';
import { useParams } from 'react-router-dom';

export const useDetail = () => {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  console.log('id', id);
  
  useEffect(() => {
    fetchCharacterById(id)
      .then(detail => setDetail(detail))
      .finally(() => setLoading(false));
  }, []);

  return { loading, detail };
};
