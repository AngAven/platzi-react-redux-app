import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {pokemonsReducer} from "./reducers/pokemons.js"
import {Provider} from 'react-redux'
import {legacy_createStore as createStore} from 'redux';
// import { devToolsEnhancer } from "@redux-devtools/remote";
import App from './App.jsx'
import './index.css'


// const store = createStore(pokemonsReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() && devToolsEnhancer({ realtime: true, hostname: "localhost", port: 8001 }))
const store = createStore(pokemonsReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </StrictMode>,
)
