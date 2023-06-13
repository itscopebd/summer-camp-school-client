import React from 'react';

const InstructorCard = ({ instructor }) => {
    const { userName,userEmail } = instructor;

    console.log(instructor)
    return (
        <>

            <div className="card bg-base-100 shadow-xl">
                <figure><img src={instructor_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{email}</p>
                </div>
            </div>


        </>
    );
};

export default InstructorCard;