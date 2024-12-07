
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
    const campaign = useLoaderData()
    return (
        <div className='font-inter w-[95%] md:w-[85%] max-w-7xl mx-auto pt-2 md:pt-10 md:pb-24'>
            <div className="flex flex-col lg:flex-row h-auto lg:h-[420px] rounded-md md:rounded-2xl bg-[#ffb94944] shadow-xl mb-8">
                <figure className='w-full lg:w-1/2'>
                    <img
                        className="w-full h-full object-cover rounded-t-md md:rounded-t-2xl lg:rounded-l-2xl lg:rounded-r-none"
                        src={campaign?.thumbnail}
                        alt="campaign thumbnail"
                    />
                </figure>
                <div className="w-full lg:w-1/2 p-5 lg:px-6 flex flex-col gap-3 lg:justify-between">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-5">
                        {campaign?.title}
                    </h2>
                    <p className="text-sm xl:text-base text-gray-800 font-semibold">
                        Type: <span className="font-inter font-normal text-gray-700">{campaign?.type}</span>
                    </p>
                    <p className="text-sm xl:text-base text-gray-800 font-semibold ">
                        Description: <span className="font-inter font-normal text-gray-700">{campaign?.description}</span>
                    </p>
                    <p className="text-sm xl:text-base text-gray-800 font-semibold ">
                        Minimum Donation: <span className="font-inter font-normal text-gray-700">{campaign?.amount}Tk.</span>
                    </p>
                    <p className="text-sm xl:text-base text-gray-800 font-semibold ">
                        Ends in: <span className="font-inter font-normal text-gray-700">{new Date(campaign?.deadline).toLocaleDateString()}</span>
                    </p>
                    <p className="text-sm xl:text-base text-gray-800 font-semibold ">
                        User Name: <span className="font-inter font-normal text-gray-700">{campaign?.name}</span>
                    </p>
                    <p className="text-sm xl:text-base text-gray-800 font-semibold mb-3 md:mb-6">
                        User Email: <span className="font-inter font-normal text-gray-700">{campaign?.email}</span>
                    </p>
                    <button className="font-inter btn btn-sm md:btn-md border-none bg-green-500 hover:bg-green-600 text-white text-sm xl:text-base font-normal rounded-md w-full">
                        Donate
                    </button>
                </div>
            </div>
            <Link to='/' className='btn mb-12 shadow-none mx-auto w-fit font-libre bg-transparent border-none flex md:hidden gap-2 items-center'><span className='text-[#374151] text-2xl drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)] underline'>Back to home</span>
            </Link>
        </div>
    );
};

export default Details;