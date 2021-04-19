import React, { useState, useEffect } from 'react';

import Card from '../Card/Card';
import apiCall from '../../utils/apiCall';
import './pokemonDisplay.scss';

const url = 'https://pokeapi.co/api/v2/pokemon?limit=40&offset=0';

const PokemonDisplay = () => {
  const [results, setResults] = useState([]);

  useEffect(() => apiCall(url, setResults), []);
  return (
    <div className='display-container'>
      {results.length && results.map(pokemon => <Card pokemon={pokemon} />)}
    </div>
  );
};

export default PokemonDisplay;
