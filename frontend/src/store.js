import {combineReducers,createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { userReducer } from './reducers/userReducer'
import { productReducer,productDetailsReducer } from './reducers/productReducers'
import { shopReducer } from './reducers/shopReducer'

const reducer=combineReducers({
    products:productReducer,
    user:userReducer,
    productDetails:productDetailsReducer,
    shops: shopReducer,
})

let initialState={};
const middleware=[thunk];
const store=createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;