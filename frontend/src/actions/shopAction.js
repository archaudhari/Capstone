import axios from 'axios';

import { 
    ALL_SHOP_REQUEST,
    ALL_SHOP_SUCCESS,
    ALL_SHOP_FAIL,
    SHOP_DETAILS_REQUEST,
    SHOP_DETAILS_SUCCESS,
    SHOP_DETAILS_FAIL,
    NEW_SHOP_REQUEST,
    NEW_SHOP_SUCCESS,
    NEW_SHOP_FAIL,
    SELLER_SHOP_REQUEST,
    SELLER_SHOP_SUCCESS,
    SELLER_SHOP_FAIL,
    ADMIN_SHOP_REQUEST,
    ADMIN_SHOP_SUCCESS,
    ADMIN_SHOP_FAIL,
    CLEAR_ERRORS } from '../constant/shopConstant';

export const getShop = () => async (dispatch) => {
    try {
        dispatch({
             type :ALL_SHOP_REQUEST
        });

        const { data } = await axios.get("http://localhost:4000/api/v1/shops");

        dispatch({
            type: ALL_SHOP_SUCCESS,
            payload:  data
        })

    }   catch (error) {
        dispatch({
            type: ALL_SHOP_FAIL,
            payload : error.response.data.message,
        })
    }
};

export const createShop = (shopData) => async (dispatch) => {
    try {
      dispatch({ type: NEW_SHOP_REQUEST });
  
    //   const config = {
    //     headers: { "Content-Type": "application/json" },
    //   };
  
      const { data } = await axios.post(
        `http://localhost:4000/api/v1/unique/shop/new`,
        shopData
      );
  
      dispatch({
        type: NEW_SHOP_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: NEW_SHOP_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  export const getShopDetails =(id) => async (dispatch) => {

    try {
      dispatch({ type:SHOP_DETAILS_REQUEST });

      const { data } = await axios.get(`http://localhost:4000/api/v1/shop/${id}`);

      dispatch({
        type: SHOP_DETAILS_SUCCESS,
        payload: data.shop,
      });
    } catch (error) {
      dispatch({
        type: SHOP_DETAILS_FAIL,
        payload: error.response.data.message,
      });
    }
  };


  // get seller shops
export const getSellerShops = () => async(dispatch) => {
  try {
      dispatch({ type: SELLER_SHOP_REQUEST })

      const { data } = await axios.get(`http://localhost:4000/api/v1/seller/shops`) ;

      dispatch({
          type: SELLER_SHOP_SUCCESS,
          payload: data.shops
      })
  }catch(error) {
      dispatch({
          type: SELLER_SHOP_FAIL,
          payload : error.payload.data.message,
      })
  }
}

  // get all shops for admin
export const getAdminShops = () => async(dispatch) => {
  try {
      dispatch({ type: ADMIN_SHOP_REQUEST })

      const { data } = await axios.get(`http://localhost:4000/api/v1/unique/shops`) ;

      dispatch({
          type: ADMIN_SHOP_SUCCESS,
          payload: data.shops
      })
  }catch(error) {
      dispatch({
          type: ADMIN_SHOP_FAIL,
          payload : error.payload.data.message,
      })
  }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    });
};