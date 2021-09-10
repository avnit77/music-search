import React from "react";
import { Link } from "react-router-dom";

const Artist = ({artist}) => {

  return (
        <li key={artist.id}>
          <Link to={`/${artist.name.replace("/", "%2F")}`}>
            <h1>{artist.name}</h1>
          </Link>
        </li>)

};

export default Artist;

