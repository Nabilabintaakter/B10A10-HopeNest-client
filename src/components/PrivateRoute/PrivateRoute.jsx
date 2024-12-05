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
            <div className='min-h-[calc(100vh-365px)] flex justify-center items-center'>
                <Watch
                    visible={true}
                    height="80"
                    width="80"
                    radius="48"
                    color="#FFA71D"
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