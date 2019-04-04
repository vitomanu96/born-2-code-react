import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './index.css'
import * as serviceWorker from './serviceWorker'
import {createStore, combineReducers} from 'redux'
import {devToolsEnhancer} from 'redux-devtools-extension'
import {Provider} from 'react-redux'
import {defaultWeatherReducer} from './default-city-weather/redux/weather.redux'


const rootReducer = combineReducers({
    defaultWeather: defaultWeatherReducer
})
/**
 * REDUX STORE
 */
export const store = createStore(rootReducer, {}, devToolsEnhancer())


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
