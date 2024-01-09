import { Box, Typography, styled, Button } from "@mui/material";
import { addEllipsis } from '../../utils/common-utils';
import GroupButton from "./ButtonGroup";
import { removeFromCart } from "../../redux/action/cartAction";
import { useDispatch } from "react-redux";
 
const Component = styled(Box)`
    border-top: 1px solid #f0f0f0;
    border-radius: 0px;
    display: flex;
    background:#fff ;
    
    
`;

const LeftComponent = styled(Box)`
    margin : 20px ; 
    margin-top: 30px;
    display: flex ;
    flex-direction: column ;
`;

const SmallText = styled(Typography)`
    color: #878787;
    font-size: 14px;
    margin-top: 10px;
   
   
`;

const Cost = styled(Typography)`
    font-size: 18px; 
    font-weight: 600;
`;

const MRP = styled(Typography)`
    color: #878787;
`;

const Discount = styled(Typography)`
    color: #388E3C;
`;

const Remove = styled(Button)`
    margin-top: 20px;
    font-size: 16px;
`;

const RightContainer = styled(Box)`
    
    margin-top: 60px;
    margin : 15px;
    & > p {
        margin-top: 10px;
    }
`;


const CartItem = ({ item  }) => {


    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';


    const dispatch = useDispatch(); 

    const removeItemFromCart = (id) => {

               dispatch(removeFromCart(id)) ;

    }

    return (


        <Component>

            <LeftComponent>
                <img src={item.url} style={{ height: 110, width: 105 }} alt="product_img" />
                <GroupButton />

            </LeftComponent>

            <RightContainer >
                <Typography> {addEllipsis(item.title.longTitle)} </Typography>

                <SmallText> Seller: Sunil Kuamr
                    <span><img src={fassured} style={{ width: 50, marginLeft: 10 }} /></span>

                </SmallText>

                <Typography style={{ marginleft: '20px 0 ' }} >
                     <Cost component="span" style={{ fontWeight: 500, fontSize: 18 }} > ₹{item.price.cost}</Cost>&nbsp;&nbsp;&nbsp;
                     <MRP component="span" style={{ color: '#878787' }} > <strike>₹{item.price.mrp}</strike> </MRP>&nbsp;&nbsp;&nbsp;
                     <Discount component="span" style={{ color: '#388E3C' }} > {item.price.discount}  off  </Discount>
                </Typography>

                <Remove style={{ marginleft : 40,marginTop : 55}} onClick={() => removeItemFromCart(item.id)}>Remove</Remove>
            </RightContainer>



        </Component>


    )
}

export default CartItem;

