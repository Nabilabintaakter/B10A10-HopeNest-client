import logo from '../../assets/logo.png';
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";

const Navbar = () => {

    const links = <>
        <li><NavLink
            to="/"
            className={({ isActive }) =>
                isActive && "text-[#EB712E] font-bold drop-shadow-[0_5px_5px_rgba(0,0,0.4,0.4)]"
            }
        >Home</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            isActive && "text-[#EB712E] font-bold drop-shadow-[0_5px_5px_rgba(0,0,0.4,0.4)]"
        } to='/campaigns'>All Campaign</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            isActive && "text-[#EB712E] font-bold drop-shadow-[0_5px_5px_rgba(0,0,0.4,0.4)]"
        } to='/addCampaign'>Add New Campaign</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            isActive && "text-[#EB712E] font-bold drop-shadow-[0_5px_5px_rgba(0,0,0.4,0.4)]"
        } to='/myCampaign'>My Campaign</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            isActive && "text-[#EB712E] font-bold drop-shadow-[0_5px_5px_rgba(0,0,0.4,0.4)]"
        } to='/myDonations'>My Donations</NavLink></li>
    </>
    return (
        <div className="navbar font-sans bg-white/30 z-50 sticky backdrop-blur-md px-5 lg:px-0 lg:w-[90%] mx-auto ">
            <div className="navbar-start">
                <div className="drawer w-[100%] lg:hidden">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className="drawer-button text-xl"><IoMenu /></label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay bg-white"></label>
                        <ul className="menu bg-opacity-100 bg-white text-base-content min-h-full w-[60%] md:w-[40%] p-4">
                            {/* Sidebar content here */}
                            {links}
                        </ul>
                    </div>
                </div>
                <Link to='/'><img className='w-72 md:w-44 ' src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex gap-2 justify-end">
                <Link to='/login'>
                    <button className='px-5 py-[6px] rounded-md border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-500'>
                        Login
                    </button>
                </Link>
                <Link to='/signUp'>
                    <button className='px-5 py-2 rounded-md bg-green-500 text-white hover:bg-green-600 transition-all duration-500'>
                        Sign Up
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;