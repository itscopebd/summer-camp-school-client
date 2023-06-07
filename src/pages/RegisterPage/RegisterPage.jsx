import React, { useContext, useState } from 'react';
import { FaEyeSlash,FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../AuthContext/AuthProvider';
import { toast } from 'react-toastify';
const RegisterPage = () => {
   
    const [visible, setVisible] = useState(false);
    const [cPassword, setCPassword] = useState('');
    const [cVisible, setCVisible] = useState(false);


   const {singIn,createUser}=useContext(AuthContext);

const singinWithGoogle=()=>{
    singIn()
    .then(res=>{
        toast("LogIn Success!! ")
    })
}


const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    const password= data.password;
    const cPassword=data.cpassword;
    console.log(password)
    console.log(cPassword)
    if(password !== cPassword){
        setCPassword("Password Don't Match!!"); 
       
    }else{
        createUser(data.email,password)
        .then(res=>{
           toast("Registration Success!! ")
        }).catch(error=>{
            toast("User Already Exist!! ")
        })
    }
  };

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
                    Sing Up
                </h1>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                    <div className="mb-2">
                        <label
                            for="name"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            required {...register("name")}/>
                    </div>
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            required {...register("email")}/>
                    </div>
                    <div className="mb-2 relative">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            
                            type={visible ? "text" : "password"}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            {...register("password", {
                                required: true,
                                pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])/

                            })}/>
                            {errors.password?.type === "required" && <p className='text-red-500 mt-2'>Password field is required</p>}
                                {errors.password?.type === "pattern" && <p className='text-red-500 mt-2'>Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:</p>}

                        <div onClick={() => setVisible(!visible)} className='absolute right-2 top-1/2 translate-y-1/2 cursor-pointer' >
                            {visible ? <> <FaEye></FaEye> </> : <FaEyeSlash></FaEyeSlash>}

                        </div>
                    </div>
                    <div className="mb-2 relative">
                        <label
                            for="cpassword"
                            className="block text-sm font-semibold text-gray-800"
                        >
                           Confirm Password
                        </label>
                        <input
                            
                            type={cVisible ? "text" : "password"} 
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            {...register("cpassword", {
                                required: true})}/>

                            {errors.cpassword?.type === "required" && <p className='text-red-500 mt-2'>Password field is required</p>}
                               { <p className='text-red-500 mt-2'>{cPassword}</p> }
                        <div onClick={() => setCVisible(!cVisible)} className='absolute right-2 top-1/2 translate-y-1/2 cursor-pointer' >
                            {cVisible ? <> <FaEye></FaEye> </> : <FaEyeSlash></FaEyeSlash>}

                        </div>
                    </div>

                    <div className="mb-2">
                        <label
                            for="photoUrl"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Photo Url
                        </label>
                        <input
                            type="url"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                             {...register("photourl",{ required: true})} />
                    </div>

                    <div className="mt-6">
                        <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            SingUp
                        </button>
                    </div>
                </form>
                <div className="relative flex items-center justify-center w-full mt-6 border border-t">
                    <div className="absolute px-5 bg-white">Or</div>
                </div>
                <div className="flex mt-4 gap-x-2">
                    <button onClick={singinWithGoogle}
                        type="button"
                        className="flex items-center justify-center w-5/12 mx-auto hover:bg-black hover:text-white p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            className="w-5 h-5 fill-current"
                        >
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                    </button>

                </div>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    You have an account?{" "}
                    <Link to="/login" className="font-medium text-purple-600 hover:underline"
                    >
                        LogIn
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;