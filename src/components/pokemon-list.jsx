import {PokemonCard} from "./pokemon-card.jsx";
import './pokemon-list.css'

const data = {
    pokemons: [
        {
            "id": 1,
            "title": "Bulbasaur",
            "cover": "https://img.pokemondb.net/artwork/bulbasaur.jpg",
            "description": "A Grass/Poison type Pokémon with a plant seed on its back that grows from birth. It uses vines to capture prey."
        },
        {
            "id": 4,
            "title": "Charmander",
            "cover": "https://img.pokemondb.net/artwork/charmander.jpg",
            "description": "A Fire type lizard Pokémon whose tail flame indicates its health and mood. It evolves into Charizard."
        },
        {
            "id": 7,
            "title": "Squirtle",
            "cover": "https://img.pokemondb.net/artwork/squirtle.jpg",
            "description": "A Water type turtle Pokémon with a hard shell. It can spray foamy water from its mouth with great accuracy."
        },
        {
            "id": 25,
            "title": "Pikachu",
            "cover": "https://img.pokemondb.net/artwork/pikachu.jpg",
            "description": "An Electric type mouse Pokémon and the franchise mascot. Stores electricity in its red cheek sacs."
        },
        {
            "id": 133,
            "title": "Eevee",
            "cover": "https://img.pokemondb.net/artwork/eevee.jpg",
            "description": "A Normal type Evolution Pokémon with unstable DNA, allowing it to evolve into multiple different forms."
        },
        {
            "id": 94,
            "title": "Gengar",
            "cover": "https://img.pokemondb.net/artwork/gengar.jpg",
            "description": "A Ghost/Poison type Pokémon known as the Shadow Pokémon. It hides in darkness and enjoys playing mischievous tricks on humans."
        },
        {
            "id": 149,
            "title": "Dragonite",
            "cover": "https://img.pokemondb.net/artwork/dragonite.jpg",
            "description": "A Dragon/Flying type Pokémon capable of circling the globe in 16 hours. Despite its power, it shows kindness to humans."
        },
        {
            "id": 150,
            "title": "Mewtwo",
            "cover": "https://img.pokemondb.net/artwork/mewtwo.jpg",
            "description": "A Psychic type Legendary Pokémon created through genetic engineering. Possesses immense psychic powers and high intelligence."
        },
        {
            "id": 448,
            "title": "Lucario",
            "cover": "https://img.pokemondb.net/artwork/lucario.jpg",
            "description": "A Fighting/Steel type Pokémon that can sense aura energy. Known for its honorable nature and mega evolution capabilities."
        },
        {
            "id": 130,
            "title": "Gyarados",
            "cover": "https://img.pokemondb.net/artwork/gyarados.jpg",
            "description": "A Water/Flying type sea serpent Pokémon with destructive rage. Evolves from Magikarp, representing a dramatic transformation."
        }
    ]
}

const PokemonList = () => {
    const pokemons = data.pokemons

    return (
        <div className={'PokemonList'}>
            {pokemons.map(pokemon => {

                return <PokemonCard title={pokemon.title} key={pokemon.id} cover={pokemon.cover} description={pokemon.description}/>
            })}
        </div>
    )
}



export {PokemonList}