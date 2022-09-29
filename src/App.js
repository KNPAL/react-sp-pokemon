import './App.css';
import ApplicationHeader from './components/ApplicationHeader';
import FilterSection from './components/FilterSection';
import PokemonList from './components/PokemonList';
import {Appstring} from './utiles/Constants';


function App() {

  const filterInput = (finput) =>{
    console.log(finput)
  }

  return (
    <div className='container-fluid  app-bg-color'>
      <div className='row m-0'>
        <ApplicationHeader title={Appstring.title} description={Appstring.description} />
      </div>
      <div className='row m-0'>
        <FilterSection onFilter={filterInput}/>
      </div>
      <div className='row m-0'>
        <PokemonList />
      </div>
    </div>
  );
}

export default App;
