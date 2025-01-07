import React from 'react';
import { Link } from 'react-router-dom';

const CampaignTableRow = ({ campaign ,index}) => {
    return (
        <tr
            className={`cursor-pointer border-b ${index % 2 === 0 ? 'bg-[#fcaa29] bg-opacity-10' : 'bg-[#fcaa29] bg-opacity-20'} hover:bg-[#fcaa29] hover:bg-opacity-30`}
        >
            <td className=" py-2 text-center">
                <img className="w-16 h-10 object-cover rounded-sm mx-auto" src={campaign?.thumbnail} alt="" />
            </td>
            <td className="  py-2 text-sm text-center">{campaign.title}</td>
            <td className="  py-2 text-sm text-center hidden md:table-cell">{campaign.type}</td>
            <td className="  py-2 text-sm text-center">{campaign.amount}</td>
            <td className="  py-2 text-sm text-center hidden md:table-cell">{campaign.deadline}</td>
            <td className=" pr-1 py-2 text-sm text-center">
                <Link to={`/campaigns/${campaign._id}`} className="text-[#fcaa29] hover:underline">
                    See More
                </Link>
            </td>
        </tr>
    );
};

export default CampaignTableRow;