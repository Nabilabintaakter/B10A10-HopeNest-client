import { useLoaderData } from 'react-router-dom';
import { FaThList, FaThLarge } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { Zoom } from 'react-awesome-reveal';
import Container from '../Container/Container';
import CampaignCard from '../RunningCampaigns/CampaignCard';
import CampaignTableRow from './CampaignTableRow';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const AllCampaigns = () => {
    // const [campaigns, setCampaigns] = useState([])
    const [isGridView, setIsGridView] = useState(true);
    const [sort, setSort] = useState('');
    const { data : campaigns =[], isLoading } = useQuery({
        queryKey: ['campaigns',sort],
        queryFn: async () => {
            const res  = await axios.get(`https://b10-a10-hope-nest-server.vercel.app/allCampaigns?sort=${sort}`)
            return (res.data);
        },
    })

    
    useEffect(() => {
        document.title = 'AllCampaigns | HopeNest';
    }, []);

    return (
        <Container>
            <div className="py-8 md:py-10 lg:pb-16 font-sans">
                <div className="flex justify-center items-center mb-6 md:mb-3">
                    <Zoom triggerOnce duration={2000}>
                        <div className="text-center">
                            <h1 className="font-semibold text-[#374151] dark:text-white text-3xl md:text-4xl mb-2 md:mb-4">Explore All Campaigns</h1>
                            <p className="text-sm md:text-base font-sans text-[#1B1A1AB3] dark:text-gray-300 w-full md:w-[70%] mx-auto">Explore a variety of impactful campaigns dedicated to making a difference. Your support can help bring positive change to communities and causes in need.</p>
                        </div>
                    </Zoom>
                </div>
                <div className='flex  justify-between items-center mb-2'>
                    {/* Sort by Created At */}
                    <div>
                        <select
                            name="sort"
                            id="sort"
                            className=" border p-1 md:p-3 rounded-md bg-white text-sm md:text-base"
                            onChange={(e) => setSort(e.target.value)}
                        >
                            <option value="">Sort By Amount</option>
                            <option value="asc">Ascending Order</option>
                            <option value="dsc">Descending Order</option>
                        </select>
                    </div>
                    <div className="ml-2 md:ml-0 flex gap-2">
                        <button
                            title='List view'
                            onClick={() => setIsGridView(false)}
                            className={`btn btn-sm md:btn-md border-[1px] ${!isGridView ? 'bg-gray-800 text-white dark:bg-white dark:text-gray-800' : 'bg-white border-gray-200 dark:bg-gray-800 dark:text-white'}`}
                        >
                            <FaThList />
                        </button>
                        <button
                            title='Grid view'
                            onClick={() => setIsGridView(true)}
                            className={`btn btn-sm md:btn-md border-[1px] ${isGridView ? 'bg-gray-800 text-white dark:bg-white dark:text-gray-800' : 'bg-white border-gray-200 dark:bg-gray-800 dark:text-white'}`}
                        >
                            <FaThLarge />
                        </button>
                    </div>
                </div>

                {/* Render campaigns as Grid or Table based on the view */}
                {isGridView ? (
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3'>
                        {
                            campaigns.map(campaign =>
                                <CampaignCard campaign={campaign} key={campaign._id}></CampaignCard>
                            )
                        }
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full border-collapse bg-white shadow-md rounded-lg">
                            <thead>
                                <tr className="bg-[#e88f30] text-center">
                                    <th className="px-3 py-3 text-white text-sm md:text-base">Campaign</th>
                                    <th className=" py-3 text-white text-sm md:text-base">Campaign Title</th>
                                    <th className=" py-3 text-white hidden md:table-cell">Type</th>
                                    <th className="text-sm md:text-base py-3 text-white">Minimum Amount (৳)</th>
                                    <th className="py-3 text-white hidden md:table-cell">Deadline</th>
                                    <th className="text-sm md:text-base px-3 py-3 text-white">More Info</th>
                                </tr>
                            </thead>
                            <tbody>
                                {campaigns.map((campaign, index) => (
                                    <CampaignTableRow key={campaign._id} index={index} campaign={campaign}></CampaignTableRow>
                                ))}
                            </tbody>
                        </table>
                    </div>

                )}
            </div>
        </Container>
    );
};

export default AllCampaigns;
