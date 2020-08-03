import React from 'react';
import { shallow } from 'enzyme';
import LyricsView from './LyricsView';

describe('Get Lyrics for a song', () => {
  it('should get the lyrics for a song', () => {
    const wrapper = shallow(<LyricsView lyrics={'check my out im some lyricss'}/>);
    
    expect(wrapper).toMatchSnapshot();
  });
});
