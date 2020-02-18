import React from 'react';
//import { Songs } from '../Song/Songs';
import PropTypes from 'prop-types';

export const Release = ({ title }) => {

  return (
    <>
      <h1>{title}</h1>
    </>
  );
};

Release.propTypes = {
  title: PropTypes.string.isRequired
};

