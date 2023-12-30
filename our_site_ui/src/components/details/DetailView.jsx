

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/action/productActions";
import { Box, Typography } from  '@mui/material';



const DetailView = () => {
    
    const dispatch = useDispatch();
    const { id } = useParams();

    //const { product } = useSelector( state => state.getProductDetails);
    
    

    
    
     useEffect(() => {
        //if(product && id !== product.id)   
            dispatch(getProductDetails(id));
    }, [dispatch, id]);

   

    return ( 
                <Box>
                    {   //product && Object.keys(product).length &&
                        
                            <Box>
                                <Box></Box>
                                                                
                                <Box>
                                    <Typography> hello </Typography>
                                               
                                </Box>

                            </Box>

                    }


                </Box>
    )

}

export default DetailView;