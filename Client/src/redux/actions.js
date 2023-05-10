import { ADD_FAV, REMOVE_FAV, FITLER ,ORDER } from "./actions-type"; 
import axios from "axios";

//antes del backend
/* export const addFav = (personaje) => {
    return { type: ADD_FAV , payload: personaje }
} */

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint, character)
            if(!data.length) throw new Error("No hay favoritos")
            return dispatch({
               type: ADD_FAV,
               payload: data,
            });
        } catch (error) {
            console.log(error.message);
        }
    }
 };

 //antes del backend
/* export const removeFav = (id) => {
    return { type: REMOVE_FAV, payload: id }
} */

export const removeFav = (id) => {
    const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(endpoint);
            return dispatch({
               type: REMOVE_FAV,
               payload: data,
            })
        } catch (error) {
            console.log(error.message);
        }  
    }
 };

export const filterCards = (gender) => {
    return {
        type: FITLER,
        payload: gender
    }
}

export const orderCard = (order) => {
    return {
        type: ORDER,
        payload: order
    }
}

