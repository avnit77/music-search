import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getLyrics } from '../../services/musicBrainzApi';

export const Lyrics = ({ match }) => {
  const [lyrics, setLyrics] = useState('');
  useEffect(() => {
    getLyrics(match.params.artist, match.params.title)
      .then(lyrics => setLyrics(lyrics));
  }, []);

  return (
    <main>
      <h2>{match.params.title}</h2>
      <h4>by {match.params.artist}</h4>
      <pre>{lyrics.lyrics}</pre>
    </main>
  );
};

Lyrics.propTypes = {
  match: PropTypes.object.isRequired
};
