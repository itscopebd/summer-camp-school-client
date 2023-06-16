
import { useContext, useEffect, useState } from 'react';
import ClassesCard from '../../components/ClassesCard';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../AuthContext/AuthProvider';



const ClassesPage = () => {
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await fetch("https://server-site-theta.vercel.app/cource/client")
        return res.json()
    })
    
const {user}= useContext(AuthContext)
   
    const [checkUsers, setCheckUsers] = useState({})
    useEffect(() => {
        fetch(`https://server-site-theta.vercel.app/users/roleCheck/${user?.email}`)
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