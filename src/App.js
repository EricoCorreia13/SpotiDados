import './App.css';
import Top100AllArtists from './Components/Top100AllArtists';
import EstacoesDoAno from './Components/EstacoesDoAno';
import HorasdoDia from './Components/HorasdoDia';
import UserDifferentSongs from './Components/UserDifferentSongs';
import UserMediaDiaria from './Components/UserMediaDiaria';
import UserTotalPlayTime from './Components/UserTotalPlayTime';
import UserTotalReps from './Components/UserTotalReps';


function App() {

  return(
    <div>
      <UserTotalReps />
      <UserDifferentSongs />
      <UserTotalPlayTime />
      <UserMediaDiaria />
      <HorasdoDia />
      <EstacoesDoAno />
      <Top100AllArtists />
    </div>
  );
}

export default App;