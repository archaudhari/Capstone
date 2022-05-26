import {combineReducers,createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { userReducer } from './reducers/userReducer'
import { productReducer,productDetailsReducer, newProductReducer } from './reducers/productReducers'
import { newShopReducer, shopReducer, shopDetailsReducer } from './reducers/shopReducer'
import { cartReducer } from './reducers/cartReducer'
import { newOrderReducer } from './reducers/orderReducer'

const reducer=combineReducers({
    products:productReducer,
    user:userReducer,
    productDetails:productDetailsReducer,
    shops: shopReducer,
    shopDetails: shopDetailsReducer,
    cart:cartReducer,
    newShop:newShopReducer,
    newProduct:newProductReducer,
    newOrder:newOrderReducer
})

let initialState={
    cart: {
        cartItems: localStorage.getItem("cartItems")
          ? JSON.parse(localStorage.getItem("cartItems"))
          : [],
          shippingInfo: localStorage.getItem("shippingInfo")
        ? JSON.parse(localStorage.getItem("shippingInfo"))
        : {},
    },
};
const middleware=[thunk];
const store=createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;