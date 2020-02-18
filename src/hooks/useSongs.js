import { useState, useEffect } from 'react';
import { getSongs } from '../services/musicBrainzApi';

export const useSongs = (id) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getSongs(id)
      .then(songs => {
        setSongs([]);
        return songs;
      })
      .then(songs => {
        setSongs(songs.recordings);
      });
  }, [id]);

  return { songs, setSongs };
};
