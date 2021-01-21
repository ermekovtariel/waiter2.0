import  filtersReducer from './filters'
import  pizzasReducer from './pizzas'
import {combineReducers} from 'redux'


const rootReducer= combineReducers({
    filters: filtersReducer,
    pizzas: pizzasReducer
})

export default rootReducer;