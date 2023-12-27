

import { AppBar, Toolbar, styled, Box, Typography } from "@mui/material";


//cust.. components 
import Search from './Search';
import CustomButtons from './CustomButtons';



const StyleHeader = styled(AppBar)`
    background : #17827d;
    height : 55px;
`;

const Box1 = styled(Box)`
    margin-left : 12% ;
    line-height : 0;
    
    
`;

// Typography mui ke component hai 
const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`

// img koi mui ka component nahi hai  
const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4,

})

const CustomButtonWrapper = styled(Box)`
        margin : 0 5% 0 auto ;     

`;




const Header = () => {

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return (


        <StyleHeader>
            <Toolbar style = {{minHeight:55}} >
                <Box1>
                    <img src={logoURL} alt="logo" style={{ width: 75 }} />
                    <Box component="span" style={{ display: 'flex' }} >
                        <SubHeading>Explore&nbsp;
                            <Box component="span" style={{ color: '#FFE500' }} >Plus</Box>
                        </SubHeading>
                        <PlusImage src={subURL} alt='sub-logo' />
                    </Box>
                </Box1>

                <Search/>
                    <CustomButtonWrapper>
                        <CustomButtons/>

                    </CustomButtonWrapper>

            </Toolbar>

        </StyleHeader >
    );
}

export default Header; 