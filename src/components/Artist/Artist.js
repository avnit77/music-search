import React from 'react';
// import { Releases } from '../Release/Releases';
//import { Link } from 'react-router-dom';
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
