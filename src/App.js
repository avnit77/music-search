import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { ArtistSearch } from './components/Artist/ArtistSearch';
import { Releases } from './components/Release/Releases';
import { Songs } from './components/Song/Songs';
import { Lyrics } from './components/Song/SongLyrics';

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
