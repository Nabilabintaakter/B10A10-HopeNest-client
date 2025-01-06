import { useContext, useEffect } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaUser, FaEnvelope, FaMoneyBillAlt, FaCalendarAlt, FaTag, FaInfoCircle, FaFileAlt } from 'react-icons/fa';

const Details = () => {
    const { user } = useContext(AuthContext);
    const campaign = useLoaderData();
    const navigate = useNavigate();
    const { dark } = useContext(AuthContext);

    const handleDonate = campaign => {
        const campaignData = {
            thumbnail: campaign.thumbnail,
            title: campaign.title,
            type: campaign.type,
            description: campaign.description,
            amount: campaign.amount,
            deadline: campaign.deadline,
            email: campaign.email,
            name: campaign.name,
            donorsEmail: user?.email
        };

        const currentDate = new Date();
        const campaignDeadline = new Date(campaign.deadline);

        if (currentDate > campaignDeadline) {
            Swal.fire({
                icon: "error",
                title: "The deadline for this campaign has passed. You can't donate.",
                showConfirmButton: false,
                timer: 3000
            });
            return;
        }
        fetch(`http://localhost:5000/myDonations`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(campaignData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Thank you! Your donation is successful.",
                        showConfirmButton: false,
                        timer: 3000
                    });
                    setTimeout(() => {
                        navigate('/myDonations');
                    }, 3000);
                }
            });
    };
    useEffect(() => {
        document.title = `${campaign.title} | HopeNest`;
    }, [])

    return (
        <div className='dark:bg-gradient-to-tr dark:from-gray-900 dark:to-gray-700'>
            <div className='font-inter w-[95%] lg:w-[85%] lg:max-w-7xl mx-auto pt-2 md:pt-10 md:pb-24'>
                <div className="flex flex-col lg:flex-row h-auto lg:h-[420px] rounded-md md:rounded-2xl bg-[#ffb94944] dark:bg-white shadow-xl mb-8 hover:shadow-2xl transform hover:scale-105 transition-all duration-500">
                    <figure className='w-full lg:w-2/6'>
                        <img
                            className="w-full h-full object-cover rounded-t-md md:rounded-t-2xl lg:rounded-l-2xl lg:rounded-r-none"
                            src={campaign?.thumbnail}
                            alt="campaign thumbnail"
                        />
                    </figure>
                    <div className="w-full lg:w-4/6 p-5 lg:px-6 flex flex-col gap-3 lg:justify-between">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-5 flex items-center">
                            <FaTag className="mr-2 text-green-600" /> {campaign?.title}
                        </h2>
                        <p className="text-sm xl:text-base text-gray-800 font-semibold flex items-center">
                            <FaInfoCircle className="mr-2 text-gray-700" /> Type: <span className="font-inter font-normal text-gray-700 ml-1">{campaign?.type}</span>
                        </p>
                        <div className='flex items-start'>
                            <p className="text-sm xl:text-base text-gray-800 font-semibold flex items-center">
                                <FaFileAlt className="mr-2 text-gray-700" /> Description:
                            </p>
                            <span className="text-sm xl:text-base font-inter font-normal text-gray-700 ml-1">{campaign?.description}</span>
                        </div>
                        <p className="text-sm xl:text-base text-gray-800 font-semibold flex items-center">
                            <FaMoneyBillAlt className="mr-2 text-gray-700" /> Minimum Donation: <span className="font-inter font-normal text-gray-700 ml-1">{campaign?.amount}Tk.</span>
                        </p>
                        <p className="text-sm xl:text-base text-gray-800 font-semibold flex items-center">
                            <FaCalendarAlt className="mr-2 text-gray-700" /> Ends in: <span className="font-inter font-normal text-gray-700 ml-1">{new Date(campaign?.deadline).toLocaleDateString()}</span>
                        </p>
                        <p className="text-sm xl:text-base text-gray-800 font-semibold flex items-center">
                            <FaUser className="mr-2 text-gray-700" /> Organizer: <span className="font-inter font-normal text-gray-700 ml-1">{campaign?.name}</span>
                        </p>
                        <p className="text-sm xl:text-base text-gray-800 font-semibold mb-3 md:mb-6 flex items-center">
                            <FaEnvelope className="mr-2 text-gray-700" /> Organizer Email: <span className="font-inter font-normal text-blue-700 ml-1 underline">{campaign?.email}</span>
                        </p>
                        <button onClick={() => handleDonate(campaign)} className="font-inter btn btn-sm md:btn-md border-none bg-green-500 hover:bg-green-600 text-white text-sm xl:text-base font-normal rounded-md w-full transform transition duration-300">
                            Donate
                        </button>
                    </div>
                </div>
                <Link to='/' className='btn mb-12 shadow-none mx-auto w-fit font-libre bg-transparent border-none flex md:hidden gap-2 items-center'>
                    <span className='text-[#374151] text-2xl drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)] underline'>Back to home</span>
                </Link>
            </div>
        </div>
    );
};

export default Details;
