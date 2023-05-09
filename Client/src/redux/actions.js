import { ADD_FAV, REMOVE_FAV, FITLER ,ORDER } from "./actions-type"; 
import axios from "axios";

//antes del backend
/* export const addFav = (personaje) => {
    return { type: ADD_FAV , payload: personaje }
} */

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
       axios.post(endpoint, character).then(({ data }) => {
          return dispatch({
             type: ADD_FAV,
             payload: data,
          });
       });
    };
 };

 //antes del backend
/* export const removeFav = (id) => {
    return { type: REMOVE_FAV, payload: id }
} */

export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: REMOVE_FAV,
             payload: data,
       });
       });
    };
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

