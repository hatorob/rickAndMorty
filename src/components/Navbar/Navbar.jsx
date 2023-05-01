import SearchBar from '../SearchBar/SearchBar';
import style from './Navbar.module.css';
import { NavLink, useNavigate } from 'react-router-dom';



const Navbar = ( {onSearch, onSearchRandom, logout} ) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/home');
    } 

    return (
        <div className={style.containerNavbar}>
            <div>
                <h1 onClick={handleClick} className={style.title}>Rick and Morty</h1> 
            </div>
            <div className={style.containerNav}>
                <div>
                    <NavLink to='/home' className={ ({isActive}) =>  (isActive ? style.active : undefined) }>
                        <button className={style.btn}>Home</button>
                    </NavLink>
                    <NavLink to='/about' className={ ({isActive}) =>  (isActive ? style.active : undefined) }>
                        <button className={style.btn}>About</button>
                    </NavLink>
                    <NavLink to='/favorites' className={ ({isActive}) =>  (isActive ? style.active : undefined) }>
                        <button className={style.btn}>Favorites</button>
                    </NavLink>
                </div>
                {/* //!Le pasamos onSearch que es una prop que viene del padre APP a SearchBar */}
                <SearchBar onSearch={onSearch} onSearchRandom={onSearchRandom} />
                <button className={style.btn} onClick={logout}>Logout</button>
            </div>
        </div>
    )
}

export default Navbar;