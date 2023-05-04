import './App.css';
//import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorite from './components/Favorites/Favorites';
import Error404 from './components/404Error/Error404';

/* import characters, { Rick } from './data.js'; */ //se elimina
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';



function App() {

   let location = useLocation();
   let navigate = useNavigate();

   const [access, setAccess] = useState(false);
   //const [accessError, setAccessError] = useState(false);
   const EMAIL = "alejotoro94@hotmail.com";
   const PASSWORD = "123porti";

   
   const [characters,setCharacters] = useState([]); //!Creamos un hook se useState con un estado local llamado characters, donde se agregaran los personajes
   //!Creamos una función onSearch, la cual actualizará el hook y agregará un nuevo personaje en characters
   /*  //!Comentamos esto ya que era un ejemplo agregando un personaje por default para probar que funcionara el boton de agregar
   const onSearch = (id) => {
      setCharacters([
                     ...characters,
                     {
                        id: 1,
                        name: 'Rick Sanchez',
                        status: 'Alive',
                        species: 'Human',
                        gender: 'Male',
                        origin: {
                           name: 'Earth (C-137)',
                           url: 'https://rickandmortyapi.com/api/location/1',
                        },
                        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
                     }
                   ])
   }
   //! lo dejamos comentando para entender lo que se esta haciendo!
 */

   const onSearch = (id) => {
      //console.log("id",id);
      //id = 1;
      //http://localhost:3001/rickandmorty/character/${id}
      //https://rickandmortyapi.com/api/character/${id} --- Api
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
         if (data.name) {
            let repeat = characters.some( obj => obj.id === Number(id));
            (characters.length === 0 || !repeat) ? setCharacters((oldChars) => [...oldChars, data]) : alert('Id repetido')
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onSearchRandom = () => {
      let id = Math.ceil(Math.random() * 826);
      onSearch(id);
   }

   //!Creamos la función onClose para pasarle el id del personaje a quitar desde nuestro hook characters agregados
   const onClose = (id) => {
      
      setCharacters([
         ...characters.filter( personajeEliminar => personajeEliminar.id !== Number(id))
      ])
   }

   const login = (userData) => {
      if(userData.email === EMAIL && userData.password === PASSWORD) {
         localStorage.setItem('access',true);
         setAccess(true);
         navigate('/home');
      }
   }
   const logout = () => {
         localStorage.removeItem('access');
         setAccess(false);
         navigate('/');
   }
   
   useEffect( () => {
      const accessLocalStorage = localStorage.getItem('access');
      if(accessLocalStorage) {
         setAccess(true);
      } else {
         !access && navigate('/')
      }

   }, [access, navigate])

   return (
      <div className='App'>
         <div>
            {
               (location.pathname === '/') ? <Form login={login} /> : null
            }
            {/* <Navbar onSearch={onSearch} onSearchRandom={onSearchRandom} /> */}
            {/* //!a nuestro Navbar component le estamos pasando la función onSeacth, para que esta se la pase a SearchBar y esta desde el botón vaya agregando la carta */}
            <Routes>
               {/* <Route path='/' element={ <Form /> } /> */}
               <Route path='/home' element={ 
                  <>
                     <Navbar onSearch={onSearch} onSearchRandom={onSearchRandom} logout={logout}/>
                     <Cards characters={characters} onClose={onClose} /> 
                  </>
               }/>
               <Route path='/about' element={ 
                  <> 
                     <Navbar onSearch={onSearch} onSearchRandom={onSearchRandom} logout={logout}/>
                     <About /> 
                  </> 
               }/>
               <Route path='/detail/:id' element={ 
                  <>
                     <Navbar onSearch={onSearch} onSearchRandom={onSearchRandom} logout={logout}/>
                     <Detail /> 
                  </>
               }/>
               <Route path='/favorites' element={ 
                  <>
                     <Navbar onSearch={onSearch} onSearchRandom={onSearchRandom} logout={logout}/>
                     <Favorite /> 
                  </>
               }/>
               <Route path='*' element={ <Error404 /> } />
            </Routes>

         </div>
      </div>
   );
}

export default App;
