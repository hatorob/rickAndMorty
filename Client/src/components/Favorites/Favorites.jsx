import { connect } from "react-redux";
import styles from './Favorites.css';
import Card from "../Card/Card";
import { filterCards, orderCard } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Favorite = (props) => {
    const {myFavorites} = props;
    const [ aux, setAux ] = useState(false);
    const dispatch = useDispatch();

    const handleOrder = (e) => {
        dispatch(orderCard(e.target.value));
        setAux(!aux);
    }
    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value));
    }

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
        <div>
            <h4 className={styles.titleFavorite}>My favorites</h4>
            <select onChange={handleOrder}>
                <option value="A">Ascendete</option>
                <option value="D">Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
                <option value="allCharacters">All Characters</option>
            </select>

            <Carousel responsive={responsive}>
                {
                    myFavorites?.map( (personaje,index) => {
                        return (
                            <Card  onClose={personaje.onClose}
                            key={index} 
                            id={personaje.id}
                            name={personaje.name} 
                            status={personaje.status}
                            species={personaje.species}
                            gender={personaje.gender}
                            origin={personaje.origin?.name}
                            image={personaje.image}/>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites:  state.myFavorites
    }
}



export default connect(
    mapStateToProps,
    null
)(Favorite);