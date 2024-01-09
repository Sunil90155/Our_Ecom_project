import { Box, Button, styled } from "@mui/material";
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/action/cartAction";
import { useState } from "react";
import {DisplayRazorpay} from './RazorPayFunction';


const LeftContainer = styled(Box)`
    min-width: 40%;
    padding : 40px 0 0 80px ;
   
`;

const Image = styled('img')({

    width: '90%'

});


const StyledButton = styled(Button)`
    width: 46%;
    border-radius: 5px;
    height: 50px;
    color: #FFF;
`;


const ActionItem = ({ product }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = product;

    const [quantity] = useState(1);


    // Assuming `loadScript` and `axios` are properly imported or defined elsewhere in your code


    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
        navigate('/cart');
    }
    
    return (


        <LeftContainer>

            <Box style={{ padding: '15px 20px', border: '2px solid #f0f0f0' }}  >
                <Image src={product.detailUrl} alt='Product_image' />
            </Box>
            
            <StyledButton variant="contained" onClick={() => addItemToCart()} style={{ marginTop: 20, marginRight: 24, background: '#ff9f00' }}> <Cart /> ADD TO CART</StyledButton>           
            <StyledButton onClick={DisplayRazorpay} style={{ marginTop: 20, background: '#fb641b' }} variant="contained"><Flash /> Buy Now</StyledButton>
        </LeftContainer>
    )
}







export default ActionItem; 