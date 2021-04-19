import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PokemonDisplay from './PokemonDisplay';

configure({ adapter: new Adapter() });

describe('PokemonDisplay renders correctly', () => {
  it('PokemonDisplay renders', () => {
    shallow(<PokemonDisplay />);
  });

  it('PokemonDisplay renders correctly', () => {
    const wrapper = shallow(<PokemonDisplay />);
    expect(wrapper).toMatchSnapshot();
  });
});
