import React, { createContext, useState, useEffect } from "react";
import withConfig from "./withConfig";
import { useLocation, useParams } from 'react-router-dom'

const ResultsContext = createContext(null);

const ResultsContextProvider = ({ config, children }) => {
  const { API_URL } = config;
  const [searchTerm, setSearchTerm] = useState('')
  const [artists, setArtists] = useState([]);
  const [releases, setReleases] = useState([]);
  const [releaseId, setReleaseId] = useState(''); //do this like dashboard later
  const [songs, setSongs] = useState([]);
  const [lyrics, setLyrics] = useState(null);
  const [loading, setLoading] = useState(false);

  const {
    artist, 
    artistId
} = useParams()

console.log(useLocation(), "params")

console.log(artist, artistId, "artist")


  useEffect(() => {
    if(searchTerm === ''){ //do this qith query params? 
        setArtists([])
    }
    if(searchTerm !== '') {
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
        setArtists(response.artists)
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
    if(releaseId !== '') {
    setLoading(true);
    fetch(`${API_URL}recording?release=${releaseId}&fmt=json`)
      .then(async (response) => {
        if (response.ok) {
          return response.json();
        } else {
          const error = await response.text();
          throw new Error(error);
        }
      })
      .then((response) => {
        setSongs(response.recordings)
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

    
  }, [API_URL, releaseId]);


  return (
    <ResultsContext.Provider
      value={{
        loading,
        searchTerm,
        setSearchTerm,
        artists, 
        setReleaseId, 
        songs
      }}
    >
      {children}
    </ResultsContext.Provider>
  );
};

export { ResultsContext };
export default withConfig(ResultsContextProvider);
