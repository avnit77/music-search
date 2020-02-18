import { useState, useEffect } from 'react';
import { getArtist } from '../services/musicBrainzApi';

export const useArtists = () => {
  const [artists, setArtists] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    if(searchTerm !== '') {
      getArtist(searchTerm)
        .then(artists => {
          setArtists([]);
          return artists;
        })
        .then(artists => {
          setArtists(artists.artists);
        });
    }
  }, [searchTerm]);

  const handleSearch = (event) => {
    event.preventDefault();
    
    getArtist(searchTerm)
      .then(artists => {
        setArtists([]);
        return artists;
      })
      .then(artists => {
        setArtists(artists.artists);
      });
  };

  return { artists, handleSearch, searchTerm, setSearchTerm };
};
