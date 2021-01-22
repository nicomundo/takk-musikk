import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
  setLibraryStatus,
}) => {
  // secret change
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""} `}>
      <div className="library-nav">
        <h2>Library</h2>
        <button onClick={() => setLibraryStatus(!libraryStatus)}>Exit</button>
      </div>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            isPlaying={isPlaying}
            songs={songs}
            song={song}
            setCurrentSong={setCurrentSong}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};
export default Library;
