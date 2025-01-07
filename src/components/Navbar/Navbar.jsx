import logo from '../../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { IoMenu, IoMoon, IoSunny } from "react-icons/io5";
import { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { BiLogOut } from 'react-icons/bi';
import userPro from '../../assets/userPro.webp';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import Container from '../Container/Container';

const Navbar = () => {
    const { dark, darkModeHandler } = useContext(AuthContext);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const { user, handleSignOut } = useContext(AuthContext);
    const links = <>
        <li><NavLink onClick={scrollToTop}
            to="/"
            className={({ isActive }) =>
                isActive ? "text-[#FFA415] font-bold drop-shadow-[0_5px_5px_rgba(0,0,0.4,0.4)]" : ''
            }
        >Home</NavLink></li>
        <li><NavLink onClick={scrollToTop} className={({ isActive }) =>
            isActive ? "text-[#FFA415] font-bold drop-shadow-[0_5px_5px_rgba(0,0,0.4,0.4)]" : ''
        } to='/campaigns'>All Campaign</NavLink></li>
        <li><NavLink onClick={scrollToTop} className={({ isActive }) =>
            isActive ? "text-[#FFA415] font-bold drop-shadow-[0_5px_5px_rgba(0,0,0.4,0.4)]" : ''
        } to='/aboutUs'>About Us</NavLink></li>
        <li><NavLink onClick={scrollToTop} className={({ isActive }) =>
            isActive ? "text-[#FFA415] font-bold drop-shadow-[0_5px_5px_rgba(0,0,0.4,0.4)]" : ''
        } to='/addCampaign'>Add New Campaign</NavLink></li>
        <li><NavLink onClick={scrollToTop} className={({ isActive }) =>
            isActive ? "text-[#FFA415] font-bold drop-shadow-[0_5px_5px_rgba(0,0,0.4,0.4)]" : ''
        } to='/myCampaign'>My Campaign</NavLink></li>
        <li><NavLink onClick={scrollToTop} className={({ isActive }) =>
            isActive ? "text-[#FFA415] font-bold drop-shadow-[0_5px_5px_rgba(0,0,0.4,0.4)]" : ''
        } to='/myDonations'>My Donations</NavLink></li>
    </>

    return (
        <div className='dark:bg-gray-700/90 dark:text-white font-sans bg-white/60 z-50 fixed backdrop-blur-md w-full'>
            <Container>
                <div className="navbar px-0">
                    <div className="navbar-start">
                        <div className="drawer w-[100%] lg:hidden">
                            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                {/* Page content here */}
                                <label htmlFor="my-drawer" className="drawer-button"><IoMenu className='text-3xl dark:text-white' /></label>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay bg-white"></label>
                                <ul className="menu bg-opacity-100 bg-white text-base-content min-h-full w-[40%]">
                                    {/* Sidebar content here */}
                                    {links}
                                </ul>
                            </div>
                        </div>
                        <Link to='/'><div className='w-44 hidden lg:block'><img className='w-full dark:bg-white p-2 rounded-tl-xl rounded-br-xl' src={logo} alt="" /></div></Link>
                    </div>
                    <div className="navbar-center ">
                        <ul className="hidden lg:flex menu menu-horizontal px-1">
                            {links}
                        </ul>
                        <Link to='/'><div className='w-44 block lg:hidden'><img className='w-full dark:bg-white p-2 rounded-tl-xl rounded-br-xl' src={logo} alt="" /></div></Link>
                    </div>
                    <div className="navbar-end flex justify-end">
                        <div className='mr-2 md:mr-4'>
                            <button
                                onClick={() => darkModeHandler()}
                                id="themeToggleBtn"
                                className={`p-2 rounded-full ${dark ? "bg-yellow-300" : "bg-blue-900"
                                    } transition-all duration-300`}
                            >
                                {dark ? (
                                    <IoSunny className="text-lg md:text-2xl text-white" />
                                ) : (
                                    <IoMoon className="text-lg md:text-2xl text-white" />
                                )}
                            </button>
                            <ReactTooltip
                                anchorId="themeToggleBtn"
                                place="top"
                                content={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                                className={dark ? "tooltip-light" : "tooltip-dark"}
                            />

                        </div>
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
                                <div className='flex flex-col md:flex-row gap-1'>
                                    <Link to='/login' id='loginBtn' className="w-20 md:w-24 btn btn-sm md:btn-md rounded-md border-[1px] border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-500">
                                        Login
                                    </Link>
                                    <ReactTooltip
                                        anchorId="loginBtn"
                                        place='top'
                                        content='Click to log in to your account!'
                                        className="tooltip-custom logIn"
                                    />

                                    <Link to="/signUp"id='signUpBtn'>
                                        <button className="hidden md:block w-[82px] md:w-24 btn btn-sm md:btn-md rounded-md bg-green-500 text-white hover:bg-green-600 transition-all duration-500 border-none">
                                            Sign Up
                                        </button>
                                        <ReactTooltip
                                            anchorId="signUpBtn"
                                            place='top'
                                            content='Click to create your account!'
                                            className="tooltip-custom logOut"
                                        />
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default Navbar;