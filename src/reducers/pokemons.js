import {SET_POKEMONS} from "../actions/types.js";

const initialState = {
    pokemons: [],
}

export const pokemonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMONS:
            return {...state, pokemons: action.payload}
        default:
            return state
    }
}