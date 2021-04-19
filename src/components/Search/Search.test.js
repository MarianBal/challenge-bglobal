import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Search from './Search';

configure({ adapter: new Adapter() });

describe('Search render correctly', () => {
  it('Search renders', () => {
    shallow(<Search />);
  });

  it('Search render correctly', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper).toMatchSnapshot();
  });
});
