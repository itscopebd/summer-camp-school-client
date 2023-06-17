import React from 'react';
import { Link } from 'react-router-dom';

const MyClasses = () => {
    return (
        <div className='w-full mx-auto px-10'>
            <div className='flex justify-between'>
            <h3 className='font-bold text-3xl'>My Classes</h3>
            <Link to="addclass"  className=' hover:text-black transition btn btn-sm bg-[#5ab337d6] text-white capitalize text-lg'>Add A Class</Link>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                   
                    <thead>
                        <tr>
                        
                            <th className='font-bold text-lg'>No..</th>
                            <th className='font-bold text-lg'>Status</th>
                            <th className='font-bold text-lg'>Total Enrolled Students</th>
                            <th className='font-bold text-lg'>Feedback</th>
                            <th className='font-bold text-lg'>Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                     


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyClasses;