import React, { useState, useEffect } from 'react';

import SongForm from './SongForm.jsx';

function SongList() {
  // Declare a new state variable, which we'll call "count"
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    console.log('use effect');
  });

  const addSong = (newSong) => setSongs(state => [...state, newSong]);

  return (
    <div>
      <SongForm onClick={addSong}/>
    </div>
  );
}


export default SongList;