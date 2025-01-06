import { Tooltip as ReactTooltip } from 'react-tooltip';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

const CampaignCard = ({ campaign }) => {
    return (
        <div  className=" bg-white shadow-xl rounded-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col">
            {/* Thumbnail Section */}
            <div className="relative w-full h-44">
                <img
                    src={campaign?.thumbnail}
                    alt="Campaign Thumbnail"
                    className="w-full h-full object-cover"
                />
                <div
                    id={`campaignType-${campaign?._id}`}
                    className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold cursor-pointer"
                >
                    {campaign?.type}
                </div>
                <ReactTooltip
                    anchorId={`campaignType-${campaign?._id}`}
                    place="top"
                    content={`Category: ${campaign?.type}`}
                    className="tooltip-custom"
                />
            </div>

            {/* Card Content */}
            <div className="p-3 flex flex-col justify-between flex-grow">
                {/* Title Section */}
                <h2
                    id={`campaignTitle-${campaign?._id}`}
                    className="text-sm md:text-base font-medium text-gray-800 hover:text-blue-600 transition-colors duration-200 mb-4"
                >
                    {campaign?.title}
                </h2>
                {/* Amount and Deadline */}
                <div className="flex justify-between items-center text-gray-700 mb-4">
                    <div className="text-lg font-semibold">
                        <span className="text-[#F85606]">৳{campaign?.amount}</span> Raised
                    </div>
                    <div className="text-sm">
                        <span className="text-gray-500">Ends: </span>
                        <span className="font-medium">{campaign?.deadline}</span>
                    </div>
                </div>

                {/* Action Button */}
                <div className="mt-4">
                    <Fade triggerOnce duration={2000}>
                        <Link
                            id={`seeMore-${campaign?._id}`}
                            to={`/campaigns/${campaign?._id}`}
                            className="w-full block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md text-center transition-colors duration-300"
                        >
                            See More
                        </Link>
                        <ReactTooltip
                            anchorId={`seeMore-${campaign?._id}`}
                            place="bottom"
                            content="Click to view full campaign details"
                            className="tooltip-custom see"
                        />
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default CampaignCard;