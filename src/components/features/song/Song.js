import React from 'react';
import PropTypes from 'prop-types';

export const Song = ({ title }) => {

  return (
    <>
      <h3>{title}</h3>
    </>
  );
};

Song.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Song;
