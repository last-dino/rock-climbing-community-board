import './App.css';
import LocationCard from './components/LocationCard.jsx';
import locationData from './data/locations';

const App = () => {

  return (
    <div className="App">
      <header className="header">
        <h1>Places for Rock Climbing in the USA</h1>
        <p>Adventure starts where the trail ends...</p>
      </header>

      <div className="location-grid">
        {locationData.map((location) => (
          <LocationCard location={location} />
        ))}
      </div>

      <footer className="footer">
        <p>Where fear meets freedom, climb on.</p>
      </footer>
    </div>
  )
}

export default App
