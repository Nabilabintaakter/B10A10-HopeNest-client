import logo from '../../assets/logo.png';
import { Link, Navigate, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { BiLogOut } from 'react-icons/bi';
import userPro from '../../assets/userPro.webp'

const Navbar = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    const { pathname } = useLocation()
    const { user, handleSignOut } = useContext(AuthContext);
    const links = <>
        <li><NavLink onClick={scrollToTop}
            to="/"
            className={({ isActive }) =>
                isActive && "text-[#FFA415] font-bold drop-shadow-[0_5px_5px_rgba(0,0,0.4,0.4)]"
            }
        >Home</NavLink></li>
        <li><NavLink onClick={scrollToTop} className={({ isActive }) =>
            isActive && "text-[#FFA415] font-bold drop-shadow-[0_5px_5px_rgba(0,0,0.4,0.4)]"
        } to='/campaigns'>All Campaign</NavLink></li>
        <li><NavLink onClick={scrollToTop} className={({ isActive }) =>
            isActive && "text-[#FFA415] font-bold drop-shadow-[0_5px_5px_rgba(0,0,0.4,0.4)]"
        } to='/addCampaign'>Add New Campaign</NavLink></li>
        <li><NavLink onClick={scrollToTop} className={({ isActive }) =>
            isActive && "text-[#FFA415] font-bold drop-shadow-[0_5px_5px_rgba(0,0,0.4,0.4)]"
        } to='/myCampaign'>My Campaign</NavLink></li>
        <li><NavLink onClick={scrollToTop} className={({ isActive }) =>
            isActive && "text-[#FFA415] font-bold drop-shadow-[0_5px_5px_rgba(0,0,0.4,0.4)]"
        } to='/myDonations'>My Donations</NavLink></li>
    </>
    return (
        <div className='font-sans bg-white/80 z-50 fixed backdrop-blur-md w-full'>
            <div className="navbar w-[98%]  mx-auto">
                <div className="navbar-start">
                    <div className="drawer w-[100%] lg:hidden">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer" className="drawer-button"><IoMenu className='text-2xl' /></label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay bg-white"></label>
                            <ul className="menu bg-opacity-100 bg-white text-base-content min-h-full w-[60%] md:w-[40%] p-4">
                                {/* Sidebar content here */}
                                {links}
                            </ul>
                        </div>
                    </div>
                    <Link to='/'><div className='w-36 md:w-44'><img className='w-full' src={logo} alt="" /></div></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end flex justify-end">
                    {user ? (
                        <div className="relative group">
                            <div className="btn btn-primary btn-circle avatar">
                                <div className="w-10 md:w-12 rounded-full">
                                    <img
                                        className="object-cover"
                                        alt="User Profile"
                                        src={user?.photoURL || userPro}
                                    />
                                </div>
                            </div>

                            {/* Dropdown menu on hover */}
                            <ul
                                className="hidden group-hover:flex absolute -right-3 w-56 px-2 py-4 shadow-lg text-black bg-gradient-to-br from-gray-100 to-gray-300 flex-col rounded-md z-50"
                            >
                                <div className="flex flex-col items-center gap-4 mb-4">
                                    <h1
                                        className="text-gray-800 text-xl font-bold font-sans text-center"
                                    >
                                        {user?.displayName}
                                    </h1>
                                    <Link to="/">
                                        <button
                                            onClick={handleSignOut}
                                            className="btn btn-sm lg:btn-md bg-gradient-to-r from-red-400 to-red-600 text-white font-bold font-sans hover:from-red-600 hover:to-red-800 hover:text-white transition-all duration-500 rounded-sm shadow-md border-none flex items-center justify-center gap-2 w-full"
                                        >
                                            <BiLogOut className="text-xl" />
                                            Log Out
                                        </button>
                                    </Link>
                                </div>
                            </ul>

                        </div>
                    ) : (
                        <div className="flex items-center justify-end gap-2">
                            <Link to="/login">
                                <button className="px-4 md:px-5 py-[7px] rounded-md border-[1px] border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-500">
                                    Login
                                </button>
                            </Link>
                            <Link to="/signUp">
                                <button className="w-auto px-4 md:px-5 py-2 rounded-md bg-green-500 text-white hover:bg-green-600 transition-all duration-500">
                                    Sign Up
                                </button>
                            </Link>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Navbar;