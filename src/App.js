import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ArtistSearch } from "./components/features/artist/ArtistSearch";
import { Releases } from "./components/features/release/Releases";
import { Songs } from "./components/features/song/Songs";
import { Lyrics } from "./components/features/song/SongLyrics";
import Header from "./components/elem/Header";

export default function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={ArtistSearch} />
          <Route path="/artists/:artist/:artistId" component={Releases} />
          <Route path="/songs/:artist/:releaseId" component={Songs} />
          <Route path="/lyrics/:artist/:title" component={Lyrics} />
        </Switch>
      </Router>
    </>
  );
}
