import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../AuthContext/AuthProvider';





const MyCart = () => {
    const { user } = useContext(AuthContext)

    const { data: selectedclasses = [], refetch } = useQuery(['selectedclasses'], async () => {
        const res = await fetch(`http://localhost:5000/carts/${user.email}`)
        return res.json()
    });

    const handleSelectedClassDelete = (id) => {
        const url = `http://localhost:5000/carts/delete/${id}`
        fetch(url, {
            method: "DELETE"
        }).then(data => {
            refetch();
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div className='mx-auto w-full'>
            <h3 className=' text-left text-3xl font-bold ml-5 mb-4 text-[#5ab337d6]'>All Selected Class</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra text-center">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='font-extrabold text-lg'>No.</th>
                            <th className='font-extrabold text-lg'>Image</th>
                            <th className='font-extrabold text-lg'>Name</th>
                            <th className='font-extrabold text-lg'>Price</th>
                            <th className='font-extrabold text-lg'>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            selectedclasses.map((selectedclasse, index) => <tr key={selectedclasse._id}>

                                <td className='font-bold'>{index + 1}</td>
                                <td> <img style={{ width: "100px", height: "100px" }} src={selectedclasse?.classImage} alt="" /> </td>
                                <td className='font-bold'> Instructor: {selectedclasse?.instructor} </td>
                                <td className='font-bold'> ${selectedclasse?.price} </td>
                                <td> <button className='btn bg-[#5ab337d6] btn-sm text-white hover:text-black' onClick={() => handleSelectedClassDelete(selectedclasse._id)}>Delete</button>
                                    <button className='ml-2 btn bg-[#5ab337d6] btn-sm text-white hover:text-black'>Pay</button> </td>



                            </tr>
                            )

                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;