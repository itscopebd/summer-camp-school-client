import React from 'react';
import { useContext } from 'react';
import { AuthContext } from './../AuthContext/AuthProvider';
import UseAdmin from './../hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = UseAdmin();
    const location = useLocation();
    console.log(isAdmin)
    if (loading || isAdminLoading) {
        return <progress className="progress w-56"></progress>
    }
    if (user && isAdmin.admin) {
     
        return children;
      
    }
    else{
        return <Navigate to="/" state={{ from: location }} replace></Navigate>
    }
    
};

export default AdminRoute;