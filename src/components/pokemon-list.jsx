import {PokemonCard} from "./pokemon-card.jsx";
import './pokemon-list.css'

const PokemonList = ({pokemons}) => {
    return (
        <div className={'PokemonList'}>
            {pokemons.map(pokemon => {

                return <PokemonCard title={pokemon.name} key={pokemon.name} cover={pokemon?.cover} description={pokemon?.description}/>
            })}
        </div>
    )
}



export {PokemonList}