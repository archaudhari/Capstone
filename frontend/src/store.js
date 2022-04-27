import {combineReducers,createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { userReducer } from './reducers/userReducer'
import { productReducer,productDetailsReducer } from './reducers/productReducers'
import { shopReducer } from './reducers/shopReducer'
import { cartReducer } from './reducers/cartReducer'

const reducer=combineReducers({
    products:productReducer,
    user:userReducer,
    productDetails:productDetailsReducer,
    shops: shopReducer,
    cart:cartReducer
})

let initialState={
    cart: {
        cartItems: localStorage.getItem("cartItems")
          ? JSON.parse(localStorage.getItem("cartItems"))
          : []
    },
};
const middleware=[thunk];
const store=createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;