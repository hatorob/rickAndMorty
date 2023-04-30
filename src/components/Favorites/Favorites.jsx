import { connect } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCard } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

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

    return (
        <div>
            <h2>My favorites</h2>
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