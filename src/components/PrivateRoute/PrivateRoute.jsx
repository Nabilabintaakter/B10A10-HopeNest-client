import { Watch } from 'react-loader-spinner';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useContext } from 'react';

const PrivateRoute = ({ children }) => {
    const { user, loading, setLoading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        setLoading(true)
        return (
            <div className='min-h-screen flex justify-center items-center'>
                <Watch
                    visible={true}
                    height="80"
                    width="80"
                    radius="48"
                    color="#4fa94d"
                    ariaLabel="watch-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>
        )
    }
    if (!user) {
        return <Navigate state={{ from: location.pathname }} to='/login'></Navigate>
    }
    else {
        return children;
    }
};

export default PrivateRoute;