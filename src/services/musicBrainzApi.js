const API = 'http://musicbrainz.org/ws/2/'

export const getArtist = (name) => {
  return fetch(`${API}artist?query=${name}&fmt=json&limit=25`)
    .then(res => res.json());
};

export const getReleases = (artistId) => {
  return fetch(`${API}release?artist=${artistId}&fmt=json`)
    .then(res => res.json());
};

export const getSongs = (releaseId) => {
  return fetch(`${API}recording?release=${releaseId}&fmt=json`)
    .then(res => res.json());
};

export const getLyrics = (artist, title) => {
  return fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    .then(res => res.json());
};
