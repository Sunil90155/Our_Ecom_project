import { Box, Dialog, TextField, Typography, styled, Button } from '@mui/material';
import { useState } from 'react';




const Component = styled(Box)`
    height: 70vh;
    width: 90vh;
    padding: 0;
    padding-top: 0;
`;




const CreateAccount = styled(Typography)`
    margin: auto 0 5px 0;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer
`


const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;


const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;


const Image = styled(Box)`
    background: #17827d url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    width: 30%;
    height: 100%;
    padding : 45px 35px;

    & > p, & > h5 {
        color: #FFFFFF;
        font-weight: 600
    }
    
`;



const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: 'Signup to get started'
    }
};


const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
};


const LoginDailog = ({ open, setOpen }) => {

    const [account, toggleAccount] = useState(accountInitialValues.login)
    const [signup, setsignup] = useState(signupInitialValues);

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login);

    };

    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);
    }

    const onInputChange = (e) => {

        setsignup({ ...signup, [e.target.name]: e.target.value });
        console.log(signup)

    }

    const signupUser = async() => {
       
    }






    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxHeight: 'unset', maxWidth: 'unset' } }}>

            <Component>
                <Box style={{ display: 'flex', height: '100%' }} >
                    <Image>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>

                    </Image>
                    {
                        account.view === 'login' ?
                            <Wrapper>

                                <TextField variant="standard" label="Enter Enter Email/Mobile Number" />
                                <TextField variant="standard" label="Enter Password" />
                                <Text>By continuting , You agree to Our_site terms And Privicy Policy. </Text>
                                <LoginButton> Login  </LoginButton>
                                <Typography style={{ textAlign: 'center' }}  >OR</Typography>
                                <RequestOTP>Requst OPT</RequestOTP>
                                <CreateAccount onClick={() => toggleSignup()} >If U R New On Our Site ? Create Account Hare </CreateAccount>

                            </Wrapper>

                            :

                            <Wrapper>

                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='firstname' label="Enter First Name" />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='lastname' label="Enter LastName" />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label="Enter UserNmae" />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='email' label="Enter Email" />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label="Enter Passwaord" />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='phone' label="Enter Phone" />
                                <LoginButton onClick={() => signupUser ()} > Continue Login  </LoginButton>
                            </Wrapper>

                    }



                </Box>



            </Component>


        </Dialog>
    )
}

export default LoginDailog;

