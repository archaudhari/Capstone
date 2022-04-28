import { ALL_SHOP_REQUEST, 
    ALL_SHOP_SUCCESS,
    ALL_SHOP_FAIL,
    NEW_SHOP_REQUEST, 
    NEW_SHOP_SUCCESS,
    NEW_SHOP_FAIL,
    NEW_SHOP_RESET,
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

export const newShopReducer = (state = { shop: {} }, action) => {
    switch (action.type) {
      case NEW_SHOP_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case NEW_SHOP_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          shop: action.payload.shop,
        };
      case NEW_SHOP_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case NEW_SHOP_RESET:
        return {
          ...state,
          success: false,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };
