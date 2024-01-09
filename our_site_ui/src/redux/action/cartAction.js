


import axios from 'axios';
import * as actionTypes from '../constants/cartConstantens';





const URL = 'http://localhost:8000' ;

export const addToCart = (id , quantity ) => async (dispatch) => { 

    try {
       
        const { data } = await axios.get(`${URL}/product/${id}`);
        dispatch({ type: actionTypes.ADD_TO_CART, payload: {...data, quantity }}) ;  // yaha se data ja raha payload me 
       
    } catch (error) {       
        dispatch({ type: actionTypes.ADD_TO_CART_ERROR, payload: error.message })      
    }    
}


export const removeFromCart = (id) => (dispatch) => {    // asyn ki jarurat hai nahi kyouki api  call anhi kar rahe hai 

    dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: id })
    
}



// yaha se jayega reduser ke pass