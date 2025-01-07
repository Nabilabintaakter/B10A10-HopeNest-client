import { Link } from 'react-router-dom';

const CampaignCard = ({ campaign }) => {
    return (
        <Link to={`/campaigns/${campaign?._id}`} className="bg-white rounded-md overflow-hidden hover:shadow-[0_4px_8px_0_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col group">
    {/* Thumbnail Section */}
    <div className="relative w-full h-36 sm:h-44">
        <img
            src={campaign?.thumbnail}
            alt="Campaign Thumbnail"
            className="w-full h-full object-cover"
        />
        <div
            className="absolute top-4 left-4 bg-orange-100 text-orange-600 px-3  border-[1px] border-orange-500 rounded-full text-xs font-medium cursor-pointer"
        >
            {campaign?.type}
        </div>
    </div>

    {/* Card Content */}
    <div className="p-3 flex flex-col justify-between flex-grow">
        {/* Title Section */}
        <h2
            className="text-sm md:text-base font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-200 "
        >
            {campaign?.title}
        </h2>
        {/* Amount and Deadline */}
        <div className="">
            <div>
                <p className='text-gray-600 text-xs block md:hidden 2xl:block'>{campaign?.description.slice(0, 51)}...</p>
                <p className='text-gray-600 hidden text-sm md:block xl:hidden'>{campaign?.description.slice(0, 60)}...</p>
                <p className='text-gray-600 text-sm hidden xl:block 2xl:hidden'>{campaign?.description.slice(0, 90)}...</p>
            </div>
        </div>

        {/* Action Button */}
        <div className="">
        <div className="flex justify-between items-center text-gray-700 mt-2">
                <div className="text-lg font-semibold">
                    <span className="text-[#F85606]">৳{campaign?.amount}</span>
                </div>
                <div className="text-sm">
                    <span className="font-medium text-green-500">{campaign?.deadline}</span>
                </div>
            </div>
            <Link
                to={`/campaigns/${campaign?._id}`}
                className="w-full block bg-blue-600 hover:bg-blue-700 text-white py-1 md:py-2 rounded-md text-center transition-colors duration-300 mt-2"
            >
                See More
            </Link>
        </div>
    </div>
</Link>

    );
};

export default CampaignCard;