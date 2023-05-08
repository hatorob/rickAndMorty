import Card from '../Card/Card';
import styles from './Cards.module.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Cards({characters, onClose}) {
   //const personajes = characters;
   //console.log(personajes);
   const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
  };

   return (
      <div className={styles.container}>
         <Carousel responsive={responsive}>
            {
               characters.map( (personaje) => {
                  return (
                     <Card onClose={onClose}
                           key={personaje.id} 
                           id={personaje.id}
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
         </Carousel>
      </div>
   )
}
