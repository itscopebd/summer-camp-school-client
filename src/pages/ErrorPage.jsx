import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
const ErrorPage = () => {
    const error=useRouteError();

    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <img style={{width:"700px",height:"500px"}} src="https://i.ibb.co/Y2dWYcg/1h-Fww-QAW45673-VGKr-MPE2q-Q.png" alt="" />
            <Link to="/"><button className='btn bg-[#5ab337d6] border-none'>Back To Home</button></Link>
        </div>
    );
};



export default ErrorPage;