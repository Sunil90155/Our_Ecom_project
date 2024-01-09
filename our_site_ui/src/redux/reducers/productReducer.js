import * as actionTypes from '../constants/productConstant';




export const getProductsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return { products: action.payload }
        case actionTypes.GET_PRODUCTS_FAIL:
            return { error: action.payload }
        default:
            return state
    }
}

export const getProductDetailsReducer = ( state = { product: {} }, action) => {
    switch (action.type) {

        case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
            return { loading: false }

        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
                console.log("Now its true i am in pr-DETAILS_SUCCESS")
            return { loading : false , product : action.payload }
            
        case actionTypes.GET_PRODUCT_DETAILS_FAIL:   //kisi wajah se ager api fail ho jati hai  
            console.log("Now its true i am in pr2")
            return { loading: false, error: action.payload }

        case actionTypes.GET_PRODUCT_DETAILS_RESET:
            console.log("Now its true i am in pr3")    
        return { product: {} }

        default:
            console.log("Now its true i am in pr4")  
            return state
    }

} 

// yah store se call hoga 