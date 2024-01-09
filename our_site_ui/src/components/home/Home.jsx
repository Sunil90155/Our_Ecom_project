
import { useEffect } from 'react';

import NavBar from "./NavBar";
import Banner from "./Banner";
import { Box, styled } from "@mui/material";
import { getProducts } from '../../redux/action/productActions';
import { useSelector,useDispatch } from 'react-redux';
import Slide from './Slide';
import MidSlide from './MidSilde';

const Component = styled(Box)`
       padding : 10px ;
       background : #F2F2F2 ;

`;

const Home = () => {

    const { products } = useSelector(state => state.getProducts);
    
    

    const dispatch = useDispatch();
       
    useEffect( () => {
        dispatch (getProducts())
    }, [dispatch])


    return (
        <>
            <NavBar />
            <Component>
                <Banner />
                <MidSlide products={products} title= "Deal Of The day" timer ={true}/>
                <Slide products={products} title= "Discount For You " timer ={false} />
                <Slide products={products} title= "Suggesting Item "  timer ={false} />
                <Slide products={products} title= "Top Selection " timer ={false} />
                <Slide products={products} title= "Recommended Item " timer ={false} />
                <Slide products={products} title= "tranding Offers " timer ={false} />
                <Slide products={products} title= "Season's top picks " timer ={false}  />
            </Component>
        </>

    )

}

export default Home;