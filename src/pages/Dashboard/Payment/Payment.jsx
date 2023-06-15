import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOutFrom from './CheckOutFrom';
import { Elements } from '@stripe/react-stripe-js';
// TODO: provide publish
const stripePromise = loadStripe(import.meta.env.VITE_payment_key);

const Payment = () => {
    return (
        <div className='w-full'>
            <h3>This is Payment</h3>
            <Elements stripe={stripePromise}>
                <CheckOutFrom></CheckOutFrom>
            </Elements>
        </div>
    );
};

export default Payment;