import logo from './assets/logo.svg';
import './App.css';
import { useState } from 'react';
import { fetchTracks } from './fetchTracks';
import { useQuery } from '@tanstack/react-query';
import { SavedTrack } from 'spotify-types';

const AlbumCover = (track: SavedTrack) => {
  const src = track.track.album.images[0]?.url;
  return <img src={src} style={{ width: 400, height: 400 }} />;
};
const App = () => {
  const [trackIndex, setTrackIndex] = useState(0);
  const goToNextTrack = () => {
    setTrackIndex(trackIndex + 1);
  };
  const [trackUrls, setTrackUrls] = useState([]);
  const { data: tracks } = useQuery({
    queryKey: ['tracks'],
    queryFn: fetchTracks,
  });
  console.log(tracks);

  return (
    <div className="App">
      <audio src={trackUrls[trackIndex]} autoPlay controls />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Bienvenue sur le blind test</h1>
      </header>
      <div className="App-images">
        <p>Il va falloir modifier le code pour faire un vrai blind test !</p>

        <p>{tracks[1]?.track.name}</p>
        <button onClick={goToNextTrack}>AAAAAAAAAAAAAAA</button>
      </div>
      <div className="App-buttons"></div>
    </div>
  );
};

export default App;
