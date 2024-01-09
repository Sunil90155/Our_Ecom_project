

import axios from "axios";

export const loadScript = (src) => new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;

    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);

    document.body.appendChild(script);
});


export const DisplayRazorpay = async () => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
    }

    const result = await axios.post("http://localhost:8000/orders");

    if (!result) {
        alert("Server error. Are you online?");
        return;
    }

    const { amount, id: order_id, currency } = result.data;

    const options = {
        key: "rzp_test_ywoBoLrFabJAe7",
        amount: amount.toString(),
        currency: currency,
        name: "Sunil  Corp.",
        description: "Test Transaction",
        //image: { logo },
        order_id: order_id,
        handler: async (response) => {
            const data = {
                orderCreationId: order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
            };

            const result = await axios.post("http://localhost:8000/payment/success", data);

            alert(result.data.msg);
        },
        prefill: {
            name: "Sunil Kumar",
            email: "Sunil.90155@gmail.com",
            contact: "9711544347",
        },
        notes: {
            address: "Sunil Dey Corporate Office",
        },
        theme: {
            color: "#61dafb",
        },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
};