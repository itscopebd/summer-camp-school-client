import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckOutFrom = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [cartError,setCardError]=useState('')
const handleSubmit= async event=>{
    event.preventDefault();
    if (!stripe || !elements) {
        return;
      }
      const card = elements.getElement(CardElement);
      if (card == null) {
        return;
      }

  // Use your card Element with other Stripe.js APIs
  const {error, paymentMethod} = await stripe.createPaymentMethod({
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
                <button className='btn btn-sm bg-[#5ab337d6] text-white hover:text-black mt-5' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {cartError && <p className='text-red-500 ml-5 mt-3'>{cartError}</p> }
           </>


       
    );
};

export default CheckOutFrom;