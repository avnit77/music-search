import React, { useContext } from "react";
import { ResultsContext } from "../wrappers/ResultsContext";
import { useHistory } from "react-router-dom";

const ArtistSearch = () => {
  const history = useHistory();

  const { artists, artist } = useContext(ResultsContext);

  const handleChange = (event) => {
    event.preventDefault();

    history.push({
      search: `?artist=${event.target.value}`,
    });
  };

  return (
    <>
      <div
        className={
          artist !== "undefined"
            ? !artist && !artists.length
              ? "noResults"
              : "hidden"
            : "search"
        }
      >
        <input
          type="text"
          placeholder="Search By Artist"
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default ArtistSearch;
