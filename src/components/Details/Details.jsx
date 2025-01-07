import { useContext, useEffect } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaUser, FaEnvelope, FaMoneyBillAlt, FaCalendarAlt, FaTag, FaInfoCircle, FaFileAlt } from 'react-icons/fa';
import Container from '../Container/Container';

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
        fetch(`https://b10-a10-hope-nest-server.vercel.app/myDonations`, {
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
        <div className='bg-[#EFF0F5] dark:bg-gradient-to-tr dark:from-gray-900 dark:to-gray-700'>
            <Container>
                <div className='font-inter py-5 md:py-14'>
                    {/* Campaign Card */}
                    <div className="flex flex-col md:flex-row h-auto lg:h-[420px] p-2 bg-white shadow-lg group transform transition-all duration-500 hover:shadow-2xl">
                        {/* Thumbnail */}
                        <figure className='w-full lg:w-2/6 overflow-hidden'>
                            <img
                                className="w-full h-48 md:h-full object-cover transform group-hover:scale-105 transition-all ease-in-out duration-1000"
                                src={campaign?.thumbnail}
                                alt="campaign thumbnail"
                            />
                        </figure>

                        {/* Details Section */}
                        <div className="w-full lg:w-4/6 mt-4 md:mt-0 md:mx-6 flex flex-col gap-4 lg:gap-2 justify-between">
                            {/* Campaign Title */}
                            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                                {campaign?.title}
                            </h2>

                            {/* Campaign Type */}
                            <span className="badge bg-orange-200 border-[1px] border-orange-500 text-xs text-gray-600 xl:text-sm px-3 py-1 rounded-full">
                                {campaign?.type}
                            </span>

                            {/* Campaign Description */}
                            <p className="text-sm xl:text-base text-gray-600 leading-relaxed">
                                {campaign?.description}
                            </p>

                            {/* Amount */}
                            <p className="text-sm xl:text-base text-gray-800 font-medium flex items-center">
                                <span className="font-normal text-orange-500 text-2xl lg:text-3xl">
                                    ৳ {campaign?.amount}
                                </span>
                            </p>

                            {/* Deadline */}
                            <p className="text-sm xl:text-base text-gray-800 font-medium flex items-center">
                                <span className="text-gray-500 flex items-center gap-1">
                                    <FaCalendarAlt className='text-green-500' />
                                    <span className="text-green-600 font-semibold">{new Date(campaign?.deadline).toLocaleDateString()}</span>
                                </span>
                            </p>

                            {/* Campaign Owner */}
                            <p className="text-sm xl:text-base text-gray-800 font-medium flex items-center">
                                <span className="flex items-center gap-2">
                                    <FaUser className='text-blue-600' />
                                    {campaign?.name}
                                </span>
                            </p>

                            {/* Email */}
                            <p className="text-sm xl:text-base text-gray-800 font-medium flex items-center">
                                <span className="flex items-center gap-2 underline">
                                    <FaEnvelope className='text-blue-600' />
                                    <span className="text-blue-700">{campaign?.email}</span>
                                </span>
                            </p>

                            {/* Donate Button */}
                            <button
                                onClick={() => handleDonate(campaign)}
                                className="btn btn-sm md:btn-md border-none bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white text-sm xl:text-base font-medium rounded-md w-full transform transition duration-300"
                            >
                                Donate Now
                            </button>
                        </div>
                    </div>

                    {/* Back Button for Mobile */}
                    <Link
                        to='/'
                        className='btn mt-5 shadow-none mx-auto w-fit font-libre bg-transparent border-none flex md:hidden gap-2 items-center'>
                        <span className='text-[#374151] dark:text-white text-lg drop-shadow-md underline'>Back to home</span>
                    </Link>
                </div>
            </Container>
        </div>

    );
};

export default Details;
