import React from 'react';

const InstructorCard = ({ instructor }) => {
    const { userName,userEmail,useImage } = instructor;

    return (
        <>

            <div className="card bg-base-100 shadow-xl">
                <figure><img className='w-full h-96' src={useImage} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{userName}</h2>
                    <p>{userEmail}</p>
                </div>
            </div>


        </>
    );
};

export default InstructorCard;