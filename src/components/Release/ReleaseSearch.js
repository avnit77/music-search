import React from 'react';
import { useReleases } from '../../hooks/useReleases';
import Releases from './Releases';

export const ReleaseSearch = () => {
  const { handleSearch, searchTerm, setSearchTerm, releases } = useReleases();
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSearch}>
          <input type="text" placeholder="release" value={searchTerm} onChange={handleChange}/>
          <button>Search Releases</button>
        </form>
      </div>
      <Releases releases={releases} />
    </>
  );
};

