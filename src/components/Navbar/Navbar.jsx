import SearchBar from '../SearchBar/SearchBar';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';



const Navbar = ( {onSearch, onSearchRandom} ) => {
    return (
        <div className={style.containerNavbar}>
            <div>
                <h1>Rick and Morty</h1> 
            </div>
            <div className={style.containerNav}>
                <div>
                    <NavLink to='/home' className={ ({isActive}) =>  (isActive ? style.active : undefined) }>
                        <button className={style.btn}>Home</button>
                    </NavLink>
                    <NavLink to='/about' className={ ({isActive}) =>  (isActive ? style.active : undefined) }>
                        <button className={style.btn}>About</button>
                    </NavLink>
                </div>
                {/* //!Le pasamos onSearch que es una prop que viene del padre APP a SearchBar */}
                <SearchBar onSearch={onSearch} onSearchRandom={onSearchRandom} />
            </div>
        </div>
    )
}

export default Navbar;