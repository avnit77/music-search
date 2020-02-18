import React from 'react';
import PropTypes from 'prop-types';

export const Artist = ({ name }) => {

  return (
    <>
      <h1>{name}</h1>
    </>
  );
};

Artist.propTypes = {
  name: PropTypes.string.isRequired
};
