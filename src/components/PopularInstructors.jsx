import { useEffect, useState } from 'react';

const PopularInstructors = ({title}) => {


    const [instructors, setInstructor] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/users/instructors")
            .then(res => res.json())
            .then(data => {
                setInstructor(data);
                console.log(data)
            }).catch(error => {
                console.log(error)
            })
    }, []);
    

    return (
        <>
            <h3 className='text-5xl font-bold text-center mt-20'>Popular <span className='text-[#5ab337d6]'>{title}</span></h3>
            <div className='container mx-auto my-10'>
                <div className='grid gap-10  md:grid-cols-2 lg:grid-cols-3 mt-20'>

                    {
                        instructors.slice(0, 6).map(instructor => <>

                            <div className="card bg-base-100 shadow-xl">
                                <figure><img className='w-full h-72' src={instructor?.userImage} alt="Shoes" /></figure>
                                <div className="card-body">
                                    {/* <h2 className="card-title">Name: {instructor?.userName}</h2> */}
                                    <h4 className='font-bold'>Instructor: {instructor?.userName}</h4>
                                   

                                </div>
                            </div>

                        </>)
                    }

                </div>
            </div >
        </>
    );
};

export default PopularInstructors;