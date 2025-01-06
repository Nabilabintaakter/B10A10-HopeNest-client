import { Link, useLoaderData } from 'react-router-dom';
import { FaSortAmountDownAlt } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { Zoom } from 'react-awesome-reveal';

const AllCampaigns = () => {
    const allCampaigns = useLoaderData();
    const [campaigns, setCampaigns] = useState(allCampaigns);


    const handleSort = () => {
        fetch('http://localhost:5000/sortAllCampaigns')
            .then(res => res.json())
            .then(data => {
                setCampaigns(data);
            })
    }
    useEffect(() => {
        document.title = 'AllCampaigns | HopeNest';
    }, [])
    return (
        <div className='dark:bg-gradient-to-tr dark:from-gray-900 dark:to-gray-700'>
            <div className="py-10 md:py-14 lg:pb-20 font-sans w-[95%] mx-auto max-w-7xl">
                <div className="flex justify-center items-center mb-6 md:mb-3">
                    <Zoom triggerOnce duration={2000}>
                    <div className="text-center">
                        <h1 className="font-semibold text-[#374151] dark:text-white text-3xl md:text-4xl mb-2 md:mb-4">Explore All Campaigns</h1>
                        <p className="text-sm md:text-base font-sans text-[#1B1A1AB3] dark:text-gray-300 w-full md:w-[70%] mx-auto">Explore a variety of impactful campaigns dedicated to making a difference. Your support can help bring positive change to communities and causes in need.</p>
                    </div>
                    </Zoom>
                </div>
                <div className='flex justify-center md:justify-end mb-2'>
                    <button onClick={handleSort} className='btn  bg-gradient-to-r from-blue-300 to-pink-400 border-none hover:text-white transition-all duration-300'><FaSortAmountDownAlt />Sort by Amount</button>
                </div>

                {/* Make table scrollable on smaller screens */}
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse bg-white shadow-md rounded-lg">
                        <thead>
                            <tr className="bg-[#e88f30] text-left">
                                <th className="px-4 py-2 text-white">SL No.</th>
                                <th className="px-4 py-2 text-white">Campaign Title</th>
                                <th className="px-4 py-2 text-white hidden md:table-cell">Type</th>
                                <th className="px-4 py-2 text-white">Minimum Amount (Tk.)</th>
                                <th className="px-4 py-2 text-white hidden md:table-cell">Deadline</th>
                                <th className="px-4 py-2 text-white">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {campaigns.map((campaign, index) => (
                                <tr
                                    key={campaign._id}
                                    className={`border-b ${index % 2 === 0 ? 'bg-[#fcaa29] bg-opacity-10' : 'bg-[#fcaa29] bg-opacity-20'} hover:bg-[#fcaa29] hover:bg-opacity-30`}
                                >
                                    <td className="px-4 py-4 font-bold">{index + 1}.</td>
                                    <td className="px-4 py-4">{campaign.title}</td>
                                    <td className="px-4 py-4 hidden md:table-cell">{campaign.type}</td>
                                    <td className="px-4 py-4">{campaign.amount}</td>
                                    <td className="px-4 py-4 hidden md:table-cell">{campaign.deadline}</td>
                                    <td className="px-4 py-4">
                                        <Link to={`/campaigns/${campaign._id}`} className="text-[#fcaa29] hover:underline">See More</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllCampaigns;
