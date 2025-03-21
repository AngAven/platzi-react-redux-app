// Actions creators
import {SET_POKEMONS} from "./types.js"

const setPokemons = (payload) => ({
    type: SET_POKEMONS,
    payload,
})

export {setPokemons}