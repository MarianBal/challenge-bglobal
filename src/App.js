import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './app.scss';
import Main from './components/Main/Main';

const App = () => (
  <Router>
    <Main />
  </Router>
);

export default App;
