import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrash } from 'react-icons/fa';
const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch("http://localhost:5000/users")
        return res.json()
    })


    const handleDeleteUser = (id) => {
        console.log(id)
    }

    return (
        <div className='mx-auto'>
            <h3 className=' text-left text-3xl font-bold ml-5'>All User</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, index) => <tr key={user._id}>

                                <td>{index + 1}</td>
                                <td>{user.userName}</td>
                                <td>{user.userEmail}</td>
                                <td>Admin</td>
                                <td> <button onClick={() => handleDeleteUser(user._id)}> <FaTrash></FaTrash> </button> </td>
                            </tr>
                            )

                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;