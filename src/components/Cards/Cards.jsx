import Card from '../Card/Card';
import styles from './Cards.module.css';

export default function Cards({characters, onClose}) {
   //const personajes = characters;
   //console.log(personajes);
   return (
      <div className={styles.container}>
         {
            characters.map( (personaje) => {
               return (
                  <Card onClose={onClose}
                        key={personaje.id} 
                        name={personaje.name} 
                        status={personaje.status}
                        species={personaje.species}
                        gender={personaje.gender}
                        origin={personaje.origin}
                        image={personaje.image}
                  />
               )
            })
         }
      </div>
   )
}
