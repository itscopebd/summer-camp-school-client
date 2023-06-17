import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthContext/AuthProvider';

const CheckOutFrom = ({ price }) => {
    const token = localStorage.getItem("access-token");
    const stripe = useStripe();
    const { user } = useContext(AuthContext)
    const elements = useElements();
    const [cartError, setCardError] = useState('');

    const [clientSecret, setClientSecret] = useState('')
    useEffect(() => {
        axios.post("http://localhost:5000/payment", {  price })
            .then(data => {
                setClientSecret(data.data.clientSecret)
                console.log(data.data.clientSecret)
            })

    }, [])

    const handleSubmit = async event => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('error', error);
            setCardError(error.message)
        } else {
            setCardError('')
            console.log('Payment Method', paymentMethod);
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.useEmail || 'Unknown',
                        name: user?.userName || "Anonymous"
                    },
                },
            },
        );
        if (confirmError) {
            console.log(confirmError)
        } else {
            console.log(paymentIntent)
        }



    }

    return (

        <>
            <form className='w-2/3 mx-auto' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm bg-[#5ab337d6] text-white hover:text-black mt-5' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {cartError && <p className='text-red-500 ml-5 mt-3'>{cartError}</p>}
        </>



    );
};

export default CheckOutFrom;