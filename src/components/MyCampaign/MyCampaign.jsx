import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { HiDotsHorizontal } from "react-icons/hi";
import Swal from 'sweetalert2';
import { Zoom } from 'react-awesome-reveal';

const MyCampaign = () => {
    const { user, setLoading, dark } = useContext(AuthContext);
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://b10-a10-hope-nest-server.vercel.app/myCampaigns?email=${user.email}`)
                .then((res) => res.json())
                .then((data) => {
                    setCampaigns(data);
                    setLoading(false);
                })
                .catch(() => setLoading(false));
        }
    }, [user?.email]);




    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://b10-a10-hope-nest-server.vercel.app/campaigns/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your campaign has been deleted.",
                                icon: "success"
                            });
                            const remaining = campaigns.filter(campaign => campaign._id !== id);
                            setCampaigns(remaining);
                        }
                    })
            }
        });
    }
    useEffect(() => {
        document.title = 'MyCampaign | HopeNest';
    }, [])

    return (
        <div className='dark:bg-gradient-to-tr dark:from-gray-900 dark:to-gray-700'>
            <div className="py-10 md:py-14 lg:mb-20 font-sans w-[95%] mx-auto max-w-7xl">
                <Zoom triggerOnce duration={2000}>
                <div className="flex justify-center items-center mb-10 md:mb-12">
                    <div className="text-center">
                        <h1 className="font-semibold text-[#374151] dark:text-white text-3xl md:text-4xl mb-2 md:mb-4">Manage My Campaigns</h1>
                        <p className="text-sm md:text-base font-sans text-[#1B1A1AB3] dark:text-gray-300 w-full md:w-[70%] mx-auto">View and manage the campaigns you’ve created. Update details, delete campaigns, or review essential information—all in one place.</p>
                    </div>
                </div>
                </Zoom>

                {/* Make table scrollable on smaller screens */}
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse bg-white shadow-md rounded-lg">
                        <thead>
                            <tr className="bg-[#e88f30] text-left">
                                <th className="px-4 py-2 text-white">SL No.</th>
                                <th className="px-4 py-2 text-white">Campaign Title</th>
                                <th className="px-4 py-2 text-white hidden md:table-cell">Minimum Amount (Tk.)</th>
                                <th className="px-4 py-2 text-white hidden md:table-cell">Organizer</th>
                                <th className="px-4 py-2 text-white">Actions</th>
                                <th className="px-4 py-2 text-white">More Info</th>
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

                                    <td className="px-4 py-4 hidden md:table-cell">{campaign.amount}</td>
                                    <td className="px-4 py-4 hidden md:table-cell">{campaign.name}</td>
                                    <td className="px-4 py-4 flex flex-col md:flex-row items-center gap-1">
                                        <Link to={`/updateCampaign/${campaign._id}`} title='Update' className='btn btn-sm md:btn-md bg-white text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300'>
                                            <MdModeEdit /><span className='hidden md:block'>Update</span>
                                        </Link>
                                        <button onClick={() => handleDelete(campaign._id)} title='Delete' className='btn btn-sm md:btn-md bg-white hover:bg-red-500 text-red-500 hover:text-white transition-all duration-300 md:text-xl'>
                                            <RiDeleteBin6Fill />
                                        </button>
                                    </td>
                                    <td className="px-4 py-4 ">
                                        <Link to={`/campaigns/${campaign._id}`} title='see more' className='btn btn-sm md:btn-md bg-white md:text-xl'>
                                            <HiDotsHorizontal />
                                        </Link>
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

export default MyCampaign;
