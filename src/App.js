import './App.css';
import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import Navbar from './components/Navbar/Navbar';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import characters, { Rick } from './data.js';

const containerNavbar = {
   backgroundColor: 'rgba(134,15,47,0.7)',
   height: '100px',
   display: 'grid',
   gridTemplateRows: 'repeat(2,1fr)',
}


function App() {
   return (
      <div className='App'>
         <div style={containerNavbar}>
            <Navbar />
            <SearchBar onSearch={(characterID) => window.alert(characterID)} />
         </div>
         <Cards characters={characters} onClose={() => window.alert('Emulamos que se cierra la card')} />
      </div>
   );
}

export default App;
