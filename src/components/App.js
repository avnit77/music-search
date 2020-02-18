import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { ArtistSearch } from './Artist/ArtistSearch';
import { Releases } from './Release/Releases';

export default function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ArtistSearch}/>
        <Route path="/artists/:artist/:artistId" component={Releases} />
      </Switch>
    </Router>
  );
}
