import React from 'react';
import { Release } from './Release';
import { useReleases } from '../../hooks/useGetReleases';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Releases = ({ match }) => {
  const { releases } = useReleases(match.params.id);

  //console.log(releases);

  const releaseElements = releases.map(release => (

    <li key={release.id} >
      <Link to={`/releases/${release.id}`}>
        <Release title={release.title} />
      </Link>
    </li>
  ));
  

  return (
    <>
      {releaseElements}
    </>
  );
};

Releases.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}
