import React from 'react';

import Pikachu from '../../img/pikachu.png';
import './card.scss';

const Card = ({ pokemon }) => {
  return (
    <div className='card-container'>
      <div className='card-image'>
        {pokemon.image ? (
          <img src={pokemon.image} alt='Pokemon' />
        ) : (
          <img src={Pikachu} alt='Pokemon' />
        )}
      </div>
      <div>{pokemon.name}</div>
    </div>
  );
};

export default Card;
