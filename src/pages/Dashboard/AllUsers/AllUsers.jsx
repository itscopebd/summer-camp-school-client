import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';
const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch("https://server-site-theta.vercel.app/users")
        return res.json()
    })

// delete user 

    const handleDeleteUser = (id) => {
        fetch(`https://server-site-theta.vercel.app/users/delete/${id}`, {
            method: "DELETE"
        })
        .then(data => {
            refetch()
                toast.success("Delete Success !")
            }).catch(error=>{
                console.log(error)
            })
    }

// make admin 

    const handleAdmin = (id) => {
        fetch(`https://server-site-theta.vercel.app/users/admin/${id}`, {
            method: "PATCH"
        })
        .then(data => {
            refetch()
                toast.success("Admin Create Success !")
            }).catch(error=>{
                console.log(error)
            })
    }

// make instructor 

    const handleInstructor = (id) => {
        console.log(id)
        fetch(`https://server-site-theta.vercel.app/users/instructor/${id}`, {
            method: "PATCH"
        })
        .then(data => {
            refetch()
                toast.success("Instructor Create Success !")
            }).catch(error=>{
                console.log(error)
            })
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
                                <td> {
                                    user.role === 'admin' ? <> <button className='btn btn-primary btn-sm capitalize' disabled>Admin</button> </> :
                                        <><button onClick={() => handleAdmin(user._id)} className='btn btn-primary btn-sm capitalize'>Make Admin</button></>
                                }

                                    {
                                        user.role === 'instructor' ? <> <button disabled className='btn btn-primary btn-sm capitalize ml-5'>Instructor</button> </> :
                                            <><button onClick={()=>handleInstructor(user._id)} className='btn btn-primary btn-sm capitalize ml-5'>Make Instructor</button></>
                                    }
                                </td>

                                <td> <button onClick={() => handleDeleteUser(user._id)} className='btn btn-primary btn-sm'> <FaTrash></FaTrash> </button> </td>
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