import React from 'react';

const InstructorCard = ({ instructor }) => {
    const { userName,userEmail,userImage } = instructor;

    return (
        <>

            <div className="card bg-base-100 shadow-xl">
                <figure><img className='w-full h-96' src={userImage} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Instructor: {userName}</h2>
                    <p> Email: {userEmail}</p>
                </div>
            </div>


        </>
    );
};

export default InstructorCard;