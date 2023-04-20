import './App.css';
//import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import Navbar from './components/Navbar/Navbar';
/* import characters, { Rick } from './data.js'; */ //se elimina
import { useState } from 'react';
import axios from 'axios';


function App() {

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

   //|| personaje.id !== Number(id)

   const onSearch = (id) => {
      //console.log("id",id);
      //id = 1;
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
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
   

   return (
      <div className='App'>
         <div>
            {/* //!a nuestro Navbar component le estamos pasando la función onSeacth, para que esta se la pase a SearchBar y esta desde el botón vaya agregando la carta */}
            <Navbar onSearch={onSearch} onSearchRandom={onSearchRandom} />
         </div>
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}

export default App;
