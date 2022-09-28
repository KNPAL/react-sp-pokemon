import './App.css';
import ApplicationHeader from './components/ApplicationHeader';
import FilterSection from './components/FilterSection';
import getAllUsers from './services/HttpService';

function App() {
  const title ='Pokedex';
  const description = 'Search for any Pokemon that exists on the planet';

  return (
    <div className='container-fluid  app-bg-color'>
      <ApplicationHeader title={title} description={description} ></ApplicationHeader>
      <FilterSection></FilterSection>
    </div>
  );
}

export default App;
