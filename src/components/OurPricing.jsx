import React from 'react';

const OurPricing = () => {
    return (
        <>
        <h3 className='text-5xl font-bold text-center mt-20'>Our <span className='text-[#5ab337d6]'>Pricing</span></h3>
            <div className='grid grid-cols-1 gap-16 md:grid-cols-3 my-10'>

                <div className="card bg-base-100 shadow-xl text-center">
                    <div className="card-body p-0 pb-5">
                        <h2 className=" text-3xl font-medium bg-black py-5 w-full text-white">BASIC</h2>
                        <p className='text-7xl my-3 text-[#5ab337d6]'>$40</p>
                        <p className='px-16'>It is a long established fact that a reader will be distracted by the readable</p>
                        <div className="card-actions justify-center">
                            <button className="btn bg-[#5ab337d6] hover:text-black text-white">Select Plan</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl text-center">
                    <div className="card-body p-0 pb-5">
                        <h2 className=" text-3xl font-medium bg-[#5ab337d6] py-5 w-full text-white">STANDARD</h2>
                        <p className='text-7xl my-3 text-[#5ab337d6]'>$<span className='text-black'>50</span></p>
                        <p className='px-16'>It is a long established fact that a reader will be distracted by the readable</p>
                        <div className="card-actions justify-center">
                            <button className="btn bg-[#5ab337d6] hover:text-black text-white">Select Plan</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl text-center">
                    <div className="card-body p-0 pb-5">
                        <h2 className=" text-3xl font-medium bg-black py-5 w-full text-white">PREMIUM</h2>
                        <p className='text-7xl my-3 text-[#5ab337d6]'>$60 </p>
                        <p className='px-16'>It is a long established fact that a reader will be distracted by the readable</p>
                        <div className="card-actions justify-center">
                            <button className="btn bg-[#5ab337d6] hover:text-black text-white">Select Plan</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default OurPricing;