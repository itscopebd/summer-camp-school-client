import { useEffect, useState } from 'react';
import ClassesCard from '../../components/ClassesCard';

const ClassesPage = () => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/alldata")
            .then(res => res.json())
            .then(data => {
                setClasses(data)
            })
    }, []);
    return (
        <div className='container mx-auto my-10'>
            <div className='grid gap-10 grid-cols-3'>
                {
                    classes.map(classe => <ClassesCard classe={classe} key={classe._id}></ClassesCard>)
                }
            </div>
        </div>
    );
};

export default ClassesPage;