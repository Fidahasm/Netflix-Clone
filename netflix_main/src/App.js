import '.'
import Banner from './components/Banner/Banner';
import FilmList from './components/FilmList/FilmList';
import NavBar from './components/NavBar/NavBar';
import {TrendingUrl,ActionUrl,ComedyUrl} from './constant'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <FilmList title="Popular on Netflix" url={TrendingUrl}/>
      <FilmList title="Action Dramas" url={ActionUrl}/>
      <FilmList title="Comedy Movies" url={ComedyUrl}/>

    </div>
  );
}

export default App;
