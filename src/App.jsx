import {Search} from "./components/search.jsx";
import {Col} from "antd/lib/grid/index.js";
import {PokemonList} from "./components/pokemon-list.jsx";

function App() {

    return (
        <div className="App">
            <Col span={8} offset={8}>
            <Search/>
            </Col>
            <PokemonList/>
        </div>
    )
}

export default App
