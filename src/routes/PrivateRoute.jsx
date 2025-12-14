import React, { use } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../providers/AuthContext';

const PrivateRoute = ({children}) => {
    const {user, loading} = use(AuthContext)

    if(loading){
        return <div className='text-center mt-5'><span className="loading loading-spinner loading-xl"></span></div>
    }

    if(!user){
        return <Navigate state={location?.pathname} to="/login"></Navigate> 
    }

    return children;
};

export default PrivateRou