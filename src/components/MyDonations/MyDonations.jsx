import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaTag, FaMoneyBillWave, FaClock, FaCalendarAlt, FaClipboardList } from "react-icons/fa";
import { Link } from 'react-router-dom';

const myDonation = () => {
    const { user, setLoading } = useContext(AuthContext);
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/myDonations?email=${user.email}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setDonations(data);
                    setLoading(false);
                })
                .catch(() => setLoading(false));
        }
    }, [user?.email]);


    return (
        <div className="mb-14 md:my-14 lg:mb-20 font-sans w-[95%] mx-auto max-w-7xl">
            <div className="flex justify-center items-center mb-10 md:mb-12">
                <div className="text-center">
                    <h1 className="font-semibold text-[#374151] text-3xl md:text-4xl mb-2 md:mb-4">Manage My donations</h1>
                    <p className="text-sm md:text-base font-sans text-[#1B1A1AB3] w-full md:w-[70%] mx-auto">View and manage the donations you’ve created. Update details, delete donations, or review essential information—all in one place.</p>
                </div>
            </div>

            {/* Make table scrollable on smaller screens */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    donations.map(donation =>
                        <div key={donation._id} className="card bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transform group ">
                        {/* Image Section */}
                        <div className="relative">
                            <img
                                src={donation.thumbnail}
                                alt="Donation Thumbnail"
                                className="w-full h-56 object-cover group-hover:scale-105 transition-all duration-500"
                            />
                            <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-md shadow-md">
                                {donation?.type}
                            </div>
                        </div>
                        <div className="p-5 space-y-4">
                            <h2 className="text-lg font-bold text-gray-800 flex items-center">
                                <FaTag className="text-orange-500 mr-2" />
                                {donation.title}
                            </h2>
                            <p className="text-sm xl:text-base text-gray-700 flex items-center">
                                <FaMoneyBillWave className="text-green-500 mr-2" />
                                <span className="font-medium">Donated Amount:</span> 
                                <span className="ml-1">{donation?.amount} Tk.</span>
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
                    </div>

                    )
                }
            </div>
        </div>
    );
};

export default myDonation;
