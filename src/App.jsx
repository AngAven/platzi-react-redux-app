import {useEffect, useState} from "react"
import {connect} from "react-redux"
import {setPokemons as setPokemonsActions} from "./actions/index.js";
import {getPokemons} from "./api/index.js"

import {Searcher} from "./components/search.jsx"
import {Col} from "antd/lib/grid/index.js"
import {PokemonList} from "./components/pokemon-list.jsx"
import {SVGComponent} from "./static/logo-pokemon.jsx"

function App({pokemons, setPokemon}) {
    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const {data} = await getPokemons()
                setPokemon(data.results)
            } catch (error) {
                console.log(error)
            }
        }

        fetchPokemons().then()
    }, [])

    return (
        <div className="App">
            <div className={'mb-6'}>
                <Col span={4} offset={10}>
                    <SVGComponent/>
                </Col>
            </div>
            <Col span={8} offset={8}>
                <Searcher/>
            </Col>
            <PokemonList pokemons={pokemons}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    pokemons: state.pokemons,
})
const mapDispatchToProps = (dispatch) => ({
    setPokemon: (payload) => dispatch(setPokemonsActions(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
