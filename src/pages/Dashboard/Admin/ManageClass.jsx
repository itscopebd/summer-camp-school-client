import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManageClass = () => {
    const { data: cources = [], refetch } = useQuery(['cources'], async () => {
        const res = await fetch("http://localhost:5000/cource")
        return res.json()
    })

    // approved 

    const handleApproved = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/cource/approve/${id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                refetch()
            })
            .catch(error => console.log(error))
    }

    // Denied 

    const handleDenied = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/cource/denied/${id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                refetch()
            })
            .catch(error => console.log(error))
    }



return (
    <div className='mx-auto text-center'>
        <h3 className=' text-left text-3xl font-bold ml-5 mb-5'>All Instructor Class</h3>
        <div className="overflow-x-auto">
            <table className="table table-zebra text-center">
                {/* head */}
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Class Image</th>
                        <th>Class Name</th>
                        <th>Instructor Name</th>
                        <th>Instructor Email</th>
                        <th>Available Seats</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        cources.map((cource, index) => <tr key={cource._id}>

                            <td>{index + 1}</td>
                            <td> <img style={{ width: '100px', height: "100px" }} src={cource?.classImage} alt="" /> </td>
                            <td>{cource?.className}</td>
                            <td>{cource?.userName}</td>
                            <td>{cource?.userEmail}</td>
                            <td>{cource?.availableSeats}</td>
                            <td>${cource?.price}</td>

                            <td>
                                <button className='btn btn-primary btn-sm capitalize'>Pending</button>
                                {
                                    cource.status === 'approved' || cource.status === 'denied' ? <>  <button disabled className='btn btn-primary btn-sm capitalize mx-1'>Approved</button> <button disabled className='btn btn-primary btn-sm capitalize'>Denied</button>  </> :
                                        <><button onClick={() => handleApproved(cource._id)} className='btn btn-primary btn-sm capitalize mx-1' >Approved</button> <button onClick={() => handleDenied(cource?._id)} className='btn btn-primary btn-sm capitalize' >Denied</button></>
                                }
                                {/* <button className='btn btn-primary btn-sm capitalize mx-3'>Approved</button>
                                    <button className='btn btn-primary btn-sm capitalize'>Denied</button> */}
                            </td>

                        </tr>

                        )
                    }



                </tbody>
            </table>
        </div>
    </div>
);
};

export default ManageClass;