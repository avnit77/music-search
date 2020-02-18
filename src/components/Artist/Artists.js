import React from 'react';
import { Artist } from './Artist';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Artists = ({ artists }) => {
  const artistsElements = artists.map(artist => {
    return (
      <li key={artist.id} >
        <Link to={`/artists/${artist.name}/${artist.id}`}>
          <Artist name={artist.name} />
        </Link>
      </li>
    );}
  );

  return (
    <ul>
      <h2>{artistsElements}</h2>
    </ul>
  );
};

Artists.propTypes = {
  artists: PropTypes.array.isRequired
};
