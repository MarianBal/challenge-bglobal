import React from 'react';
// import { Route, Switch } from 'react-router-dom';

import Search from '../Search/Search';
import PokemonDisplay from '../PokemonDisplay/PokemonDisplay';
import './main.scss';

const Main = () => (
  <div className='app-container'>
    <Search />
    <PokemonDisplay />
    {/* <Switch>
      <Route exact path='/' component={Search} />
      <Route path='search/:search' component={Modal} />
    </Switch> */}
  </div>
);

export default Main;
