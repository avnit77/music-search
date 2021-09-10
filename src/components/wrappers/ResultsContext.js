import React, { createContext, useState, useEffect, useMemo } from "react";
import withConfig from "./withConfig";
import { useLocation, useParams } from "react-router-dom";

const ResultsContext = createContext(null);

const ResultsContextProvider = ({ config, children }) => {
  const { API_URL, LYRICS_URL } = config;
  const [artists, setArtists] = useState([]);
  const [releases, setReleases] = useState([]);
  const [titles, setTitles] = useState([]);
  const [lyrics, setLyrics] = useState(null);
  const [loading, setLoading] = useState(false);

  const { artist, release, title } = useParams();



  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();
  const searchTerm = query.get("artist");

  const artistObject = useMemo(() => {
    return artist && artists.length
      ? artists.filter((x) => x.name === artist.replace("%2F", "/"))[0]
      : null;
  }, [artist]);

  const releaseObject = useMemo(() => {
    return release && releases.length
      ? releases.filter((x) => x.title === release.replace("%2F", "/"))[0]
      : null;
  }, [release]);

  // console.log(params, location, "params, location")

  useEffect(() => {
    if (!searchTerm || searchTerm === "") {
      //do this qith query params?
      setArtists([]);
    }
    if (searchTerm && searchTerm !== "") {
      setLoading(true);
      fetch(`${API_URL}artist?query=${searchTerm}&fmt=json&limit=25`)
        .then(async (response) => {
          if (response.ok) {
            return response.json();
          } else {
            const error = await response.text();
            throw new Error(error);
          }
        })
        .then((response) => {
          setArtists(response.artists);
        })
        .catch((e) => {
          console.log(
            "Workflow Landing Page:" +
              (e.message ? e.message : "Unable to connect to the server")
          );
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [API_URL, searchTerm]);

  useEffect(() => {
    if (artistObject && artistObject.id) {
      setLoading(true);
      fetch(`${API_URL}release?artist=${artistObject.id}&fmt=json`)
        .then(async (response) => {
          if (response.ok) {
            return response.json();
          } else {
            const error = await response.text();
            throw new Error(error);
          }
        })
        .then((response) => {
          setReleases(response.releases);
        })
        .catch((e) => {
          console.log(
            "Workflow Landing Page:" +
              (e.message ? e.message : "Unable to connect to the server")
          );
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [API_URL, artist, artistObject]);

  useEffect(() => {
    if (releaseObject && releaseObject.id) {
      setLoading(true);
      fetch(`${API_URL}recording?release=${releaseObject.id}&fmt=json`)
        .then(async (response) => {
          if (response.ok) {
            return response.json();
          } else {
            const error = await response.text();
            throw new Error(error);
          }
        })
        .then((response) => {
          setTitles(response.recordings);
        })
        .catch((e) => {
          console.log(
            "Workflow Landing Page:" +
              (e.message ? e.message : "Unable to connect to the server")
          );
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [API_URL, releaseObject]);

  useEffect(() => {
    if (title && artist) {
      setLoading(true);
      fetch(`${LYRICS_URL}${artist}/${title}`)
        .then(async (response) => {
          if (response.ok) {
            return response.json();
          } else {
            const error = await response.text();
            throw new Error(error);
          }
        })
        .then((response) => {
          setLyrics(response.lyrics);
        })
        .catch((e) => {
          console.log(
            "Workflow Landing Page:" +
              (e.message ? e.message : "Unable to connect to the server")
          );
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [API_URL, title]);

  return (
    <ResultsContext.Provider
      value={{
        loading,
        searchTerm,
        artists,
        releases,
        titles,
        lyrics,
        artist,
        release,
        title,
      }}
    >
      {children}
    </ResultsContext.Provider>
  );
};

export { ResultsContext };
export default withConfig(ResultsContextProvider);
