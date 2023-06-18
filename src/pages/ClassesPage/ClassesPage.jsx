
import { useContext, useEffect, useState } from 'react';
import ClassesCard from '../../components/ClassesCard';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../AuthContext/AuthProvider';



const ClassesPage = () => {
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await fetch("http://localhost:5000/cource/client")
        return res.json()
    })
    
const {user}= useContext(AuthContext)
   
    const [checkUsers, setCheckUsers] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/users/roleCheck/${user?.email}`)
            .then(res => res.json())
            .then(data => setCheckUsers(data))

    }, [])

    console.log(checkUsers)

    return (
        <div className='container mx-auto my-10'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    classes.map(classe => <ClassesCard checkUsers={checkUsers} classe={classe} key={classe._id}></ClassesCard>)
                }
            </div>
        </div>
    );
};

export default ClassesPage;