import React, { useContext } from 'react';

const Lyrics = ({artist, lyrics}) => {


  return (
    <main>
      <h4>by {artist ? artist : null}</h4>
      <pre>{lyrics ? lyrics : <p className="is-flex is-flex-direction-column">Can't find any words to this song <span>la la la </span><span>la la</span> <span>la</span></p>}</pre>
    </main>
  );
};

export default Lyrics;

