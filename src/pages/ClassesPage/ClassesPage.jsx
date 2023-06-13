
import { useContext, useEffect, useState } from 'react';
import ClassesCard from '../../components/ClassesCard';
import { useQuery } from '@tanstack/react-query';


const ClassesPage = () => {
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await fetch("http://localhost:5000/cource")
        return res.json()
    })

   
    const [checkUsers, setCheckUsers] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/users/roleCheck`)
            .then(res => res.json())
            .then(data => setCheckUsers(data))

    }, [])

    

    return (
        <div className='container mx-auto my-10'>
            <div className='grid gap-10 grid-cols-3'>
                {
                    classes.map(classe => <ClassesCard checkUsers={checkUsers} classe={classe} key={classe._id}></ClassesCard>)
                }
            </div>
        </div>
    );
};

export default ClassesPage;