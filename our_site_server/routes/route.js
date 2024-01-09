import dotenv from "dotenv";
import express from "express";
import { getProductById, getProducts } from '../controller/product-controller.js';
import { userSignUp, userLogIn } from '../controller/user-controller.js';
// import { addItemInCart } from '../controller/cart-controller.js';
import { orderCreate } from '../controller/payment-controller.js';

dotenv.config();
const router = express.Router();

//login & signup
router.post('/signup', userSignUp);
router.post('/login', userLogIn);

//Product Endpoint
router.get('/products', getProducts);
router.get('/product/:id', getProductById);

router.post('/orders', orderCreate);
//router.post('/callback', paymentResponse);

export default router;
