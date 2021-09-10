import React from "react";
import { Link } from "react-router-dom";

const Title = ({song, link}) => {
  return (
    <li key={song.id}>
      <Link
        to={link}
      >
        <h3>{song.title}</h3>
      </Link>
    </li>
  );
};

export default Title;
