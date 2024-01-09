
import { Box, Button, Typography,Badge } from "@mui/material";
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import styled from "@emotion/styled";

import { useState, useContext } from "react";
import { DataContext } from "../../context/DataProvider";

import LoginDailog from "../login/LoginDialog";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Wrapper = styled(Box)`
        display: flex;
        margin : 0 4% 30 auto ; 
        & > button , & > p , & > div {
            margin -right : 15px;
            font-size : 16px ;
            align-items : center ;
        }
`;


const Container = styled(Link)`
        display: flex;
        text-decoration : none ;
        color : inherit ;     

`;

const LoginButton = styled(Button)`
       margin-left : 10px;
       color : #2874f0;   
       background : #FFF;
       text-Transform: none;
       padding: 5px 40px ;
       border-radius : 2px ;
       box-shadow: none;
       font-weight: 600;
       height: 31px;


`;


const CustomButtons = () => {

    const [open, setOpen] = useState(false);

    const { account } = useContext(DataContext);

    const cartDetails = useSelector(state => state.cart);
    const { cartItems } = cartDetails;




    const openDialog = () => {

        setOpen(true);
    }

    return (
        <Wrapper>

            {
                account ? <Profile account={account} /> :
                    <LoginButton variant="contained" onClick={() => openDialog()}>Login</LoginButton>

            }

            
            <Typography style={{ marginTop: 3, width: 135 }} > Become a Seller  </Typography>
            <Typography style={{ marginTop: 3 }} > More  </Typography>

            <Container to="/cart" >

            <Badge badgeContent={cartItems?.length} color="secondary" > <ShoppingCart />   </Badge>

                
                <Typography> Cart   </Typography>
            </Container>
            <LoginDailog open={open} setOpen={setOpen} />


        </Wrapper>


    )

}

export default CustomButtons;