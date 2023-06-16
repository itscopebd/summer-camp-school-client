import React from 'react';
import ClassesPage from '../pages/ClassesPage/ClassesPage';

const PopularClasses = ({title}) => {
    return (
        <div>
         <h3 className='text-5xl font-bold text-center mt-20'>Popular <span className='text-[#5ab337d6]'>{title}</span></h3>
          <ClassesPage></ClassesPage>  
        </div>
    );
};

export default PopularClasses;