import React from 'react';
import { shallow } from 'enzyme';
import RecordingsView from './RecordingsView';


describe('Search Artists snap shot tests', () => {
  it('should be a list of artists', () => {
    const wrapper = shallow(<RecordingsView bandName={'im a band name'} recordings={[{
      title: 'title1', id: 'ID1'
    },
    {
      title: 'title2', id: 'ID2'
    }, {
      title: 'title3', id: 'ID3'
    }]}/>);
    
    expect(wrapper).toMatchSnapshot();
  });
});
