import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthProvider';
import UseInstructor from '../hooks/useInstructor';
import { Navigate, useLocation } from 'react-router-dom';

const InstructorRoute = () => {
    const { user, loading } = useContext(AuthContext);
    const [isInstructor, isInstructorLoading] = UseInstructor();
    const location = useLocation();


    if (loading || isInstructorLoading) {
        return <progress className="progress w-56"></progress>
    }
    if (user && isInstructor.instructor) {
        
        return children;

    }
    else {
        return <Navigate to="/" state={{ from: location }} replace></Navigate>
    }
};

export default InstructorRoute;