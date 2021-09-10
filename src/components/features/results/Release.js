/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Release = ({release, link}) => {
  const [imgErr, setImgErr] = useState([]);

  return ( <li key={release.id} className="release">
          <Link
            to={link}
          >
            <div
              className={`container ${
                imgErr.includes(release.id) ? "defaultImage" : null
              }`}
            >
              <img
                className="album"
                src={`http://coverartarchive.org/release/${release.id}/front`}
                onError={(e) => {
                  setImgErr([...imgErr, release.id]);
                  e.target.onerror = null;
                }}
              />
            </div>
            <div className="description">
              <h1>{release.title}</h1>
              <p> - {release.date.slice(0, 4)} - </p>
            </div>
          </Link>
        </li>)
};

export default Release;