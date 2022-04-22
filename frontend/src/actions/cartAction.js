import {ADD_TO_CART} from '../constant/cartConstants'
import axios from 'axios';

export const addItemsToCart = (id) => async (dispatch, getState) => {
    const { data } = await axios.get(`http://localhost:4000/api/v1/products/${id}`);
  
    dispatch({
      type: ADD_TO_CART,
      payload: {
        product: data.product._id,
        name: data.product.name,
        price: data.product.price,
        image: data.product.images[0].url,
        stock: data.product.Stock,
        
      },
    });
  
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  };