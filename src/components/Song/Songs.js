import React from 'react';
import Song from './Song';
import { useSongs } from '../../hooks/useSongs';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Songs = ({ match }) => {
  const { songs } = useSongs(match.params.releaseId);

  const songElements = songs.map(song => (

    <li key={song.id} >
      <Link to={`/lyrics/${match.params.artist}/${song.title}`}>
        <Song title={song.title} />
      </Link>
    </li>
  ));

  return (
    <main>
      <h2>Tracks</h2>
      <ul>
        {songElements}
      </ul>
    </main>
  );
};

Songs.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      releaseId: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

