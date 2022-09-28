import './App.css';
import ApplicationHeader from './components/ApplicationHeader';
import FilterSection from './components/FilterSection';

function App() {
  return (
    <div className='container-fluid'>
      <ApplicationHeader></ApplicationHeader>
      <FilterSection></FilterSection>
    </div>
  );
}

export default App;
