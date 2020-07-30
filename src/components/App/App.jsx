import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import SearchArtistsContainer from '../../Containers/SearchArtistsContainer';
import ArtistViewContainer from '../../Containers/ArtistViewContainer';
import RecordingsViewContainer from '../../Containers/RecordingsContainer';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SearchArtistsContainer} />
        <Route exact path="/:id" component={ArtistViewContainer} />
        <Route exact path="/album/:id" component={RecordingsViewContainer} />
      </Switch>
    </Router>
  );
}
  
