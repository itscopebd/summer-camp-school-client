import React from 'react';

const NewYoga = () => {
    return (
        <div className='my-52 px-5 grid md:grid-cols-2 items-center'>
            <div className='mb-10 md:mb-0'>
                <img src="https://i.ibb.co/61ndj6s/register-img.png" alt="" />
            </div>
            <div className='space-y-5'>
                <h1 className='text-6xl font-medium text-[#5ab337d6]'>New to Yoga?</h1>
                <h2 className='text-4xl'>Register Yoga For Begginer</h2>
                <p>Aliquam erat volutpat. Vestibulum imperdiet dolor id ante commodo iaculis. Nam aliquet orci vel elit fermentum iaculis. In bibendum ullamcorper nibh quis facilisis. Curabitur fringilla, neque vulputate sollicitudin laoreet, enim dolor maximus neque, id porttitor diam augue cursus mi. Nunc aliquam leo lorem. Duis gravida sed dui at porta.</p>
                <div className='mt-5 space-y-2'>
                    <h2 className='text-3xl mb-2'>Why yoga important for us.</h2>
                    <p>Improves your flexibility.</p>
                    <p>Builds muscles strenght.</p>
                    <p>Perfects your posture.</p>
                    <p>Increases your blood flow.</p>
                    <p>Ups your heart rate.</p>
                </div>
            </div>


            {/* <div className="card card-side bg-base-100">
                <figure><img src="https://i.ibb.co/61ndj6s/register-img.png" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <h3>Register Yoga For Begginer</h3>
                    <p>Aliquam erat volutpat. Vestibulum imperdiet dolor id ante commodo iaculis. Nam aliquet orci vel elit fermentum iaculis. In bibendum ullamcorper nibh quis facilisis. Curabitur fringilla, neque vulputate sollicitudin laoreet, enim dolor maximus neque, id porttitor diam augue cursus mi. Nunc aliquam leo lorem. Duis gravida sed dui at porta.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default NewYoga;