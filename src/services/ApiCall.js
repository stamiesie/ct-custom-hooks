/* eslint-disable max-len */
export const fetchCharacters = async () => {
  const res = await fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters');
  const results = await res.json();
  // console.log(results);

  return results;
};

export const fetchCharacterById = async (id) => {
  const res = await fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters${id}`);
  const results = await res.json();

  return results;
};

