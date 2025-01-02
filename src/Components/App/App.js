import React, {use, useState} from "react"
import styles from './App.module.css'
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Tracklist from "../Tracklist/Tracklist";

function App() {
  const [searchResults, setSearchResults] = useState([
    {
      name: "track 1 - name",
      artist: "track 1 - artist",
      album: "track 1 - album",
      id: 1
    },
    {
      name: "track 2 - name",
      artist: "track 2 - artist",
      album: "track 2 - album",
      id: 2
    }
  ]);
  const [playlistName, setPlaylistName] = useState("Playlist name");
  const [playlistTracks, setPlaylistTracks] = useState([
    {
      name: "playlist 3 - name",
      artist: "playlist 3 - artist",
      album: "playlist 3 - album",
      id: 3
    },
    {
      name: "playlist 4 - name",
      artist: "playlist 4 - artist",
      album: "playlist 4 - album",
      id: 4
    }
  ]);

  function addTrack(track) {
    //'t' represents tracks
    const existingTrack = playlistTracks.find(t => t.id === track.id);
    const newTrack = playlistTracks.concat(track);
    if (existingTrack) {
      console.log("Track already exists");
    } else {
      setPlaylistTracks(newTrack);
    }
  }

  function removeTrack(track) {
    //'t' represents tracks
    const existingTrack = playlistTracks.filter((t) => t.id !== track.id);
    setPlaylistTracks(existingTrack);
  }

  return (
    <div>
      <h1>
        Ja<span className={styles.highlight}>mmm</span>ing
      </h1>
      <div className={styles.App}>
        {/* <!-- Add a SearchBar component --> */}
        <SearchBar />
        
        <div className={styles.AppPlaylist}>
          {/* <!-- Add a SearchResults component --> */}
          <SearchResults userSearchResults={searchResults} onAdd={addTrack} />

          {/* <!-- Add a Playlist component --> */}
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
          />
        </div>
      </div>
    </div>
  );


  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
}

export default App;
