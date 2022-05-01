import { ALL_SHOP_REQUEST, 
    ALL_SHOP_SUCCESS,
    ALL_SHOP_FAIL,
    SHOP_DETAILS_REQUEST,
    SHOP_DETAILS_SUCCESS,
    SHOP_DETAILS_FAIL,
    NEW_SHOP_REQUEST, 
    NEW_SHOP_SUCCESS,
    NEW_SHOP_FAIL,
    NEW_SHOP_RESET,
    SELLER_SHOP_REQUEST,
    SELLER_SHOP_SUCCESS,
    SELLER_SHOP_FAIL,
    ADMIN_SHOP_REQUEST,
    ADMIN_SHOP_SUCCESS,
    ADMIN_SHOP_FAIL,
    CLEAR_ERRORS } from "../constant/shopConstant"

export const shopReducer = (state = { shops : [] }, action) => {
switch(action.type) {
    case ALL_SHOP_REQUEST :  
    case ADMIN_SHOP_REQUEST:
    case SELLER_SHOP_REQUEST:
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
        case ADMIN_SHOP_SUCCESS:
        case SELLER_SHOP_SUCCESS:
            return {
                loading:false,
                shops:action.payload
            }
    case ALL_SHOP_FAIL :
      case ADMIN_SHOP_FAIL:
        case SELLER_SHOP_FAIL:
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

export const shopDetailsReducer = (state = { shop: {} }, action)=>{
  switch (action.type) {
      case SHOP_DETAILS_REQUEST:
          return{
              loading:true,
              ...state
          }
      case SHOP_DETAILS_SUCCESS:
          return{
              loading:false,
              shop:action.payload,
          }
      case SHOP_DETAILS_FAIL:
          return{
              loading:false,
              error:action.payload
          }
      case CLEAR_ERRORS:
          return {
              ...state,
              error:null
          }
      default:
          return state;
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
