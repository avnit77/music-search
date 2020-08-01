import React, { useState } from 'react';
import { useArtists } from '../../hooks/useArtists';
import { Artists } from './Artists';
import Header from '../common/Header';

export const ArtistSearch = () => {
  const { handleSearch, searchTerm, setSearchTerm, artists } = useArtists();
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="artist" value={searchTerm} onChange={handleChange}/>
        <button>Search By Artist</button>
      </form>
      <Artists artists={artists} />
    </>
  );
};

