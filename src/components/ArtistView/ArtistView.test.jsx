import React from 'react';
import { shallow } from 'enzyme';
import ArtistView from './ArtistView';

describe('Displays Releases for and Artist', () => {
  it('Should be the releases from an Artist', () => {
    const wrapper = shallow(<ArtistView releases={[{
      title: 'title1', date: 'somedate', id: 'ID1'
    },
    {
      title: 'title2', date: 'somedate', id: 'ID2'
    }, {
      title: 'title3', date: 'somedate', id: 'ID3'
    }]}/>);

    expect(wrapper).toMatchSnapshot();
  });
});
