import { ADD_FAV, REMOVE_FAV, FITLER ,ORDER } from "./actions-type"; 

export const addFav = (personaje) => {
    return { type: ADD_FAV , payload: personaje }
}

export const removeFav = (id) => {
    return { type: REMOVE_FAV, payload: id }
}

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

