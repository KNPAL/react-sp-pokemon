import './App.css';
import ApplicationHeader from './components/ApplicationHeader';
import FilterSection from './components/FilterSection';

import Card from './components/Card';

function App() {
  const title ='Pokedex';
  const description = 'Search for any Pokemon that exists on the planet';

  return (
    <div className='container-fluid  app-bg-color'>
      <div className='row m-0'>
      <ApplicationHeader title={title} description={description} ></ApplicationHeader>
      </div>
      <div className='row m-0'>
      <FilterSection></FilterSection>
      </div>
     <div className='row m-0'>
      <div className='col-md-2 p-3'>
      <Card img='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg' name='spal' id='001' ></Card>
      
      </div>
      <div className='col-md-2 p-3'>
      <Card img='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg' name='spal' id='002' ></Card>
      
      </div>
      <div className='col-md-2 p-3'>
      <Card img='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg' name='spal' id='001' ></Card>
      
      </div>
      <div className='col-md-2 p-3'>
      <Card img='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg' name='spal' id='001' ></Card>
      
      </div>
      <div className='col-md-2 p-3'>
      <Card img='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg' name='spal' id='001' ></Card>
      
      </div>
      <div className='col-md-2 p-3'>
      <Card img='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/17.svg' name='spal' id='001' ></Card>
      
      </div>
      <div className='col-md-2 p-3'>
      <Card img='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/11.svg' name='spal' id='001' ></Card>
      
      </div>
      
     </div>
      
      
    </div>
  );
}

export default App;
