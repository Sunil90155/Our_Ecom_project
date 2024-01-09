

import { Grid, Typography, Box, styled, Button } from "@mui/material";
import { useSelector } from "react-redux";

import CartItem from './CartItem';
import TotalView from "./Totalview";

import EmptyCart from './EmptyCart';

import { DisplayRazorpay } from '../details/RazorPayFunction';


// const Container = styled(Grid)`
// padding: 30px 135px ;
//     display: flex ;


// `;

const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
`;



const Component = styled(Grid)(({ theme }) => ({
    padding: '30px 135px',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
        padding: '15px 0'
    }
}));


const StyledButton = styled(Button)`
    display: flex;
    margin-left: auto;
    background: #fb641b;
    color: #fff;
    border-radius: 2px;
    width: 250px;
    height: 51px;
`;

const BottomWrapper = styled(Box)`
    padding: 16px 22px;
    background: #fff;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
    border-top: 1px solid #f0f0f0;
`;

const LeftComponent = styled(Grid)`
        padding-right: 5px; 

`;





const Cart = () => {
    const { cartItems } = useSelector(state => state.cart); // yah custom hook ki tarh uswork karta hai
    // const { cartItems } = cartDetails;
    // const { id } = useParams();

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     if(cartItems && id !== cartItems.id)   
    //         dispatch(addToCart(id));
    // }, [dispatch, cartItems, id]);

    // const removeItemFromCart = (id) => {
    //     dispatch(removeFromCart(id));
    // }


    return (
        <>
            {
                cartItems.length ?          //cart item ki lenth check  kar rahe hai 
                    <Component container >
                        <LeftComponent item lg={8.75} md={8.75} sm={12} xs={12} >
                            <Header>
                                <Typography> My Cart ( {cartItems.length} ) </Typography>
                            </Header>

                            {
                                cartItems.map(item => (

                                    <CartItem item={item} />

                                ))

                            }
                            <BottomWrapper>
                                <StyledButton onClick={DisplayRazorpay}   >Place Order</StyledButton>
                            </BottomWrapper>
                        </LeftComponent>

                        <Grid item lg={3.25} md={3.25} sm={12} xs={12}>
                            <TotalView cartItems={cartItems} />
                        </Grid>


                    </Component>

                    : <EmptyCart />


            }



        </>
    )
}

export default Cart;