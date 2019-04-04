import {UPDATE_DEFAULT_WEATHER} from './weather.action'


export const defaultWeatherReducer = (state = null, action) => {
    switch (action.type) {

        case UPDATE_DEFAULT_WEATHER:
            return action.payload
        default:
            return state
    }
}