import { useState, useEffect } from 'react';
import { getReleases } from '../services/musicBrainzApi';

export const useReleases = (id) => {
  const [releases, setReleases] = useState([]);


  useEffect(() => {
    getReleases(id)
      .then(releases => {
        console.log(releases);
        setReleases(releases.releases);
      });
  }, []);

  return { releases, setReleases };
};
