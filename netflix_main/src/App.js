import '.'
import Banner from './components/Banner/Banner';
import FilmList from './components/FilmList/FilmList';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <FilmList />
      <FilmList />
    </div>
  );
}

export default App;
