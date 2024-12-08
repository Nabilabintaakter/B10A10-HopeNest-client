import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Fade, Zoom } from 'react-awesome-reveal';
import { Tooltip as ReactTooltip } from 'react-tooltip';

const RunningCampaigns = ({ campaigns }) => {
    const { dark } = useContext(AuthContext);
    return (
        <div className='py-8 md:py-13 lg:py-20 font-sans w-[95%] mx-auto max-w-7xl'>
            <Zoom triggerOnce duration={2000}>
                <div className="flex justify-center items-center mb-8 md:mb-12 ">
                    <div className="text-center">
                        <h1 className="font-semibold text-[#374151] dark:text-white text-3xl md:text-4xl  mb-2 md:mb-4">Running Campaigns: Make an Impact Today</h1>
                        <p className="text-sm md:text-base font-sans text-[#1B1A1AB3] dark:text-gray-300 w-full md:w-[70%] mx-auto">Explore active campaigns needing your support! Contribute before their deadlines and make a meaningful impact today!</p>
                    </div>
                </div>
            </Zoom>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    campaigns.map(campaign =>
                        <div key={campaign._id} className="card bg-white shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col">
                            {/* Thumbnail Section */}
                            <div className="relative w-full h-56">
                                <img
                                    src={campaign.thumbnail}
                                    alt="Campaign Thumbnail"
                                    className="w-full h-full object-cover rounded-t-lg"
                                />
                                <div
                                    id={`campaignType-${campaign._id}`}
                                    className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold cursor-pointer"
                                >
                                    {campaign.type}
                                </div>
                                <ReactTooltip
                                    anchorId={`campaignType-${campaign._id}`}
                                    place="top"
                                    content={`Category: ${campaign.type}`}
                                    className="tooltip-custom"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="p-6 flex flex-col justify-between flex-grow">
                                {/* Title Section */}
                                <h2
                                    id={`campaignTitle-${campaign._id}`}
                                    className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-200 mb-4"
                                >
                                    {campaign.title}
                                </h2>
                                {/* Amount and Deadline */}
                                <div className="flex justify-between items-center text-gray-700 mb-4">
                                    <div className="text-lg font-semibold">
                                        <span className="text-green-500">৳{campaign.amount}</span> Raised
                                    </div>
                                    <div className="text-sm">
                                        <span className="text-gray-500">Ends: </span>
                                        <span className="font-medium">{campaign.deadline}</span>
                                    </div>
                                </div>

                                {/* Action Button */}
                                <div className="mt-4">
                                    <Fade triggerOnce duration={2000}>
                                        <Link
                                            id={`seeMore-${campaign._id}`}
                                            to={`/campaigns/${campaign._id}`}
                                            className="w-full block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md text-center transition-colors duration-300"
                                        >
                                            See More
                                        </Link>
                                        <ReactTooltip
                                            anchorId={`seeMore-${campaign._id}`}
                                            place="bottom"
                                            content="Click to view full campaign details"
                                            className="tooltip-custom see"
                                        />
                                    </Fade>
                                </div>
                            </div>
                        </div>

                    )
                }
            </div>
        </div>
    );
};

export default RunningCampaigns;