
import { Box, Button, Typography } from "@mui/material";
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import styled from "@emotion/styled";

import { useState } from "react";

import LoginDailog from "../login/LoginDialog"; 

const Wrapper = styled(Box)`
        display: flex;
        margin : 0 3% 0 auto ; 
        & > button , & > p , & > div {
            margin -right : 40px;
            font-size : 16px ;
            align-items : center ;
        }
`;


const Container = styled(Box)`
        display: flex;      

`;

const LoginButton = styled(Button)`
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

        const [open,setOpen]=useState(false);

        const openDialog= ()=> {

            setOpen(true);
        }

    return (
        <Wrapper>
            <LoginButton variant="contained" onClick={()=> openDialog()} >Login</LoginButton>

            <Typography  style={{marginTop : 3, width: 135 }} > Become a Seller  </Typography>
            <Typography  style={{marginTop : 3}} > More  </Typography>

            <Container>
                <ShoppingCart />
                <Typography> Cart   </Typography>
            </Container>
                <LoginDailog open={open} setOpen ={setOpen}  />


        </Wrapper>


    )

}

export default CustomButtons;