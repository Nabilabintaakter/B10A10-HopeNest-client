
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import RunningCampaigns from '../RunningCampaigns/RunningCampaigns';
import TopContributorsSection from '../TopContributorsSection/TopContributorsSection';
import CallToActionSection from '../CallToActionSection/CallToActionSection';
import {useEffect } from 'react';


const Home = () => {
    useEffect(() => {
        document.title = 'Home | HopeNest';
    }, [])
    const campaigns = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div className=' dark:bg-gray-700'>
                <RunningCampaigns campaigns={campaigns}></RunningCampaigns>
            </div>
            <div className='bg-gray-50 dark:bg-gray-700'>
                <TopContributorsSection></TopContributorsSection>
            </div>
            <CallToActionSection></CallToActionSection>
        </div>
    );
};

export default Home;