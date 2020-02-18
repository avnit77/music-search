import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { ArtistSearch } from './Artist/ArtistSearch';
import { Releases } from './Release/Releases';
import { Songs } from './Song/Songs';
import { Lyrics } from './Song/SongLyrics';

export default function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ArtistSearch}/>
        <Route path="/artists/:artist/:artistId" component={Releases} />
        <Route path="/songs/:artist/:releaseId" component={Songs}  />
        <Route path="/lyrics/:artist/:title" component={Lyrics} />
      </Switch>
    </Router>
  );
}
