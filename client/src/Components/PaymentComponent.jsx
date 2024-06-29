// import React from 'react';
import axios from 'axios';
// import './PaymentComponent.css'; // Import the CSS file for custom styling

const PaymentComponent = () => {
    const handlePayment = async () => {
        try {
            const orderUrl = 'http://localhost:3000/create-order'; // Adjust to your server URL
            const order = await axios.post(orderUrl, { amount: 500 }); // Example amount in INR

            const options = {
                key: 'YOUR_KEY_ID', // Replace with your Razorpay key ID
                amount: order.data.amount,
                currency: order.data.currency,
                name: 'Your Company Name',
                description: 'Test Transaction',
                order_id: order.data.id,
                handler: async (response) => {
                    const verifyUrl = 'http://localhost:3000/verify-payment';
                    const verification = await axios.post(verifyUrl, {
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_signature: response.razorpay_signature,
                    });
                    alert(verification.data.status);
                },
                prefill: {
                    name: 'Your Name',
                    email: 'your.email@example.com',
                    contact: '9999999999'
                },
                theme: {
                    color: '#3399cc'
                }
            };

            const rzp1 = new window.Razorpay(options);
            rzp1.open();
        } catch (error) {
            console.error('Error creating order:', error);
        }
    };

    return (
        <div className="payment-container">
            <button className="payment-button" onClick={handlePayment}>Pay Now</button>
            <div>ada</div>
        </div>
    );
};

export default PaymentComponent;
