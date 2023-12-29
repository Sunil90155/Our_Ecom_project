import * as actionTypes from '../constants/productConstant';




export const getProductsReducer = (state = { products : []} , action) => {
    switch(action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS :
            console.log("after succes");
            return { products : action.payload }
            
        
        case actionTypes.GET_PRODUCTS_FAIL :
            return { error : action.payload }
     
            default:
            return state 
    }
    
}