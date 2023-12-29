
import axios from 'axios';
import * as actionTypes from '../constants/productConstant';




const  URL='http://localhost:8000/products'

export const getProducts = () => async (dispatch) => {

    try {
        console.log(" i am in product action try 1 ");
        const { data } = await axios.get(`${URL}`); 
        
        console.log(" i am in product action try 2 ");
        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data })
        
        
        
    } catch (error) 
    {
        console.log(" action catch 1 ");
        dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload : error.response })
        console.log("  action catch 2 ");
    }
    console.log(" i am in product action last ");
}

