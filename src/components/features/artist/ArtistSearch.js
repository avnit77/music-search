import React, {useContext} from 'react';
import { Artists } from './Artists';
import { ResultsContext } from '../../wrappers/ResultsContext'

export const ArtistSearch = () => {

  const {setSearchTerm, artists} = useContext(ResultsContext)  

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
    <div className={!artists.length ? "noResults" : "search"}>
        <input type="text" placeholder="Search By Artist" onChange={handleChange}/>
      </div>
      <Artists artists={artists} />
    </>
  );
};

