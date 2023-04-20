import style from './Card.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDeleteLeft} from '@fortawesome/free-solid-svg-icons';




export default function Card({name, status, species, gender, origin, image, onClose, id}) {
   return (
      <div className={style.container} style={{ backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', opacity: '0.95' }}>
         <div className={style.headerCard}>
            <span className={style.status}> {status} </span>
            <FontAwesomeIcon onClick={ () => onClose(id) } icon={faDeleteLeft} className={style.btn}/>
         </div>
         <div>

         </div>
         <div className={style.descriptionContainer}>
            <p> {species} </p>
            <p> {gender} </p>
         </div>
         <div>
            <h2 className={style.h2}>{name}</h2>
         </div>
         {/* <h2> {} </h2> */}
         {/* <img src={image} alt='' /> */}
      </div>
   );
}
