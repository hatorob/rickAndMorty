import { useState } from 'react';
import style from './SearchBar.module.css';

export default function SearchBar(props) {
   const { onSearch,onSearchRandom } = props;

   //!Creamos el hook con el estado local id, donde va a recibir el id através del input usando onChange por medio de la función handleChange la cual actualiza el id en tiempo real escuchando al input
   const [ id, setId ] = useState('');

   const handleChange = (e) => {
      setId(e.target.value)
   }

   const handleClick = () => {
      onSearch(id);
      setId('');
   }

   const handleEnter = (e) => {
      if(e.key === "Enter") {
         onSearch(id);
         setId('');
      }
   }
   //console.log("id",id);
   return (
      <div className={style.container}>
         <input type='search' onChange={handleChange} value={id} onKeyUp={handleEnter}/>
         {/* //! le pasamos onSearch al span que actua como boton en onClick para que agregue las cards */}
         {/*  //! onClick={ () => onSearch(id) } -> debe ser un arrayFunction para poder pasarle a onSearch el id como parametro */}
         <span className={style.p} onClick={ handleClick }>Agregar</span>
         <span className={style.p} onClick={ onSearchRandom }>Aleatorio</span>
      </div>
   );
}
