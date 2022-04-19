import {combineReducers,createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { userReducer } from './reducers/userReducer'
import { productReducer } from './reducers/productReducers'

const reducer=combineReducers({
    products:productReducer,
    user:userReducer
})

let initialState={};
const middleware=[thunk];
const store=createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;