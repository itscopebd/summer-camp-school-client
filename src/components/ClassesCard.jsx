import React from 'react';

const ClassesCard = ({classe}) => {
    const {instructor_image,name,email,seats,price,class_name}=classe;
    console.log(classe)

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
                <button className='btn btn-sm btn-primary text-white'>Select Class</button>
            </div>
        </div>


    </>
    );
};

export default ClassesCard;