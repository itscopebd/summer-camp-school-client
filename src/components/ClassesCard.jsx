import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ClassesCard = ({ classe, checkUsers }) => {

    const { user } = useContext(AuthContext);
 

    const { _id, classImage, className, availableSeats, price, userName } = classe;

    const location = useLocation();
    const navigate = useNavigate()
    const [isSelected, setIsSelected] = useState(false)

    const handleAddToCart = () => {
        const selectedClass = { id: _id,classImage:classImage, instructor:userName,userEmail:user?.email, price: price, isSelected: true }
        console.log(selectedClass)
        if (user) {
            fetch("https://server-site-theta.vercel.app/carts", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(selectedClass)

            }).then(res => res.json())
                .then(data => {

                    if (data.message) {
                        toast.info(`${data.message}`);
                        setIsSelected(true)
                    }
                    else {
                        toast.success("Selected Success! ");
                        setIsSelected(true)
                    }

                })
        }
        else {

            toast.info("Please Login ! ")
            navigate("/login", { state: { from: location } })
        }
    }

    return (
        <>

            <div className="card bg-base-100 shadow-xl">
                <figure><img className='w-full h-92' src={classImage} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{className}</h2>
                    <h4 className='font-bold'>Instructor: {userName}</h4>
                    <div className='flex justify-between'>
                        <h3 className='font-bold'> Available Seats: {availableSeats}</h3>
                        <h3 className='font-bold'>Price: ${price}</h3>
                    </div>
                    {

                        user && user ? (checkUsers?.role === "admin" || checkUsers?.role === "instructor" ? < button disabled className='btn btn-sm btn-primary text-white'>Select Class</button> : <button onClick={handleAddToCart} className='btn btn-sm btn-primary text-white'>Select Class</button>)
                            : (<button onClick={handleAddToCart} className='btn btn-sm btn-primary text-white'>Select Class</button>

                            )

                    }

                </div>
            </div >


        </>
    );
};

export default ClassesCard;