import style from './Card.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDeleteLeft} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions';
import { useState, useEffect } from 'react';

//<Link to={`/detail/${id}`}>
//</Link>


function Card(props) {
   const { name, status, species, gender, origin, image, onClose, id, addFav, removeFav, myFavorites } = props;


   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite = () => {
      /* isFav ? removeFav(id) : addFav(props);
      setIsFav(!isFav); */
      if(isFav) {
         setIsFav(false);
         removeFav(id);
      } else {
         setIsFav(true);
         addFav(props);
      }
   }

 
   return (
      <div className={style.container} style={{ backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', opacity: '0.95' }}>
            <div className={style.headerCard}>
            {
               isFav ? (
                  <button onClick={handleFavorite}>❤️</button>
               ) : (
                  <button onClick={handleFavorite}>🤍</button>
               )
            }
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
            <Link to={`/detail/${id}`} className={style.link}>
                  <h2 className={style.h2}>{name}</h2>
            </Link>
            </div>
            {/* <h2> {} </h2> */}
            {/* <img src={image} alt='' /> */}
         </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (personaje) => dispatch(addFav(personaje)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}


export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);
