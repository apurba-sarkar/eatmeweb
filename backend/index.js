const express = require('express');
const Razorpay = require('razorpay');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const razorpay = new Razorpay({
    key_id: 'rzp_test_IR7MaOtZwA0FEr',
    key_secret: 'Z5anmzpvaxGYi7QBPvWJuWRo'
});

app.post('/create-order', async (req, res) => {
    const options = {
        amount: req.body.amount * 100, // amount in the smallest currency unit
        currency: 'INR',
        receipt: 'order_rcptid_11'
    };

    try {
        const order = await razorpay.orders.create(options);
        res.json(order);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post('/verify-payment', (req, res) => {
    const secret = 'Z5anmzpvaxGYi7QBPvWJuWRo';

    const shasum = crypto.createHmac('sha256', secret);
    shasum.update(`${req.body.razorpay_order_id}|${req.body.razorpay_payment_id}`);
    const digest = shasum.digest('hex');

    if (digest === req.body.razorpay_signature) {
        res.json({ status: 'success' });
    } else {
        res.json({ status: 'failure' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
