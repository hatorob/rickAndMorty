import style from './SearchBar.module.css';

export default function SearchBar(props) {
   const { onSearch } = props;
   return (
      <div className={style.container}>
         <input type='search' />
         <span className={style.p} onClick={ onSearch }>Agregar</span>
      </div>
   );
}
