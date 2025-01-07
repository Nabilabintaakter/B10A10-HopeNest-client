
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useContext } from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) return <LoadingSpinner></LoadingSpinner>
    if (!user) {
        return <Navigate state={{ from: location.pathname }} to='/login'></Navigate>
    }
    else {
        return children;
    }
};

export default PrivateRoute;