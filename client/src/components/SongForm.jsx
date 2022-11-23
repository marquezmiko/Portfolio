import React from 'react';
import useSongInput from "./useSongInput.js"

function SongForm(props) {
  const song = useSongInput("");
  const artist = useSongInput("");
  const genre = useSongInput("");

  const submitForm = (e) => {
    e.preventDefault();
    console.log('song', song.value);
    console.log('artist', artist.value);
    console.log('genre', genre.value);
    props.onClick(song.value);
  }

  return (
    <form className="song-form container" onSubmit={submitForm}>
      <input placeholder="Song" {...song}/>
      <input placeholder="Artist" {...artist}/>
      <input placeholder="Genre" {...genre}/>
      <button type="submit">Add</button>
    </form>
  );
}


export default SongForm;