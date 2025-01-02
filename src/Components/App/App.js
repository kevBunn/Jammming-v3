import React, {useState} from "react"
import styles from './App.module.css'
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

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

  return (
    <div>
      <h1>
        Ja<span className={styles.highlight}>mmm</span>ing
      </h1>
      <div className={styles.App}>
        {/* <!-- Add a SearchBar component --> */}
        
        <div className={styles.AppPlaylist}>
          {/* <!-- Add a SearchResults component --> */}
          <SearchResults userSearchResults={searchResults} />

          {/* <!-- Add a Playlist component --> */}
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
