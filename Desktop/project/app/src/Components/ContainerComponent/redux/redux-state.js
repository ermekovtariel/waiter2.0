import {combineReducer, createStore} from 'redux'
import WorkersReducer from '../Conteiners/EmptyStaffComponents/Workers/WorkersReducer';



let reducers = combineReducer({
WorkersPage: WorkersReducer
})

let store = createStore(reducers)
window.store=store

export default store