import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import SearchArtistsContainer from '../../Containers/SearchArtistsContainer';
import ArtistViewContainer from '../../Containers/ArtistViewContainer';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SearchArtistsContainer} />
        <Route path="/:id" component={ArtistViewContainer} />
      </Switch>
    </Router>
  );
}
  
