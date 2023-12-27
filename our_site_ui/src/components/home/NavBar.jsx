import { Box, styled ,Typography} from "@mui/material";
import { navData } from '../../constants/data'




const Component = styled(Box)`

    display: flex; 
    justify-content: space-between;
    margin: 55px 130px 0 130px;
    overflow-x: overlay;
`;

const Container = styled(Box)`
    padding: 12px 8px;
    text-align : center
`;

const Text = styled(Typography)`
    font-size: 14px;
    font-weight: 600;
    font-family: inherit;
`;


const NavBar = () => {

    return (

        <Component>
            {
                // map karke ek ek object ko nikal rahe hai 
                navData.map(data => (

                    <Container>
                        <img src={data.url} alt="nav" style={{ Width: 64 }} />
                        <Text>{data.text}</Text>


                    </Container>

                ))


            }

        </Component>
    )

}

export default NavBar;