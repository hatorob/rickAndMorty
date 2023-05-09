import { ADD_FAV, REMOVE_FAV, FITLER, ORDER } from "./actions-type";

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState,{type,payload}) => {
    switch (type) {
        case ADD_FAV:
            return { ...state, myFavorites: payload, allCharacters: payload };
            // antes del backend
            /* const copyAllCharacters = [...state.allCharacters, payload];
            return {
                ...state,
                myFavorites: copyAllCharacters,
                allCharacters: [...copyAllCharacters]
            } */
        case REMOVE_FAV:
            return { ...state, myFavorites: payload, allCharacters: payload };
            // antes del backend
            /* return {
                ...state,
                myFavorites: state.myFavorites.filter( personaje => personaje.id !== Number(payload))
            } */
        case FITLER:
            let copyAllCharactersFilter;
            if(payload === "allCharacters") {
                copyAllCharactersFilter = state.allCharacters;
            } else {
                copyAllCharactersFilter = state.allCharacters.filter( personaje => personaje.gender === payload);
            }
            return {
                ...state,
                myFavorites: copyAllCharactersFilter
            }
        case ORDER:
            const order = state.allCharacters.sort( (a,b) => {
                if(payload === 'A') {
                    if(a.id < b.id) return -1;
                    if(b.id < a.id) return 1;
                    return 0
                } else {
                    if(a.id < b.id) return 1;
                    if(b.id < a.id) return -1;
                    return 0
                }
            })
            return {
                ...state,
                myFavorites: order
            }
        default:
            return {...state}
    }
}

export default reducer;