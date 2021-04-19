import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './search.scss';

const Search = () => {
  const [search, setSearch] = useState('');
  const url = `/search/${search}`;

  return (
    <div className='search-container'>
      <div className='input-container'>
        <input
          placeholder='Buscar Pókemon'
          name='search'
          type='text'
          value={search}
          onChange={event => setSearch(event.target.value)}
        />
        <Link to={url}>
          <i className='fas fa-search' alt='Botón de búsqueda' />
        </Link>
      </div>
    </div>
  );
};

export default Search;
