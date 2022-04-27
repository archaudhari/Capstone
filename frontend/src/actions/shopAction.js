import axios from 'axios';

import { 
    ALL_SHOP_REQUEST,
    ALL_SHOP_SUCCESS,
    ALL_SHOP_FAIL,
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

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    });
};