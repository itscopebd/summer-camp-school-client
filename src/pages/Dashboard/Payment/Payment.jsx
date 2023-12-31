import { loadStripe } from '@stripe/stripe-js';
import React, { useContext } from 'react';
import CheckOutFrom from './CheckOutFrom';
import { Elements } from '@stripe/react-stripe-js';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../AuthContext/AuthProvider';
// TODO: provide publish
const stripePromise = loadStripe(import.meta.env.VITE_payment_key);



const Payment = () => {




    const {user}= useContext(AuthContext )
    const { data: selectedclasses = [], refetch } = useQuery(['selectedclasses'], async () => {
        const res = await fetch(`http://localhost:5000/carts/${user.email}`)
        return res.json()
    });
    const total = selectedclasses.reduce((sum, item) => item.price + sum, 0);
        const price = parseFloat(total.toFixed(2))
    return (
        <div className='w-full'>
            
            <Elements stripe={stripePromise}>
                <CheckOutFrom price={price}></CheckOutFrom>
            </Elements>
        </div>
    );
};

export default Payment;