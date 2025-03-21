import {useEffect} from "react"
import {getPokemons} from "./api/index.js"
import {useDispatch, useSelector} from "react-redux";
import {setPokemons} from "./actions/index.js"
import {Searcher} from "./components/search.jsx"
import {Col} from "antd/lib/grid/index.js"
import {PokemonList} from "./components/pokemon-list.jsx"
import {SVGComponent} from "./static/logo-pokemon.jsx"

function App() {
    const pokemons = useSelector(state => state.pokemons)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const {data} = await getPokemons()
                dispatch(setPokemons(data.results))
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


export default App
