import React from 'react';
import { Link } from 'react-router-dom';

const RunningCampaigns = ({ campaigns }) => {
    return (
        <div className='my-8 md:my-13 lg:my-20 font-sans w-[90%] mx-auto max-w-6xl'>
            <div className="flex justify-center items-center mb-5 md:mb-8">
                <div className="text-center">
                    <h1 className="font-semibold text-[#374151] text-3xl md:text-4xl  mb-2 md:mb-4">Running Campaigns: Make an Impact Today</h1>
                    <p className="text-sm md:text-base font-sans text-[#1B1A1AB3] w-full md:w-[70%] mx-auto">Explore active campaigns needing your support! Contribute before their deadlines and make a meaningful impact today!</p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    campaigns.map(campaign =>
                        <div key={campaign._id} className="card bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                            <img
                                src={campaign.thumbnail}
                                alt="Campaign Thumbnail"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-lg font-bold text-gray-800 mb-2">
                                    {campaign.title}
                                </h2>
                                <p className="text-sm text-gray-600 mb-4">
                                    Ends in: <span className="font-medium text-gray-800">{campaign.deadline}</span>
                                </p>
                                <Link to={`/campaigns/${campaign._id}`}
                                    className="btn btn-sm bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md w-full"
                                >
                                    See More
                                </Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default RunningCampaigns;