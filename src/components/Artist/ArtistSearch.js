import React, { useState } from 'react';
import { useArtists } from '../../hooks/useArtists';
import { Artists } from './Artists';

export const ArtistSearch = () => {
  const { handleSearch, searchTerm, setSearchTerm, artists } = useArtists();
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  
  return (
    <>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="artist" value={searchTerm} onChange={handleChange}/>
        <button>SEARCH</button>
      </form>
      <Artists artists={artists} />
    </>
  );
};

