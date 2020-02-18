import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
// import { Artists } from './Artist/Artists';
import { ArtistSearch } from './Artist/ArtistSearch';
import { Releases } from './Release/Releases';

export default function App() {

  return (
    <Router>
      <ArtistSearch />
      <Switch>
        {/* <Route exact path="/" component={Artists} /> */}
        <Route path="/artists/:id" component={Releases} />
      </Switch>
    </Router>
  );
}
