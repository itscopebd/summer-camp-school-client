import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../AuthContext/AuthProvider';
import { toast } from 'react-toastify';
const imageHostToken = import.meta.env.VITE_Image_host_Token;
const AddClass = () => {
    const { user } = useContext(AuthContext);
 
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const hostUrl = `https://api.imgbb.com/1/upload?key=${imageHostToken}`;
    
    const onSubmit = data => {
        
        console.log(data)
        const formData = new FormData();
        formData.append('image', data.image[0])

        console.log(formData)

        fetch(hostUrl, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                // const imgUrl= imgResponse.
                const imgUrl=imgResponse.data.display_url;
                
                const {className,userEmail,userName,price,availableSeats}=data;
                const newItems={className,userEmail,userName,availableSeats,price:parseFloat(price),classImage:imgUrl,status:"Pending"}
                fetch("http://localhost:5000/cource",{
                    method:"POST",
                    headers:{
                        "content-type":"application/json"
                    },
                    body:JSON.stringify(newItems)
                })
                .then(res=>res.json())
                .then(data=>{
                    toast.success("Added Success !")
                })
            })
    }
    return (
        <div className='w-6/12 mx-auto'>
            <h4 className='text-3xl font-bold my-3' >Add Class</h4>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                <div className="mb-2">
                    <label
                        for="classname"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Class Name
                    </label>
                    <input
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        required {...register("className", { required: true })} />
                </div>

                <div className="mb-2">
                    <label
                        for="classImage"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Class Image
                    </label>
                    <input
                        type="file"
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        required {...register("image", { required: true })} />
                </div>

                <div className="mb-2">
                    <label
                        for="instructorName"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Instructor Name
                    </label>
                    <input
                        type="text" readOnly value={user?.displayName}
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        required {...register("userName", { required: true })} />
                </div>

                <div className="mb-2">
                    <label
                        for="instructorEmail"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Instructor Email
                    </label>
                    <input
                        type="text" readOnly value={user?.email}
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        required {...register("userEmail", { required: true })} />
                </div>
                <div className="mb-2">
                    <label
                        for="availableSeats"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Available Seats
                    </label>
                    <input
                        type="number"
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        required {...register("availableSeats", { required: true })} />
                </div>
                <div className="mb-2">
                    <label
                        for="price"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Price
                    </label>
                    <input
                        type="number"
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        required {...register("price", { required: true })} />
                </div>

                <div className="mt-6 w-auto">
                    <button c type='submit' className="px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddClass;