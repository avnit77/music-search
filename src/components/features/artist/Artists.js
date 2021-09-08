import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Results from '../../elem/Results'

export const Artists = ({ artists }) => {
  const artistsElements = artists.map((artist) => {
    return (
      <li key={artist.id}>
        <Link to={`/artists/${artist.name}/${artist.id}`}>
          <h1>{artist.name}</h1>
        </Link>
      </li>
    );
  });

  return (
<Results items={artistsElements} />
  );
};

Artists.propTypes = {
  artists: PropTypes.array.isRequired,
};
