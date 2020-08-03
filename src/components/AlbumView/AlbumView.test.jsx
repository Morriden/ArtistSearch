import React from 'react';
import { shallow } from 'enzyme';
import AlbumView from './AlbumView';

describe('Displays Releases for and Artist', () => {
  it('Should be the releases from an Artist', () => {
    const wrapper = shallow(<AlbumView bandName={'im a name'} releases={[{
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
