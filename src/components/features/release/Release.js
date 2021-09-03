import React from 'react';
import PropTypes from 'prop-types';


export const Release = ({ title, id, date }) => {

  return (

    <div>
      <div>
        <img src={`http://coverartarchive.org/release/${id}/front`} onError={(e)=>{e.target.onerror = null; e.target.src = '../../../src/assets/default.png';}} />
      </div>
      <div>
        <h1>{title}</h1>
        <p> - {date.slice(0, 4)} - </p>
      </div>
    </div>
  );
};


Release.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default Release;
