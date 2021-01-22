import {pizzasReducer} from './pizzas/reducer'
import {combineReducers} from 'redux'


const rootReducer= combineReducers({
    pizzas: pizzasReducer
})

export default rootReducer;