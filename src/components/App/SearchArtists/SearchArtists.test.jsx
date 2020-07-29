import React from 'react';
import { shallow } from 'enzyme';
import SearchArtists from './SearchArtists';

describe('Search Artists snap shot tests', () => {
  it('shoud be a list of artists', () => {
    const wrapper = shallow(<SearchArtists artists={[{ name: 'artist 1', id: 1 }, { name: 'artist 2', id: 2 }, { name: 'artist 3', id: 3 }]}/>);
    
    expect(wrapper).toMatchSnapshot();
  });
});
