import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import SearchArtistsContainer from '../../Containers/SearchArtistsContainer';
import RecordingsViewContainer from '../../Containers/RecordingsContainer';
import AlbumViewContainer from '../../Containers/AlbumViewContainer';
import LyricsViewContainer from '../../Containers/LyricsViewContainer';
import Header from '../Header/Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={SearchArtistsContainer} />
        <Route exact path="/:bandName/:id" component={AlbumViewContainer} />
        <Route exact path="/album/:bandName/:id" component={RecordingsViewContainer} />
        <Route exact path="/lyrics/:bandName/:songName" component={LyricsViewContainer} />
      </Switch>
    </Router>
  );
}
  
