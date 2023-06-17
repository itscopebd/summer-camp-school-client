import { useEffect, useState } from 'react';
import InstructorCard from '../../components/InstructorCard';


const Instructors = () => {
    const [instructors, setInstructor] = useState([])
    useEffect(() => {
        fetch("https://server-site-theta.vercel.app/users/instructors")
            .then(res => res.json())
            .then(data => {
                setInstructor(data);
                console.log(data)
            }).catch(error => {
                console.log(error)
            })
    }, []);
    // const { data: instructor = [], refetch } = useQuery('instructors', async () => {
    //     const res = await fetch(`https://server-site-theta.vercel.app/users/instructors`)
    //     return res.json()
    // })

    console.log(instructors)

    return (
        <>

            <div className='container mx-auto my-10'>
                <h3 className='text-4xl font-bold my-7 text-[#5ab337d6]'>Our Instructors</h3>
                <div className='grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    {
                        instructors.map(instructor => <InstructorCard instructor={instructor} key={instructor._id}></InstructorCard>)
                    }

                </div>
            </div>
        </>
    );
};

export default Instructors;