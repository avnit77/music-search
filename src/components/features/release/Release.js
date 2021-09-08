import React, {useState} from 'react';
import PropTypes from 'prop-types';


export const Release = ({ title, id, date }) => {

const [className, setClassName] = useState(null)


  return (

    <div className="results">
      <div className={`container ${className}`}>
        <img className="album" src={`http://coverartarchive.org/release/${id}/front`} onError={(e)=>{setClassName("defaultImage"); e.target.onerror = null;}} />
      </div>
      <div className="description">
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
