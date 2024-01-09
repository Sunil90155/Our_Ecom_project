import Razorpay from 'razorpay'

export const orderCreate = async (req, res, next) => {
    try {

        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_SECRET,
        });

        const options = {
            amount: "404900", // amount in smallest currency unit
            currency: "INR",
            receipt: "receipt_order_74394",
        };


        const order = await instance.orders.create(options);

        if (!order) return res.status(500).send("Some error occurred");

        res.json(order);

        console.log("enter in /orders 44444444444 ");
    } catch (error) {
        res.status(500).json({ error: "Order creation failed", details: error.message });
    }
}
