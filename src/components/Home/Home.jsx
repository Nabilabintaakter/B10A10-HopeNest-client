
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import RunningCampaigns from '../RunningCampaigns/RunningCampaigns';
import TopContributorsSection from '../TopContributorsSection/TopContributorsSection';
import CallToActionSection from '../CallToActionSection/CallToActionSection';

const Home = () => {
    const campaigns = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <RunningCampaigns campaigns={campaigns}></RunningCampaigns>
            <TopContributorsSection></TopContributorsSection>
            <CallToActionSection></CallToActionSection>
        </div>
    );
};

export default Home;