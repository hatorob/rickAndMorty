import SearchBar from '../SearchBar/SearchBar';
import style from './Navbar.module.css';

const containerNavbar = {
    backgroundColor: 'rgba(134,15,47,0.7)',
    height: '100px',
    display: 'grid',
    gridTemplateRows: 'repeat(2,1fr)',
 }

const Navbar = ( {onSearch, onSearchRandom} ) => {
    return (
        <div style={containerNavbar}>
            <div>
                <h1>Rick and Morty</h1> 
            </div>
            {/* //!Le pasamos onSearch que es una prop que viene del padre APP a SearchBar */}
            <SearchBar onSearch={onSearch} onSearchRandom={onSearchRandom} />
        </div>
    )
}

export default Navbar;