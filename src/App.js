import './App.css';
import Top100 from './Components/Top100';
// Adjusted import statement
import LandingPage from './Components/LandingPage';
import Artist from './Components/Artist';

function App() {
  return (
    <div className='flex justify-center bg-zinc-800 w-screen h-screen p-10'>
      <LandingPage />
    </div>
  );
}

export default App;