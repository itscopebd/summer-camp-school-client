import { useEffect, useState } from 'react';
import InstructorCard from '../../components/InstructorCard';
import { useQuery } from '@tanstack/react-query';

const Instructors = () => {
    const [instructors, setInstructor] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/users/instructors")
            .then(res => res.json())
            .then(data => {
                setInstructor(data)
            })
    }, []);
    // const { data: instructor = [], refetch } = useQuery('instructors', async () => {
    //     const res = await fetch(`http://localhost:5000/users/instructors`)
    //     return res.json()
    // })

    console.log(instructors)

    return (
        <div className='container mx-auto my-10'>
            <div className='grid gap-10 grid-cols-3'>
                {
                    instructors.map(instructor => <InstructorCard instructor={instructor} key={instructor._id}></InstructorCard>)
                }
               
            </div>
        </div>
    );
};

export default Instructors;