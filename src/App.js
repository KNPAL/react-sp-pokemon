import './App.css';
import ApplicationHeader from './components/ApplicationHeader';
import FilterSection from './components/FilterSection';
import PokemonList from './components/PokemonList';


function App() {
  const title = 'Pokedex';
  const description = 'Search for any Pokemon that exists on the planet';

  return (
    <div className='container-fluid  app-bg-color'>
      <div className='row m-0'>
        <ApplicationHeader title={title} description={description} />
      </div>
      <div className='row m-0'>
        <FilterSection />
      </div>
      <div className='row m-0'>
        <PokemonList />
      </div>
    </div>
  );
}

export default App;
