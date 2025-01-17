import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaTag, FaMoneyBillWave, FaClock, FaCalendarAlt, FaClipboardList } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Fade, Zoom } from 'react-awesome-reveal';
import Container from '../Container/Container';

const myDonation = () => {
    const { user, setLoading, dark } = useContext(AuthContext);
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://b10-a10-hope-nest-server.vercel.app/myDonations?email=${user.email}`)
                .then((res) => res.json())
                .then((data) => {
                    setDonations(data);
                    setLoading(false);
                })
                .catch(() => setLoading(false));
        }
    }, [user?.email]);

    useEffect(() => {
        document.title = 'MyDonations | HopeNest';
    }, [])
    return (

        <Container>
            <div className="py-8 md:py-10 lg:pb-16 font-sans">
                <Zoom triggerOnce duration={2000}>
                    <div className="flex justify-center items-center mb-12 md:mb-14">
                        <div className="text-center">
                            <h1 className="font-semibold text-[#374151] dark:text-white text-3xl md:text-4xl mb-2 md:mb-4">My Donation History</h1>
                            <p className="text-sm md:text-base font-sans text-[#1B1A1AB3] dark:text-gray-300 w-full md:w-[70%] mx-auto">
                                Explore and manage your past donations effortlessly. Keep track of your contributions, monitor the positive change you're creating, and continue to support the causes that matter most to you.
                            </p>
                        </div>
                    </div>
                </Zoom>

                {/* Conditional rendering based on donations */}
                {donations.length === 0 ? (
                    <Fade triggerOnce duration={2000}>
                        <div className="text-center mt-10 space-y-5 flex flex-col justify-center items-center">
                            {/* Icon */}
                            <div className="flex justify-center">
                                <div className="bg-red-100 text-red-500 p-3 rounded-full shadow-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
                                        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-11h2v6h-2zm0 8h2v2h-2z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Heading */}
                            <h2 className="text-lg italic md:text-3xl font-medium text-red-500 dark:text-white">
                                No Donations Yet
                            </h2>

                            {/* Subtitle */}
                            <p className="text-sm text-gray-400 dark:text-gray-400 max-w-md mx-auto leading-relaxed">
                                You haven't contributed yet, but it's never too late to start making a difference. Your kindness can light up someone's life!
                            </p>

                            {/* Button */}
                            <Link to="/campaigns">
                                <button className="mt-5 bg-orange-500 text-white text-sm md:text-base font-medium px-3 py-2 md:px-6 md:py-3 rounded-full shadow-md hover:bg-orange-600 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                                        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-2-9h4v-4h-4v4zm0 6h4v-2h-4v2z" />
                                    </svg>
                                    Explore Campaigns
                                </button>
                            </Link>
                        </div>
                    </Fade>
                ) : (
                    <Fade triggerOnce duration={2000}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {donations.map(donation => (
                                <Link key={donation._id} className=" bg-white overflow-hidden hover:shadow-[0_4px_8px_0_rgba(0,0,0,0.5)] transform group">
                                    {/* Image Section */}
                                    <div className="relative">
                                        <img
                                            src={donation.thumbnail}
                                            alt="Donation Thumbnail"
                                            className="w-full h-48 object-cover group-hover:scale-105 transition-all duration-500"
                                        />
                                        <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-md shadow-md">
                                            {donation?.type}
                                        </div>
                                    </div>
                                    <div className="p-4 space-y-2">
                                        <h2 className="text-lg font-bold text-gray-800 flex items-center">
                                            <FaTag className="text-orange-500 mr-2" />
                                            {donation.title}
                                        </h2>
                                        <p className="text-sm xl:text-base text-gray-700 flex items-center">
                                            <FaMoneyBillWave className="text-green-500 mr-2" />
                                            <span className="font-medium">Donated Amount:</span>
                                            <span className="ml-1">৳ {donation?.amount}</span>
                                        </p>
                                        <p className="text-sm xl:text-base text-gray-700 flex items-center">
                                            <FaCalendarAlt className="text-blue-500 mr-2" />
                                            <span className="font-medium">Donation Date:</span>
                                            <span className="ml-1">{new Date().toLocaleDateString()}</span>
                                        </p>
                                        <p className="text-sm xl:text-base text-gray-700 flex items-center">
                                            <FaClock className="text-red-500 mr-2" />
                                            <span className="font-medium">Deadline:</span>
                                            <span className="ml-1">{new Date(donation?.deadline).toLocaleDateString()}</span>
                                        </p>
                                        <p className="text-sm xl:text-base text-gray-700 flex items-center">
                                            <FaClipboardList className="text-purple-500 mr-2" />
                                            <span className="font-medium">Status:</span>
                                            <span className={`ml-1 font-bold text-green-600`}>
                                                Successful
                                            </span>
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </Fade>
                )}
            </div>
        </Container>

    );
};

export default myDonation;
