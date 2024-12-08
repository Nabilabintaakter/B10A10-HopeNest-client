
import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from 'react-router-dom';
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

import { useEffect } from 'react';
import Swal from "sweetalert2";

const SignUp = () => {
    const { handleSignUp, setUser, handleUpdateProfile, setLoading,dark } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'SignUp | HopeNest';
    }, [])

    const handleSubmit = e => {
        setError('')
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;

        if (password.length < 6) {
            setError("Password must be at least 6 characters long!");
            return;
        }
        if (!/[a-z]/.test(password)) {
            setError("Password must contain at least one lowercase letter!");
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setError("Password must contain at least one uppercase letter!");
            return;
        }

        // sign up
        handleSignUp(email, password)
            .then(res => {
                setUser(res.user);
                setLoading(false);
                // update profile
                handleUpdateProfile(name, photo)
                    .then((res) => {
                        setLoading(false);
                        Swal.fire({
                            position: "top-center",
                            icon: "success",
                            title: "Successfully Registered!",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        setTimeout(() => {
                            navigate('/');
                        }, 2000);
                    })
                    .catch(err => {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: err.message.slice(10),
                            footer: 'Please verify ',
                        });
                        setUser(null);
                    });
            })
            .catch(err => {
                toast.error(`${err.message.slice(10)}`, {
                    position: "top-center",
                });
                setUser(null);
            });

    }
    return (
        <div className="bg-gray-50 dark:bg-gradient-to-tr dark:from-gray-900 dark:to-gray-700">
            <div
                className="font-sans pt-6 pb-10 lg:pt-10  lg:pb-20 relative flex flex-col items-center min-h-screen"
            >
                <div className="text-center mb-8 px-4">
                    <p className=" text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-white mb-2">Join HopeNest to create a positive impact!</p>
                    <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400">Please sign up to begin your journey.</p>
                </div>



                <div className="bg-white/30 dark:bg-white backdrop-blur-lg shadow-2xl rounded-lg w-[90%] md:w-[60%] lg:w-[40%] px-6 py-8 max-w-xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="form-control">
                            <label className="block text-lg font-semibold text-gray-800 mb-1">Name :</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                className="input input-bordered w-full py-3 px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="block text-lg font-semibold text-gray-800 mb-1">Email :</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full py-3 px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="block text-lg font-semibold text-gray-800 mb-1">Photo URL :</label>
                            <input
                                type="text"
                                name="photo"
                                placeholder="Enter your photo url"
                                className="input input-bordered w-full py-3 px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                required
                            />
                        </div>
                        <div className="form-control relative">
                            <label className="block text-lg font-semibold text-gray-800 mb-1">Password :</label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="Enter your password"
                                className="input input-bordered w-full py-3 px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                required
                            />
                            {
                                showPassword ? <button type='button' onClick={() => setShowPassword(!showPassword)} className='absolute bg-white border-none right-4 top-[50px]'><IoMdEyeOff className='text-lg' /></button>
                                    :
                                    <button type='button' onClick={() => setShowPassword(!showPassword)} className='absolute bg-white border-none right-4 top-[50px]'><IoMdEye className='text-lg' /></button>
                            }
                        </div>
                        {error && <p className='text-red-500 font-medium text-lg'>{error}</p>}
                        <div className="form-control mt-4">
                            <button
                                data-aos="fade-up"
                                data-aos-duration="1200"
                                data-aos-delay="200"
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded-md text-lg border-[1px] border-blue-600 font-medium hover:bg-white hover:text-blue-600 hover:border-[1px] hover:border-blue-600 duration-300 transition-all hover:font-bold"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                    <p className="text-center mt-6 text-gray-700">
                        Already have an account? Please
                        <NavLink
                            to="/login"
                            className="text-blue-600 ml-1 text-xl font-semibold hover:underline"
                        >
                            Login
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
