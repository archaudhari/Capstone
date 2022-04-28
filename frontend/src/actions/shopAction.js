import axios from 'axios';

import { 
    ALL_SHOP_REQUEST,
    ALL_SHOP_SUCCESS,
    ALL_SHOP_FAIL,
    NEW_SHOP_REQUEST,
    NEW_SHOP_SUCCESS,
    NEW_SHOP_FAIL,
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

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    });
};