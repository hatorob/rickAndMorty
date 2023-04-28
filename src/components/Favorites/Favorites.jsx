import { connect } from "react-redux";
import Card from "../Card/Card";

const Favorite = (props) => {
    const {myFavorites} = props;
    return (
        <div>
            <h2>My favorites</h2>
            {
                myFavorites?.map( personaje => {
                    return (
                        <Card  onClose={personaje.onClose}
                        key={personaje.id} 
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