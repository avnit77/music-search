import React from 'react';
import Release from './Release';
import { useReleases } from '../../../hooks/useReleases';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Results from '../../elem/Results'


export const Releases = ({ match }) => {

  const { releases } = useReleases(match.params.artistId);

  const releaseElements = releases.map(release => (

    <li key={release.id} className="release">
      <Link to={`/songs/${match.params.artist}/${release.id}`}>
        <Release title={release.title} id={release.id} date={release.date}/>
      </Link>
    </li>
  ));


  return (
    <Results items={releaseElements} title={match.params.artist}/>

  );
};

Releases.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
      artistId: PropTypes.string.isRequired,
    }).isRequired
  }).isRequired
};

export default Releases;
