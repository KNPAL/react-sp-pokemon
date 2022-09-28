import './App.css';
import ApplicationHeader from './components/ApplicationHeader';
import FilterSection from './components/FilterSection';
import arrayList from './services/HttpService';
import Appstring from './utiles/Constants';
import Card from './components/Card';
import { useEffect, useState } from 'react';

function App() {
  const title = 'Pokedex';
  const description = 'Search for any Pokemon that exists on the planet';

  const [pokemonList, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getAllPokemon() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon');
      const data = await response.json();
      if (!response.ok) {
        throw new Error('Something went woung')
      }
      setPokemons(data.results);
    } catch (err) {
      setError(err.message)
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getAllPokemon()
  }, []);

  return (
    <div className='container-fluid  app-bg-color'>
      <div className='row m-0'>
        <ApplicationHeader title={title} description={description} ></ApplicationHeader>
      </div>
      <div className='row m-0'>
        <FilterSection></FilterSection>
      </div>
      {!isLoading && <div className='row m-0 py-3'>
        {pokemonList?.map((props, key) => (
          <div className='col-md-2 p-3'>
            <Card
              img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${key + 1}.svg`}
              name={props.name} id={key} />
          </div>
        ))}
      </div>}
      {isLoading && <p>Loading...</p>}
    </div>
  );
}

export default App;
