import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ClassesCard = ({ classe }) => {
    const { _id, instructor_image, name, email, seats, price, class_name } = classe;
    const { user } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate()
    const [isSelected, setIsSelected] = useState(false)

    const handleAddToCart = () => {
        const selectedClass = { id: _id, class_name: class_name, name: name, price: price, isSelected: true }
        if (user) {
            fetch("http://localhost:5000/carts", {
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
                    else{
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



    // useEffect(() => {
    //     fetch("http://localhost:5000/carts")
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             // setIsSelected(data.isSelected)
    //         })
    // }, [])


    return (
        <>

            <div className="card bg-base-100 shadow-xl">
                <figure><img src={instructor_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{class_name}</h2>
                    <h4 className='font-bold'>Instructor: {name}</h4>
                    <div className='flex justify-between'>
                        <h3 className='font-bold'> Available Seats: {seats}</h3>
                        <h3 className='font-bold'>Price: ${price}</h3>
                    </div>
                    {
                        isSelected ? <button onClick={handleAddToCart} disabled={isSelected} className='btn btn-sm btn-primary text-white'>Select Class</button> :
                            <button onClick={handleAddToCart} className='btn btn-sm btn-primary text-white'>Select Class</button>
                    }

                </div>
            </div>


        </>
    );
};

export default ClassesCard;