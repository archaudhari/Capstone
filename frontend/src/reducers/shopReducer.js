import { ALL_SHOP_REQUEST, 
    ALL_SHOP_SUCCESS,
    ALL_SHOP_FAIL,
    CLEAR_ERRORS } from "../constant/shopConstant"

export const shopReducer = (state = { shops : [] }, action) => {
switch(action.type) {
    case ALL_SHOP_REQUEST : 
        return {
            loading: true,
            shop: []
        }   
    case ALL_SHOP_SUCCESS: 
        return {
            loading: false,
            shops: action.payload.shops,
            shopsCounts : action.payload.shopsCounts
        }
    case ALL_SHOP_FAIL :
        return {
            loading:false,
            error: action.payload
        }
    case CLEAR_ERRORS :
        return {
            ...state,
            error: null
        }
    default:
        return state
}
}  
