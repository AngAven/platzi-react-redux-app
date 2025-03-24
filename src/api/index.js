import axios from "axios";

const getPokemons = () => {
    return axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=151')
        .then((response) => response)
        .catch(error => console.log(error))
}

export {getPokemons}